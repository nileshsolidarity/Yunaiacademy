import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { foundationCourses } from './seed-data/foundation.js';
import { intermediateCourses } from './seed-data/intermediate.js';
import { finalCourses } from './seed-data/final.js';

const prisma = new PrismaClient();

interface QuestionData {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface ModuleData {
  title: string;
  textContent: string;
  quizTitle: string;
  questions: QuestionData[];
}

export interface CourseData {
  title: string;
  slug: string;
  description: string;
  category: string;
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  modules: ModuleData[];
}

async function createCourseWithContent(courseData: CourseData, instructorId: string) {
  // Upsert the course
  const course = await prisma.course.upsert({
    where: { slug: courseData.slug },
    update: {
      title: courseData.title,
      description: courseData.description,
      category: courseData.category,
      level: courseData.level,
      status: 'PUBLISHED',
    },
    create: {
      title: courseData.title,
      slug: courseData.slug,
      description: courseData.description,
      category: courseData.category,
      level: courseData.level,
      status: 'PUBLISHED',
      instructorId,
    },
  });

  // Delete existing modules (cascades to lessons, quizzes, questions)
  await prisma.module.deleteMany({ where: { courseId: course.id } });

  // Create modules with lessons and quizzes
  for (let mi = 0; mi < courseData.modules.length; mi++) {
    const mod = courseData.modules[mi];

    const module = await prisma.module.create({
      data: {
        title: mod.title,
        order: mi,
        courseId: course.id,
      },
    });

    // Create text lesson
    await prisma.lesson.create({
      data: {
        title: mod.title,
        type: 'TEXT',
        content: mod.textContent,
        duration: 900,
        order: 0,
        moduleId: module.id,
      },
    });

    // Create quiz lesson with linked quiz and questions
    const quizLesson = await prisma.lesson.create({
      data: {
        title: `Quiz: ${mod.title}`,
        type: 'QUIZ',
        duration: 600,
        order: 1,
        moduleId: module.id,
      },
    });

    const quiz = await prisma.quiz.create({
      data: {
        title: mod.quizTitle,
        lessonId: quizLesson.id,
        passingScore: 60,
        timeLimit: 10,
      },
    });

    await prisma.quizQuestion.createMany({
      data: mod.questions.map((q, qi) => ({
        quizId: quiz.id,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        order: qi,
      })),
    });
  }

  return course;
}

async function main() {
  console.log('🌱 Seeding database with comprehensive CA content...');

  // Create users
  const adminPassword = await bcrypt.hash('Admin@123', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@yunaiacademy.com' },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@yunaiacademy.com',
      password: adminPassword,
      role: 'ADMIN',
      emailVerified: true,
    },
  });
  console.log(`✅ Admin: ${admin.email}`);

  const instructorPassword = await bcrypt.hash('Instructor@123', 12);
  const instructor = await prisma.user.upsert({
    where: { email: 'instructor@yunaiacademy.com' },
    update: {},
    create: {
      name: 'Prof. Sharma',
      email: 'instructor@yunaiacademy.com',
      password: instructorPassword,
      role: 'INSTRUCTOR',
      emailVerified: true,
      bio: 'CA with 15 years of teaching experience specializing in Taxation and Auditing.',
    },
  });
  console.log(`✅ Instructor: ${instructor.email}`);

  const studentPassword = await bcrypt.hash('Student@123', 12);
  const student = await prisma.user.upsert({
    where: { email: 'student@yunaiacademy.com' },
    update: {},
    create: {
      name: 'Rahul Kumar',
      email: 'student@yunaiacademy.com',
      password: studentPassword,
      role: 'STUDENT',
      emailVerified: true,
    },
  });
  console.log(`✅ Student: ${student.email}`);

  // Seed all courses
  const allCourses = [...foundationCourses, ...intermediateCourses, ...finalCourses];

  for (const courseData of allCourses) {
    const course = await createCourseWithContent(courseData, instructor.id);
    console.log(`✅ ${course.title} (${courseData.modules.length} modules)`);
  }

  // Enroll student in foundation courses
  for (const fd of foundationCourses) {
    const course = await prisma.course.findUnique({ where: { slug: fd.slug } });
    if (course) {
      await prisma.enrollment.upsert({
        where: { userId_courseId: { userId: student.id, courseId: course.id } },
        update: {},
        create: { userId: student.id, courseId: course.id, progress: 0 },
      });
    }
  }
  console.log('✅ Student enrolled in Foundation courses');

  const totalCourses = await prisma.course.count();
  const totalModules = await prisma.module.count();
  const totalLessons = await prisma.lesson.count();
  const totalQuizzes = await prisma.quiz.count();
  const totalQuestions = await prisma.quizQuestion.count();
  console.log(`\n🎉 Seed complete!`);
  console.log(`📊 ${totalCourses} courses, ${totalModules} modules, ${totalLessons} lessons, ${totalQuizzes} quizzes, ${totalQuestions} questions`);
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
