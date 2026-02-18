export type CourseStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
export type CourseLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
export type LessonType = 'VIDEO' | 'TEXT' | 'QUIZ';

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string | null;
  category: string;
  level: CourseLevel;
  status: CourseStatus;
  instructorId: string;
  instructor?: { id: string; name: string; avatar: string | null };
  modules?: Module[];
  enrollmentCount?: number;
  averageRating?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Module {
  id: string;
  title: string;
  order: number;
  courseId: string;
  lessons?: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  type: LessonType;
  videoUrl: string | null;
  content: string | null;
  duration: number | null;
  order: number;
  moduleId: string;
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  progress: number;
  enrolledAt: string;
  completedAt: string | null;
  course?: Course;
}

export interface LessonProgress {
  id: string;
  userId: string;
  lessonId: string;
  completed: boolean;
  completedAt: string | null;
}

export interface Review {
  id: string;
  userId: string;
  courseId: string;
  rating: number;
  comment: string | null;
  user?: { id: string; name: string; avatar: string | null };
  createdAt: string;
}

export interface Certificate {
  id: string;
  userId: string;
  courseId: string;
  certificateNumber: string;
  issuedAt: string;
  user?: { id: string; name: string };
  course?: { id: string; title: string };
}
