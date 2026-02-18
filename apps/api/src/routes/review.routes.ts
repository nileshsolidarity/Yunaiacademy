import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import type { AuthRequest } from '../middleware/auth.js';
import { prisma } from '../lib/prisma.js';
import { createReviewSchema, paginationSchema } from '@yunai/shared';

export const reviewRouter = Router();

// Get reviews for a course
reviewRouter.get('/courses/:courseId', async (req, res, next) => {
  try {
    const { page, limit } = paginationSchema.parse(req.query);

    const [reviews, total] = await Promise.all([
      prisma.review.findMany({
        where: { courseId: req.params.courseId },
        include: { user: { select: { id: true, name: true, avatar: true } } },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.review.count({ where: { courseId: req.params.courseId } }),
    ]);

    res.json({
      success: true,
      data: reviews,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) { next(error); }
});

// Create review
reviewRouter.post('/courses/:courseId', authenticate, validate(createReviewSchema), async (req: AuthRequest, res, next) => {
  try {
    // Check enrollment
    const enrollment = await prisma.enrollment.findUnique({
      where: { userId_courseId: { userId: req.user!.id, courseId: req.params.courseId } },
    });
    if (!enrollment) {
      res.status(403).json({ success: false, error: 'You must be enrolled to review this course' });
      return;
    }

    const review = await prisma.review.upsert({
      where: { userId_courseId: { userId: req.user!.id, courseId: req.params.courseId } },
      create: { userId: req.user!.id, courseId: req.params.courseId, ...req.body },
      update: req.body,
      include: { user: { select: { id: true, name: true, avatar: true } } },
    });

    res.status(201).json({ success: true, data: review });
  } catch (error) { next(error); }
});

// Delete review
reviewRouter.delete('/:id', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const review = await prisma.review.findUnique({ where: { id: req.params.id } });
    if (!review || (review.userId !== req.user!.id && req.user!.role !== 'ADMIN')) {
      res.status(403).json({ success: false, error: 'Not authorized' });
      return;
    }
    await prisma.review.delete({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Review deleted' });
  } catch (error) { next(error); }
});
