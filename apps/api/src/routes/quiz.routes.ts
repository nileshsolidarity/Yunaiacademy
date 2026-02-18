import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import type { AuthRequest } from '../middleware/auth.js';
import { prisma } from '../lib/prisma.js';
import { quizSubmissionSchema } from '@yunai/shared';

export const quizRouter = Router();

// Get quiz (without correct answers)
quizRouter.get('/:id', authenticate, async (req, res, next) => {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: { id: req.params.id },
      include: {
        questions: {
          orderBy: { order: 'asc' },
          select: { id: true, question: true, options: true, order: true },
        },
      },
    });

    if (!quiz) {
      res.status(404).json({ success: false, error: 'Quiz not found' });
      return;
    }

    res.json({ success: true, data: quiz });
  } catch (error) { next(error); }
});

// Submit quiz answers
quizRouter.post('/:id/submit', authenticate, validate(quizSubmissionSchema), async (req: AuthRequest, res, next) => {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: { id: req.params.id },
      include: { questions: true },
    });

    if (!quiz) {
      res.status(404).json({ success: false, error: 'Quiz not found' });
      return;
    }

    const { answers } = req.body;
    let correctCount = 0;

    for (const question of quiz.questions) {
      if (answers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    }

    const score = quiz.questions.length > 0 ? (correctCount / quiz.questions.length) * 100 : 0;

    const attempt = await prisma.quizAttempt.create({
      data: {
        userId: req.user!.id,
        quizId: quiz.id,
        score,
        answers,
      },
    });

    const passed = score >= quiz.passingScore;

    res.json({
      success: true,
      data: {
        attempt,
        score,
        passed,
        totalQuestions: quiz.questions.length,
        correctAnswers: correctCount,
      },
    });
  } catch (error) { next(error); }
});

// Get user's attempts for a quiz
quizRouter.get('/:id/attempts', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const attempts = await prisma.quizAttempt.findMany({
      where: { userId: req.user!.id, quizId: req.params.id },
      orderBy: { submittedAt: 'desc' },
    });
    res.json({ success: true, data: attempts });
  } catch (error) { next(error); }
});

// Get specific attempt with correct answers
quizRouter.get('/:id/attempts/:attemptId', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const attempt = await prisma.quizAttempt.findFirst({
      where: { id: req.params.attemptId, userId: req.user!.id },
      include: {
        quiz: {
          include: {
            questions: { orderBy: { order: 'asc' } },
          },
        },
      },
    });

    if (!attempt) {
      res.status(404).json({ success: false, error: 'Attempt not found' });
      return;
    }

    res.json({ success: true, data: attempt });
  } catch (error) { next(error); }
});
