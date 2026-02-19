import { Router } from 'express';
import { authenticate, requireRole } from '../middleware/auth.js';
import { prisma } from '../lib/prisma.js';

export const dashboardRouter: Router = Router();

// Student dashboard stats
dashboardRouter.get('/student', authenticate, async (req, res, next) => {
  try {
    const userId = req.user!.id;

    const [enrollments, completedCourses, quizAttempts, recentProgress] = await Promise.all([
      prisma.enrollment.count({ where: { userId } }),
      prisma.enrollment.count({ where: { userId, completedAt: { not: null } } }),
      prisma.quizAttempt.aggregate({ where: { userId }, _avg: { score: true }, _count: true }),
      prisma.lessonProgress.findMany({
        where: { userId, completed: true },
        orderBy: { completedAt: 'desc' },
        take: 10,
        include: {
          lesson: { select: { title: true, module: { select: { course: { select: { title: true } } } } } },
        },
      }),
    ]);

    res.json({
      success: true,
      data: {
        totalEnrolled: enrollments,
        coursesCompleted: completedCourses,
        averageQuizScore: quizAttempts._avg.score || 0,
        totalQuizAttempts: quizAttempts._count,
        recentActivity: recentProgress,
      },
    });
  } catch (error) { next(error); }
});

// Instructor dashboard stats
dashboardRouter.get('/instructor', authenticate, requireRole('INSTRUCTOR', 'ADMIN'), async (req, res, next) => {
  try {
    const instructorId = req.user!.id;

    const [courses, totalStudents, avgRating] = await Promise.all([
      prisma.course.count({ where: { instructorId } }),
      prisma.enrollment.count({ where: { course: { instructorId } } }),
      prisma.review.aggregate({ where: { course: { instructorId } }, _avg: { rating: true } }),
    ]);

    res.json({
      success: true,
      data: {
        totalCourses: courses,
        totalStudents,
        averageRating: avgRating._avg.rating || 0,
      },
    });
  } catch (error) { next(error); }
});

// Admin dashboard stats
dashboardRouter.get('/admin', authenticate, requireRole('ADMIN'), async (_req, res, next) => {
  try {
    const [totalUsers, totalCourses, totalEnrollments, usersByRole] = await Promise.all([
      prisma.user.count(),
      prisma.course.count(),
      prisma.enrollment.count(),
      prisma.user.groupBy({ by: ['role'], _count: true }),
    ]);

    // Monthly enrollment trend (last 6 months)
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const recentEnrollments = await prisma.enrollment.findMany({
      where: { enrolledAt: { gte: sixMonthsAgo } },
      select: { enrolledAt: true },
    });

    res.json({
      success: true,
      data: {
        totalUsers,
        totalCourses,
        totalEnrollments,
        usersByRole,
        recentEnrollments: recentEnrollments.length,
      },
    });
  } catch (error) { next(error); }
});
