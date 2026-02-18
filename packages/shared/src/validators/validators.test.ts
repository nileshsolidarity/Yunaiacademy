import { describe, it, expect } from 'vitest';
import {
  loginSchema,
  registerSchema,
  createCourseSchema,
  createReviewSchema,
  quizSubmissionSchema,
  paginationSchema,
} from './index';

describe('loginSchema', () => {
  it('validates a correct login', () => {
    const result = loginSchema.safeParse({ email: 'test@example.com', password: 'pass123' });
    expect(result.success).toBe(true);
  });

  it('rejects invalid email', () => {
    const result = loginSchema.safeParse({ email: 'not-an-email', password: 'pass123' });
    expect(result.success).toBe(false);
  });

  it('rejects empty password', () => {
    const result = loginSchema.safeParse({ email: 'test@example.com', password: '' });
    expect(result.success).toBe(false);
  });
});

describe('registerSchema', () => {
  it('validates a correct registration', () => {
    const result = registerSchema.safeParse({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'Password1',
    });
    expect(result.success).toBe(true);
  });

  it('rejects short name', () => {
    const result = registerSchema.safeParse({
      name: 'J',
      email: 'john@example.com',
      password: 'Password1',
    });
    expect(result.success).toBe(false);
  });

  it('rejects password without uppercase', () => {
    const result = registerSchema.safeParse({
      name: 'John',
      email: 'john@example.com',
      password: 'password1',
    });
    expect(result.success).toBe(false);
  });

  it('rejects password without number', () => {
    const result = registerSchema.safeParse({
      name: 'John',
      email: 'john@example.com',
      password: 'Password',
    });
    expect(result.success).toBe(false);
  });

  it('rejects short password', () => {
    const result = registerSchema.safeParse({
      name: 'John',
      email: 'john@example.com',
      password: 'Pa1',
    });
    expect(result.success).toBe(false);
  });
});

describe('createCourseSchema', () => {
  it('validates a correct course', () => {
    const result = createCourseSchema.safeParse({
      title: 'CA Foundation Accounting',
      description: 'Complete accounting course for CA Foundation level',
      category: 'CA Foundation',
      level: 'BEGINNER',
    });
    expect(result.success).toBe(true);
  });

  it('rejects short title', () => {
    const result = createCourseSchema.safeParse({
      title: 'CA',
      description: 'Complete accounting course',
      category: 'CA Foundation',
      level: 'BEGINNER',
    });
    expect(result.success).toBe(false);
  });

  it('rejects invalid level', () => {
    const result = createCourseSchema.safeParse({
      title: 'Valid Title',
      description: 'Complete accounting course',
      category: 'CA Foundation',
      level: 'EXPERT',
    });
    expect(result.success).toBe(false);
  });
});

describe('createReviewSchema', () => {
  it('validates rating 1-5', () => {
    expect(createReviewSchema.safeParse({ rating: 5 }).success).toBe(true);
    expect(createReviewSchema.safeParse({ rating: 1 }).success).toBe(true);
    expect(createReviewSchema.safeParse({ rating: 0 }).success).toBe(false);
    expect(createReviewSchema.safeParse({ rating: 6 }).success).toBe(false);
  });
});

describe('quizSubmissionSchema', () => {
  it('validates correct submission', () => {
    const result = quizSubmissionSchema.safeParse({
      answers: { 'q1': 2, 'q2': 0 },
    });
    expect(result.success).toBe(true);
  });
});

describe('paginationSchema', () => {
  it('provides defaults', () => {
    const result = paginationSchema.safeParse({});
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.page).toBe(1);
      expect(result.data.limit).toBe(12);
      expect(result.data.sortOrder).toBe('desc');
    }
  });

  it('coerces string numbers', () => {
    const result = paginationSchema.safeParse({ page: '3', limit: '20' });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.page).toBe(3);
      expect(result.data.limit).toBe(20);
    }
  });

  it('rejects limit over 100', () => {
    const result = paginationSchema.safeParse({ limit: 200 });
    expect(result.success).toBe(false);
  });
});
