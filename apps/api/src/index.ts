async function main() {
  try {
    console.log('🔄 Starting Yunai Academy API...');
    console.log('📋 PORT:', process.env.PORT || '(not set)');
    console.log('📋 NODE_ENV:', process.env.NODE_ENV || '(not set)');
    console.log('📋 DATABASE_URL:', process.env.DATABASE_URL ? '✅ Set' : '❌ MISSING');
    console.log('📋 JWT_SECRET:', process.env.JWT_SECRET ? '✅ Set' : '❌ MISSING');
    console.log('📋 JWT_REFRESH_SECRET:', process.env.JWT_REFRESH_SECRET ? '✅ Set' : '❌ MISSING');
    console.log('📋 FRONTEND_URL:', process.env.FRONTEND_URL || '(not set)');

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
