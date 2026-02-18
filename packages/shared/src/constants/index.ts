export const USER_ROLES = {
  ADMIN: 'ADMIN',
  INSTRUCTOR: 'INSTRUCTOR',
  STUDENT: 'STUDENT',
} as const;

export const COURSE_STATUS = {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED',
} as const;

export const COURSE_LEVELS = {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED',
} as const;

export const LESSON_TYPES = {
  VIDEO: 'VIDEO',
  TEXT: 'TEXT',
  QUIZ: 'QUIZ',
} as const;

export const COURSE_CATEGORIES = [
  'CA Foundation',
  'CA Intermediate',
  'CA Final',
  'Accounting',
  'Taxation',
  'Auditing',
  'Corporate Law',
  'Cost Accounting',
  'Financial Management',
  'Economics',
  'Business Mathematics',
  'Information Technology',
  'Strategic Management',
  'Advanced Accounting',
  'Other',
] as const;

export const PAGINATION_DEFAULTS = {
  PAGE: 1,
  LIMIT: 12,
  MAX_LIMIT: 100,
} as const;
