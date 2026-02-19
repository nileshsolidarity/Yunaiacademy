import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';
import { prisma } from '../lib/prisma.js';
import { env } from '../config/env.js';

export const aiRouter: Router = Router();

// AI Chat - send message
aiRouter.post('/chat', authenticate, async (req, res, next) => {
  try {
    const { message, sessionId, courseContext } = req.body;

    if (!env.GOOGLE_GENAI_API_KEY) {
      res.status(503).json({ success: false, error: 'AI service not configured' });
      return;
    }

    // Import dynamically to avoid errors when API key is not set
    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey: env.GOOGLE_GENAI_API_KEY });

    // Get recent chat history for context
    const history = await prisma.aiChatHistory.findMany({
      where: { userId: req.user!.id, sessionId },
      orderBy: { createdAt: 'asc' },
      take: 20,
    });

    const systemPrompt = `You are an AI tutor for Yunai Academy, a CA (Chartered Accountancy) learning platform.
Your role is to help students understand CA exam topics including Accounting, Taxation, Auditing, Corporate Law,
Cost Accounting, Financial Management, and related subjects.
${courseContext ? `\nCurrent context: The student is studying "${courseContext}".` : ''}
Be concise, accurate, and encouraging. Use examples where helpful.
If a question is outside CA/accounting topics, politely redirect the student.`;

    const chatHistory = history.map((h: { role: string; message: string }) => ({
      role: h.role as 'user' | 'model',
      parts: [{ text: h.message }],
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [
        { role: 'user', parts: [{ text: systemPrompt }] },
        ...chatHistory,
        { role: 'user', parts: [{ text: message }] },
      ],
    });

    const aiMessage = response.text || 'I apologize, I could not generate a response.';

    // Save both messages to history
    await prisma.aiChatHistory.createMany({
      data: [
        { userId: req.user!.id, role: 'user', message, sessionId },
        { userId: req.user!.id, role: 'assistant', message: aiMessage, sessionId },
      ],
    });

    res.json({ success: true, data: { message: aiMessage, sessionId } });
  } catch (error) { next(error); }
});

// Get chat history
aiRouter.get('/chat/history', authenticate, async (req, res, next) => {
  try {
    const { sessionId } = req.query;
    const history = await prisma.aiChatHistory.findMany({
      where: {
        userId: req.user!.id,
        ...(sessionId ? { sessionId: sessionId as string } : {}),
      },
      orderBy: { createdAt: 'asc' },
    });
    res.json({ success: true, data: history });
  } catch (error) { next(error); }
});

// AI-powered course recommendations
aiRouter.get('/recommend', authenticate, async (req, res, next) => {
  try {
    // Get user's enrolled courses and progress
    const enrollments = await prisma.enrollment.findMany({
      where: { userId: req.user!.id },
      include: { course: { select: { category: true, level: true, title: true } } },
    });

    // Get available courses
    const availableCourses = await prisma.course.findMany({
      where: {
        status: 'PUBLISHED',
        NOT: { enrollments: { some: { userId: req.user!.id } } },
      },
      select: { id: true, title: true, category: true, level: true, description: true },
      take: 20,
    });

    // If no AI key, return random recommendations
    if (!env.GOOGLE_GENAI_API_KEY) {
      res.json({ success: true, data: availableCourses.slice(0, 5) });
      return;
    }

    res.json({ success: true, data: availableCourses.slice(0, 5) });
  } catch (error) { next(error); }
});
