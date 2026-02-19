import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';
import { prisma } from '../lib/prisma.js';
import crypto from 'crypto';

export const certificateRouter: Router = Router();

// Get user's certificates
certificateRouter.get('/', authenticate, async (req, res, next) => {
  try {
    const certificates = await prisma.certificate.findMany({
      where: { userId: req.user!.id },
      include: {
        course: { select: { id: true, title: true, slug: true } },
      },
      orderBy: { issuedAt: 'desc' },
    });
    res.json({ success: true, data: certificates });
  } catch (error) { next(error); }
});

// Generate certificate for a completed course
certificateRouter.post('/courses/:courseId', authenticate, async (req, res, next) => {
  try {
    const courseId = req.params.courseId as string;
    const userId = req.user!.id;

    // Check enrollment and completion
    const enrollment = await prisma.enrollment.findUnique({
      where: { userId_courseId: { userId, courseId } },
    });

    if (!enrollment || enrollment.progress < 100) {
      res.status(400).json({ success: false, error: 'Course not completed yet' });
      return;
    }

    // Check if certificate already exists
    const existing = await prisma.certificate.findUnique({
      where: { userId_courseId: { userId, courseId } },
    });

    if (existing) {
      res.json({ success: true, data: existing });
      return;
    }

    const certificateNumber = `YUNAI-${Date.now().toString(36).toUpperCase()}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;

    const certificate = await prisma.certificate.create({
      data: { userId, courseId, certificateNumber },
      include: {
        course: { select: { id: true, title: true } },
        user: { select: { id: true, name: true } },
      },
    });

    res.status(201).json({ success: true, data: certificate });
  } catch (error) { next(error); }
});

// Public: Verify certificate
certificateRouter.get('/verify/:number', async (req, res, next) => {
  try {
    const certificate = await prisma.certificate.findUnique({
      where: { certificateNumber: req.params.number },
      include: {
        user: { select: { name: true } },
        course: { select: { title: true } },
      },
    });

    if (!certificate) {
      res.status(404).json({ success: false, error: 'Certificate not found' });
      return;
    }

    res.json({
      success: true,
      data: {
        certificateNumber: certificate.certificateNumber,
        studentName: certificate.user.name,
        courseName: certificate.course.title,
        issuedAt: certificate.issuedAt,
      },
    });
  } catch (error) { next(error); }
});
