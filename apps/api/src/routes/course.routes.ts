import { Router } from 'express';
import { authenticate, requireRole } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { prisma } from '../lib/prisma.js';
import { createCourseSchema, updateCourseSchema, createModuleSchema, createLessonSchema, paginationSchema } from '@yunai/shared';

export const courseRouter: Router = Router();

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// List published courses (public)
courseRouter.get('/', async (req, res, next) => {
  try {
    const { page, limit, search, sortBy, sortOrder } = paginationSchema.parse(req.query);
    const { category, level } = req.query;

    const where: any = { status: 'PUBLISHED' };
    if (search) where.OR = [
      { title: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
    ];
    if (category) where.category = category;
    if (level) where.level = level;

    const [courses, total] = await Promise.all([
      prisma.course.findMany({
        where,
        include: {
          instructor: { select: { id: true, name: true, avatar: true } },
          _count: { select: { enrollments: true, reviews: true } },
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { [sortBy || 'createdAt']: sortOrder },
      }),
      prisma.course.count({ where }),
    ]);

    res.json({
      success: true,
      data: courses,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) { next(error); }
});

// Get single course by slug (public)
courseRouter.get('/:slug', async (req, res, next) => {
  try {
    const course = await prisma.course.findUnique({
      where: { slug: req.params.slug },
      include: {
        instructor: { select: { id: true, name: true, avatar: true, bio: true } },
        modules: {
          orderBy: { order: 'asc' },
          include: { lessons: { orderBy: { order: 'asc' }, select: { id: true, title: true, type: true, duration: true, order: true } } },
        },
        _count: { select: { enrollments: true, reviews: true } },
      },
    });

    if (!course) {
      res.status(404).json({ success: false, error: 'Course not found' });
      return;
    }

    // Calculate average rating
    const avgRating = await prisma.review.aggregate({
      where: { courseId: course.id },
      _avg: { rating: true },
    });

    res.json({ success: true, data: { ...course, averageRating: avgRating._avg.rating || 0 } });
  } catch (error) { next(error); }
});

// Create course (instructor/admin)
courseRouter.post('/', authenticate, requireRole('INSTRUCTOR', 'ADMIN'), validate(createCourseSchema), async (req, res, next) => {
  try {
    const slug = slugify(req.body.title) + '-' + Date.now().toString(36);
    const course = await prisma.course.create({
      data: { ...req.body, slug, instructorId: req.user!.id },
    });
    res.status(201).json({ success: true, data: course });
  } catch (error) { next(error); }
});

// Update course (owner/admin)
courseRouter.put('/:id', authenticate, validate(updateCourseSchema), async (req, res, next) => {
  try {
    const courseId = req.params.id as string;
    const course = await prisma.course.findUnique({ where: { id: courseId } });
    if (!course) { res.status(404).json({ success: false, error: 'Course not found' }); return; }
    if (course.instructorId !== req.user!.id && req.user!.role !== 'ADMIN') {
      res.status(403).json({ success: false, error: 'Not authorized' }); return;
    }

    const updated = await prisma.course.update({
      where: { id: courseId },
      data: req.body,
    });
    res.json({ success: true, data: updated });
  } catch (error) { next(error); }
});

// Publish/unpublish course
courseRouter.patch('/:id/publish', authenticate, async (req, res, next) => {
  try {
    const courseId = req.params.id as string;
    const course = await prisma.course.findUnique({ where: { id: courseId } });
    if (!course) { res.status(404).json({ success: false, error: 'Course not found' }); return; }
    if (course.instructorId !== req.user!.id && req.user!.role !== 'ADMIN') {
      res.status(403).json({ success: false, error: 'Not authorized' }); return;
    }

    const newStatus = course.status === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED';
    const updated = await prisma.course.update({
      where: { id: courseId },
      data: { status: newStatus },
    });
    res.json({ success: true, data: updated });
  } catch (error) { next(error); }
});

// Add module to course
courseRouter.post('/:id/modules', authenticate, validate(createModuleSchema), async (req, res, next) => {
  try {
    const courseId = req.params.id as string;
    const course = await prisma.course.findUnique({ where: { id: courseId } });
    if (!course || (course.instructorId !== req.user!.id && req.user!.role !== 'ADMIN')) {
      res.status(403).json({ success: false, error: 'Not authorized' }); return;
    }

    const moduleCount = await prisma.module.count({ where: { courseId } });
    const module = await prisma.module.create({
      data: { ...req.body, courseId, order: req.body.order ?? moduleCount },
    });
    res.status(201).json({ success: true, data: module });
  } catch (error) { next(error); }
});

// Add lesson to module
courseRouter.post('/modules/:moduleId/lessons', authenticate, validate(createLessonSchema), async (req, res, next) => {
  try {
    const moduleId = req.params.moduleId as string;
    const module = await prisma.module.findUnique({ where: { id: moduleId }, include: { course: true } });
    if (!module || ((module as any).course.instructorId !== req.user!.id && req.user!.role !== 'ADMIN')) {
      res.status(403).json({ success: false, error: 'Not authorized' }); return;
    }

    const lessonCount = await prisma.lesson.count({ where: { moduleId } });
    const lesson = await prisma.lesson.create({
      data: { ...req.body, moduleId, order: req.body.order ?? lessonCount },
    });
    res.status(201).json({ success: true, data: lesson });
  } catch (error) { next(error); }
});

// Get instructor's courses
courseRouter.get('/instructor/mine', authenticate, requireRole('INSTRUCTOR', 'ADMIN'), async (req, res, next) => {
  try {
    const courses = await prisma.course.findMany({
      where: { instructorId: req.user!.id },
      include: { _count: { select: { enrollments: true, reviews: true } } },
      orderBy: { createdAt: 'desc' },
    });
    res.json({ success: true, data: courses });
  } catch (error) { next(error); }
});
