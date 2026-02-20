import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { prisma } from '../lib/prisma.js';
import { sendMessageSchema, paginationSchema } from '@yunai/shared';

export const messageRouter: Router = Router();

// Get conversations list (grouped by other user)
messageRouter.get('/conversations', authenticate, async (req, res, next) => {
  try {
    const userId = req.user!.id;

    // Get all distinct users the current user has communicated with
    const sentTo = await prisma.message.findMany({
      where: { senderId: userId },
      select: { receiverId: true },
      distinct: ['receiverId'],
    });

    const receivedFrom = await prisma.message.findMany({
      where: { receiverId: userId },
      select: { senderId: true },
      distinct: ['senderId'],
    });

    const contactIds = [
      ...new Set([
        ...sentTo.map((m) => m.receiverId),
        ...receivedFrom.map((m) => m.senderId),
      ]),
    ];

    // Build conversation summaries
    const conversations = await Promise.all(
      contactIds.map(async (contactId) => {
        const [contact, lastMessage, unreadCount] = await Promise.all([
          prisma.user.findUnique({
            where: { id: contactId },
            select: { id: true, name: true, avatar: true },
          }),
          prisma.message.findFirst({
            where: {
              OR: [
                { senderId: userId, receiverId: contactId },
                { senderId: contactId, receiverId: userId },
              ],
            },
            orderBy: { createdAt: 'desc' },
          }),
          prisma.message.count({
            where: { senderId: contactId, receiverId: userId, read: false },
          }),
        ]);

        return {
          userId: contactId,
          userName: contact?.name ?? 'Unknown User',
          userAvatar: contact?.avatar ?? null,
          lastMessage: lastMessage?.content ?? '',
          lastMessageAt: lastMessage?.createdAt.toISOString() ?? '',
          unreadCount,
        };
      }),
    );

    // Sort by most recent message
    conversations.sort(
      (a, b) => new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime(),
    );

    res.json({ success: true, data: conversations });
  } catch (error) {
    next(error);
  }
});

// Get messages with a specific user
messageRouter.get('/conversations/:userId', authenticate, async (req, res, next) => {
  try {
    const currentUserId = req.user!.id;
    const otherUserId = req.params.userId as string;
    const { page, limit } = paginationSchema.parse(req.query);

    const where = {
      OR: [
        { senderId: currentUserId, receiverId: otherUserId },
        { senderId: otherUserId, receiverId: currentUserId },
      ],
    };

    const [messages, total] = await Promise.all([
      prisma.message.findMany({
        where,
        include: {
          sender: { select: { id: true, name: true, avatar: true } },
          receiver: { select: { id: true, name: true, avatar: true } },
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.message.count({ where }),
    ]);

    // Mark unread messages from the other user as read
    await prisma.message.updateMany({
      where: { senderId: otherUserId, receiverId: currentUserId, read: false },
      data: { read: true },
    });

    res.json({
      success: true,
      data: messages.reverse(),
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) {
    next(error);
  }
});

// Send a message
messageRouter.post('/', authenticate, validate(sendMessageSchema), async (req, res, next) => {
  try {
    const senderId = req.user!.id;
    const { receiverId, subject, content } = req.body;

    if (senderId === receiverId) {
      res.status(400).json({ success: false, error: 'Cannot send a message to yourself' });
      return;
    }

    // Verify receiver exists
    const receiver = await prisma.user.findUnique({ where: { id: receiverId } });
    if (!receiver) {
      res.status(404).json({ success: false, error: 'Recipient not found' });
      return;
    }

    const message = await prisma.message.create({
      data: { senderId, receiverId, subject, content },
      include: {
        sender: { select: { id: true, name: true, avatar: true } },
        receiver: { select: { id: true, name: true, avatar: true } },
      },
    });

    // Create a notification for the receiver
    await prisma.notification.create({
      data: {
        userId: receiverId,
        title: 'New Message',
        message: `${req.user!.name} sent you a message`,
        link: '/dashboard/communications',
      },
    });

    res.status(201).json({ success: true, data: message });
  } catch (error) {
    next(error);
  }
});

// Get unread message count
messageRouter.get('/unread-count', authenticate, async (req, res, next) => {
  try {
    const count = await prisma.message.count({
      where: { receiverId: req.user!.id, read: false },
    });
    res.json({ success: true, data: { count } });
  } catch (error) {
    next(error);
  }
});

// Get searchable users to message (instructors for students, all for instructors/admins)
messageRouter.get('/contacts', authenticate, async (req, res, next) => {
  try {
    const { search } = req.query;
    const currentUser = req.user!;

    const where: any = {
      id: { not: currentUser.id },
    };

    // Students can message instructors and admins; instructors/admins can message anyone
    if (currentUser.role === 'STUDENT') {
      where.role = { in: ['INSTRUCTOR', 'ADMIN'] };
    }

    if (search && typeof search === 'string') {
      where.name = { contains: search, mode: 'insensitive' };
    }

    const users = await prisma.user.findMany({
      where,
      select: { id: true, name: true, avatar: true, role: true },
      orderBy: { name: 'asc' },
      take: 20,
    });

    res.json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
});
