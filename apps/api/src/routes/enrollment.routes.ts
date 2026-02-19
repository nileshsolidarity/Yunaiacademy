import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';
import { prisma } from '../lib/prisma.js';

export const enrollmentRouter: Router = Router();

// Get user's enrollments
enrollmentRouter.get('/', authenticate, async (req, res, next) => {
  try {
    const enrollments = await prisma.enrollment.findMany({
      where: { userId: req.user!.id },
      include: {
        course: {
          include: {
            instructor: { select: { id: true, name: true, avatar: true } },
            _count: { select: { modules: true } },
            modules: {
              orderBy: { order: 'asc' },
              take: 1,
              include: {
                lessons: {
                  orderBy: { order: 'asc' },
                  take: 1,
                  select: { id: true },
                },
              },
            },
          },
        },
      },
      orderBy: { enrolledAt: 'desc' },
    });
    res.json({ success: true, data: enrollments });
  } catch (error) { next(error); }
});

// Enroll in a course
enrollmentRouter.post('/courses/:courseId', authenticate, async (req, res, next) => {
  try {
    const courseId = req.params.courseId as string;
    const course = await prisma.course.findUnique({ where: { id: courseId } });
    if (!course || course.status !== 'PUBLISHED') {
      res.status(404).json({ success: false, error: 'Course not found or not available' });
      return;
    }

    const existing = await prisma.enrollment.findUnique({
      where: { userId_courseId: { userId: req.user!.id, courseId } },
    });
    if (existing) {
      res.status(409).json({ success: false, error: 'Already enrolled' });
      return;
    }

    const enrollment = await prisma.enrollment.create({
      data: { userId: req.user!.id, courseId },
    });
    res.status(201).json({ success: true, data: enrollment });
  } catch (error) { next(error); }
});

// Mark lesson as complete
enrollmentRouter.post('/lessons/:lessonId/complete', authenticate, async (req, res, next) => {
  try {
    const lessonId = req.params.lessonId as string;
    const progress = await prisma.lessonProgress.upsert({
      where: { userId_lessonId: { userId: req.user!.id, lessonId } },
      create: { userId: req.user!.id, lessonId, completed: true, completedAt: new Date() },
      update: { completed: true, completedAt: new Date() },
    });

    // Update overall course progress
    const lesson = await prisma.lesson.findUnique({
      where: { id: lessonId },
      include: { module: { include: { course: { include: { modules: { include: { lessons: true } } } } } } },
    });

    if (lesson) {
      const courseId = (lesson as any).module.courseId;
      const totalLessons = (lesson as any).module.course.modules.reduce((sum: number, m: any) => sum + m.lessons.length, 0);
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

// Get course progress detail (accepts courseId or courseSlug)
enrollmentRouter.get('/courses/:courseIdOrSlug/progress', authenticate, async (req, res, next) => {
  try {
    const param = req.params.courseIdOrSlug as string;

    // Try to find by ID first, then by slug
    let course = await prisma.course.findUnique({ where: { id: param }, select: { id: true } });
    if (!course) {
      course = await prisma.course.findUnique({ where: { slug: param }, select: { id: true } });
    }

    if (!course) {
      res.status(404).json({ success: false, error: 'Course not found' });
      return;
    }

    const courseId = course.id;

    const enrollment = await prisma.enrollment.findUnique({
      where: { userId_courseId: { userId: req.user!.id, courseId } },
    });

    const completedLessons = await prisma.lessonProgress.findMany({
      where: {
        userId: req.user!.id,
        completed: true,
        lesson: { module: { courseId } },
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
