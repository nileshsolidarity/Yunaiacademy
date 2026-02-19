import express, { type Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import { env } from './config/env.js';
import { errorHandler } from './middleware/errorHandler.js';
import { authRouter } from './routes/auth.routes.js';
import { userRouter } from './routes/user.routes.js';
import { courseRouter } from './routes/course.routes.js';
import { enrollmentRouter } from './routes/enrollment.routes.js';
import { quizRouter } from './routes/quiz.routes.js';
import { reviewRouter } from './routes/review.routes.js';
import { communityRouter } from './routes/community.routes.js';
import { notificationRouter } from './routes/notification.routes.js';
import { aiRouter } from './routes/ai.routes.js';
import { dashboardRouter } from './routes/dashboard.routes.js';
import { certificateRouter } from './routes/certificate.routes.js';
import { sitemapRouter } from './routes/sitemap.routes.js';

const app: Express = express();

// Security
app.use(helmet());
app.use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true,
  }),
);

// Rate limiting
const generalLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  message: { success: false, error: 'Too many requests, please try again later' },
});
const authLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: { success: false, error: 'Too many auth attempts, please try again later' },
});

app.use(generalLimiter);

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Logging
if (env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ success: true, message: 'Yunai Academy API is running', timestamp: new Date().toISOString() });
});

// Database diagnostic (temporary)
app.get('/api/debug/db', async (_req, res) => {
  const dbUrl = process.env.DATABASE_URL || 'NOT SET';
  const masked = dbUrl !== 'NOT SET' ? dbUrl.replace(/:[^:@]+@/, ':***@') : dbUrl;
  const urlLen = dbUrl.length;
  const lastCharCode = dbUrl.charCodeAt(dbUrl.length - 1);
  try {
    const { prisma } = await import('./lib/prisma.js');
    await prisma.$queryRaw`SELECT 1`;
    const userCount = await prisma.user.count().catch(() => -1);
    const courseCount = await prisma.course.count().catch(() => -1);
    res.json({
      success: true,
      dbConnected: true,
      users: userCount,
      courses: courseCount,
      dbUrl: masked,
      dbUrlLength: urlLen,
      lastCharCode,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    res.status(500).json({
      success: false,
      dbConnected: false,
      error: message,
      dbUrl: masked,
      dbUrlLength: urlLen,
      lastCharCode,
    });
  }
});

// Routes
app.use('/api/auth', authLimiter, authRouter);
app.use('/api/users', userRouter);
app.use('/api/courses', courseRouter);
app.use('/api/enrollments', enrollmentRouter);
app.use('/api/quizzes', quizRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/community', communityRouter);
app.use('/api/notifications', notificationRouter);
app.use('/api/ai', aiRouter);
app.use('/api/dashboard', dashboardRouter);
app.use('/api/certificates', certificateRouter);
app.use('/api/sitemap', sitemapRouter);

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});

// Error handler
app.use(errorHandler);

export { app };
