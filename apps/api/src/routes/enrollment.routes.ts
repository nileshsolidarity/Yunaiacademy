import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';
import type { AuthRequest } from '../middleware/auth.js';
import { prisma } from '../lib/prisma.js';

export const enrollmentRouter = Router();

// Get user's enrollments
enrollmentRouter.get('/', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const enrollments = await prisma.enrollment.findMany({
      where: { userId: req.user!.id },
      include: {
        course: {
          include: {
            instructor: { select: { id: true, name: true, avatar: true } },
            _count: { select: { modules: true } },
          },
        },
      },
      orderBy: { enrolledAt: 'desc' },
    });
    res.json({ success: true, data: enrollments });
  } catch (error) { next(error); }
});

// Enroll in a course
enrollmentRouter.post('/courses/:courseId', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const course = await prisma.course.findUnique({ where: { id: req.params.courseId } });
    if (!course || course.status !== 'PUBLISHED') {
      res.status(404).json({ success: false, error: 'Course not found or not available' });
      return;
    }

    const existing = await prisma.enrollment.findUnique({
      where: { userId_courseId: { userId: req.user!.id, courseId: req.params.courseId } },
    });
    if (existing) {
      res.status(409).json({ success: false, error: 'Already enrolled' });
      return;
    }

    const enrollment = await prisma.enrollment.create({
      data: { userId: req.user!.id, courseId: req.params.courseId },
    });
    res.status(201).json({ success: true, data: enrollment });
  } catch (error) { next(error); }
});

// Mark lesson as complete
enrollmentRouter.post('/lessons/:lessonId/complete', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const progress = await prisma.lessonProgress.upsert({
      where: { userId_lessonId: { userId: req.user!.id, lessonId: req.params.lessonId } },
      create: { userId: req.user!.id, lessonId: req.params.lessonId, completed: true, completedAt: new Date() },
      update: { completed: true, completedAt: new Date() },
    });

    // Update overall course progress
    const lesson = await prisma.lesson.findUnique({
      where: { id: req.params.lessonId },
      include: { module: { include: { course: { include: { modules: { include: { lessons: true } } } } } } },
    });

    if (lesson) {
      const courseId = lesson.module.courseId;
      const totalLessons = lesson.module.course.modules.reduce((sum, m) => sum + m.lessons.length, 0);
      const completedLessons = await prisma.lessonProgress.count({
        where: {
          userId: req.user!.id,
          completed: true,
          lesson: { module: { courseId } },
        },
      });

      const progressPercent = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

      await prisma.enrollment.update({
        where: { userId_courseId: { userId: req.user!.id, courseId } },
        data: {
          progress: progressPercent,
          ...(progressPercent >= 100 ? { completedAt: new Date() } : {}),
        },
      });
    }

    res.json({ success: true, data: progress });
  } catch (error) { next(error); }
});

// Get course progress detail
enrollmentRouter.get('/courses/:courseId/progress', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const enrollment = await prisma.enrollment.findUnique({
      where: { userId_courseId: { userId: req.user!.id, courseId: req.params.courseId } },
    });

    const completedLessons = await prisma.lessonProgress.findMany({
      where: {
        userId: req.user!.id,
        completed: true,
        lesson: { module: { courseId: req.params.courseId } },
      },
      select: { lessonId: true, completedAt: true },
    });

    res.json({
      success: true,
      data: {
        enrollment,
        completedLessons,
      },
    });
  } catch (error) { next(error); }
});
