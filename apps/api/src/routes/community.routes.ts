import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import type { AuthRequest } from '../middleware/auth.js';
import { prisma } from '../lib/prisma.js';
import { createPostSchema, createCommentSchema, paginationSchema } from '@yunai/shared';

export const communityRouter = Router();

// List posts
communityRouter.get('/posts', async (req, res, next) => {
  try {
    const { page, limit, search } = paginationSchema.parse(req.query);
    const { courseId } = req.query;

    const where: any = {};
    if (search) where.OR = [
      { title: { contains: search, mode: 'insensitive' } },
      { content: { contains: search, mode: 'insensitive' } },
    ];
    if (courseId) where.courseId = courseId;

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where,
        include: {
          user: { select: { id: true, name: true, avatar: true } },
          _count: { select: { comments: true } },
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.post.count({ where }),
    ]);

    res.json({
      success: true,
      data: posts,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) { next(error); }
});

// Get single post with comments
communityRouter.get('/posts/:id', async (req, res, next) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: req.params.id },
      include: {
        user: { select: { id: true, name: true, avatar: true } },
        comments: {
          include: { user: { select: { id: true, name: true, avatar: true } } },
          orderBy: { createdAt: 'asc' },
        },
      },
    });

    if (!post) {
      res.status(404).json({ success: false, error: 'Post not found' });
      return;
    }
    res.json({ success: true, data: post });
  } catch (error) { next(error); }
});

// Create post
communityRouter.post('/posts', authenticate, validate(createPostSchema), async (req: AuthRequest, res, next) => {
  try {
    const post = await prisma.post.create({
      data: { ...req.body, userId: req.user!.id },
      include: { user: { select: { id: true, name: true, avatar: true } } },
    });
    res.status(201).json({ success: true, data: post });
  } catch (error) { next(error); }
});

// Add comment
communityRouter.post('/posts/:id/comments', authenticate, validate(createCommentSchema), async (req: AuthRequest, res, next) => {
  try {
    const comment = await prisma.comment.create({
      data: { content: req.body.content, userId: req.user!.id, postId: req.params.id },
      include: { user: { select: { id: true, name: true, avatar: true } } },
    });
    res.status(201).json({ success: true, data: comment });
  } catch (error) { next(error); }
});

// Delete post (owner/admin)
communityRouter.delete('/posts/:id', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const post = await prisma.post.findUnique({ where: { id: req.params.id } });
    if (!post || (post.userId !== req.user!.id && req.user!.role !== 'ADMIN')) {
      res.status(403).json({ success: false, error: 'Not authorized' });
      return;
    }
    await prisma.post.delete({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Post deleted' });
  } catch (error) { next(error); }
});
