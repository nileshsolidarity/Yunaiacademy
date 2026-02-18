import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
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
  console.log(`✅ Admin user: ${admin.email}`);

  // Create instructor
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
  console.log(`✅ Instructor user: ${instructor.email}`);

  // Create student
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
  console.log(`✅ Student user: ${student.email}`);

  // Create demo courses
  const course1 = await prisma.course.upsert({
    where: { slug: 'ca-foundation-accounting' },
    update: {},
    create: {
      title: 'CA Foundation - Principles of Accounting',
      slug: 'ca-foundation-accounting',
      description: 'Master the fundamentals of accounting as per the CA Foundation syllabus. Covers journal entries, ledger posting, trial balance, and financial statements preparation.',
      category: 'CA Foundation',
      level: 'BEGINNER',
      status: 'PUBLISHED',
      instructorId: instructor.id,
    },
  });

  // Add modules and lessons
  const module1 = await prisma.module.create({
    data: {
      title: 'Introduction to Accounting',
      order: 0,
      courseId: course1.id,
    },
  });

  await prisma.lesson.createMany({
    data: [
      { title: 'What is Accounting?', type: 'VIDEO', videoUrl: 'https://www.youtube.com/watch?v=example1', duration: 1200, order: 0, moduleId: module1.id },
      { title: 'Types of Accounts', type: 'VIDEO', videoUrl: 'https://www.youtube.com/watch?v=example2', duration: 900, order: 1, moduleId: module1.id },
      { title: 'Golden Rules of Accounting', type: 'TEXT', content: '# Golden Rules of Accounting\n\n## 1. Personal Account\n- Debit the receiver\n- Credit the giver\n\n## 2. Real Account\n- Debit what comes in\n- Credit what goes out\n\n## 3. Nominal Account\n- Debit all expenses and losses\n- Credit all incomes and gains', order: 2, moduleId: module1.id },
    ],
  });

  const module2 = await prisma.module.create({
    data: {
      title: 'Journal Entries',
      order: 1,
      courseId: course1.id,
    },
  });

  await prisma.lesson.createMany({
    data: [
      { title: 'Understanding Journal Entries', type: 'VIDEO', videoUrl: 'https://www.youtube.com/watch?v=example3', duration: 1500, order: 0, moduleId: module2.id },
      { title: 'Practice Problems', type: 'TEXT', content: '# Practice Problems\n\nSolve the following journal entry problems...', order: 1, moduleId: module2.id },
    ],
  });

  const course2 = await prisma.course.upsert({
    where: { slug: 'ca-intermediate-taxation' },
    update: {},
    create: {
      title: 'CA Intermediate - Income Tax & GST',
      slug: 'ca-intermediate-taxation',
      description: 'Comprehensive coverage of Direct Tax and GST as per CA Intermediate syllabus. Includes practical problems and recent amendments.',
      category: 'Taxation',
      level: 'INTERMEDIATE',
      status: 'PUBLISHED',
      instructorId: instructor.id,
    },
  });

  const course3 = await prisma.course.upsert({
    where: { slug: 'ca-final-advanced-auditing' },
    update: {},
    create: {
      title: 'CA Final - Advanced Auditing & Ethics',
      slug: 'ca-final-advanced-auditing',
      description: 'In-depth coverage of auditing standards, company audit, special audits, and professional ethics for CA Final students.',
      category: 'Auditing',
      level: 'ADVANCED',
      status: 'PUBLISHED',
      instructorId: instructor.id,
    },
  });

  console.log(`✅ Created courses: ${course1.title}, ${course2.title}, ${course3.title}`);

  // Enroll student in first course
  await prisma.enrollment.upsert({
    where: { userId_courseId: { userId: student.id, courseId: course1.id } },
    update: {},
    create: { userId: student.id, courseId: course1.id, progress: 20 },
  });

  console.log('✅ Student enrolled in CA Foundation course');
  console.log('🎉 Seed complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
