import { Router } from 'express';
import { authenticate, requireRole } from '../middleware/auth.js';
import type { AuthRequest } from '../middleware/auth.js';
import { prisma } from '../lib/prisma.js';
import { paginationSchema } from '@yunai/shared';

export const userRouter = Router();

// Get user profile
userRouter.get('/profile', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.id },
      select: {
        id: true, name: true, email: true, role: true,
        avatar: true, bio: true, emailVerified: true,
        createdAt: true, updatedAt: true,
      },
    });
    res.json({ success: true, data: user });
  } catch (error) { next(error); }
});

// Update profile
userRouter.put('/profile', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const { name, bio, avatar } = req.body;
    const user = await prisma.user.update({
      where: { id: req.user!.id },
      data: { ...(name && { name }), ...(bio !== undefined && { bio }), ...(avatar && { avatar }) },
      select: {
        id: true, name: true, email: true, role: true,
        avatar: true, bio: true, emailVerified: true,
        createdAt: true, updatedAt: true,
      },
    });
    res.json({ success: true, data: user });
  } catch (error) { next(error); }
});

// Admin: List all users
userRouter.get('/', authenticate, requireRole('ADMIN'), async (req, res, next) => {
  try {
    const { page, limit, search } = paginationSchema.parse(req.query);
    const where = search
      ? { OR: [{ name: { contains: search, mode: 'insensitive' as const } }, { email: { contains: search, mode: 'insensitive' as const } }] }
      : {};

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        select: { id: true, name: true, email: true, role: true, avatar: true, emailVerified: true, createdAt: true },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.user.count({ where }),
    ]);

    res.json({
      success: true,
      data: users,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) { next(error); }
});

// Admin: Update user role
userRouter.patch('/:id/role', authenticate, requireRole('ADMIN'), async (req, res, next) => {
  try {
    const { role } = req.body;
    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: { role },
      select: { id: true, name: true, email: true, role: true },
    });
    res.json({ success: true, data: user });
  } catch (error) { next(error); }
});
