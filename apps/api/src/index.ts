import { execSync } from 'child_process';

// Fix: Trim whitespace/newlines from critical env vars (Railway copy-paste issue)
if (process.env.DATABASE_URL) {
  process.env.DATABASE_URL = process.env.DATABASE_URL.trim();
}
if (process.env.FRONTEND_URL) {
  process.env.FRONTEND_URL = process.env.FRONTEND_URL.trim();
}

async function runMigrations() {
  try {
    console.log('🗄️  Running database migrations (prisma db push)...');
    execSync('npx prisma db push --skip-generate --accept-data-loss', {
      stdio: 'inherit',
      timeout: 60000,
    });
    console.log('✅ Database schema synced successfully');
    return true;
  } catch (error) {
    console.error('⚠️  Database migration warning (server will still start):');
    console.error(error instanceof Error ? error.message : error);
    return false;
  }
}

async function seedIfNeeded() {
  try {
    const { PrismaClient } = await import('@prisma/client');
    const prisma = new PrismaClient();
    const userCount = await prisma.user.count();
    const courseCount = await prisma.course.count();
    const forceReseed = process.env.FORCE_RESEED === 'true';

    if (userCount === 0 || forceReseed) {
      const reason = forceReseed ? 'FORCE_RESEED=true' : 'database is empty';
      console.log(`🌱 Running seed (${reason})...`);
      execSync('npx tsx prisma/seed.ts', {
        stdio: 'inherit',
        timeout: 300000,
      });
      console.log('✅ Database seeded successfully');
    } else {
      console.log(`📊 Database: ${userCount} users, ${courseCount} courses — skipping seed`);
    }
    await prisma.$disconnect();
  } catch (error) {
    console.error('⚠️  Seed warning (server will still start):');
    console.error(error instanceof Error ? error.message : error);
  }
}

async function main() {
  try {
    console.log('🔄 Starting Yunai Academy API...');
    console.log('📋 PORT:', process.env.PORT || '(not set)');
    console.log('📋 NODE_ENV:', process.env.NODE_ENV || '(not set)');
    console.log('📋 DATABASE_URL:', process.env.DATABASE_URL ? '✅ Set' : '❌ MISSING');
    console.log('📋 JWT_SECRET:', process.env.JWT_SECRET ? '✅ Set' : '❌ MISSING');
    console.log('📋 JWT_REFRESH_SECRET:', process.env.JWT_REFRESH_SECRET ? '✅ Set' : '❌ MISSING');
    console.log('📋 FRONTEND_URL:', process.env.FRONTEND_URL || '(not set)');

    // Run database migrations before starting the server
    const migrationOk = await runMigrations();

    // Seed database if migrations succeeded and DB is empty
    if (migrationOk) {
      await seedIfNeeded();
    }

    console.log('📦 Loading modules...');
    const { app } = await import('./app.js');
    const { env } = await import('./config/env.js');
    console.log('✅ Modules loaded successfully');

    const PORT = env.PORT;
    const HOST = '0.0.0.0';

    app.listen(PORT, HOST, () => {
      console.log(`🚀 Yunai Academy API running on ${HOST}:${PORT}`);
      console.log(`📊 Health check: http://${HOST}:${PORT}/api/health`);
      console.log(`🔧 Environment: ${env.NODE_ENV}`);
    });
  } catch (error) {
    console.error('💥 FATAL: Server failed to start:');
    console.error(error);
    process.exit(1);
  }
}

main();
