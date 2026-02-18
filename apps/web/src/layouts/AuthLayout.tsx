import { Outlet, Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export function AuthLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-600 to-primary-900 text-white flex-col justify-center items-center p-12">
        <Link to="/" className="flex items-center gap-3 mb-8">
          <GraduationCap className="h-12 w-12" />
          <span className="text-3xl font-bold">Yunai Academy</span>
        </Link>
        <h2 className="text-2xl font-semibold mb-4 text-center">Master Your CA Exams with AI</h2>
        <p className="text-primary-100 text-center max-w-md text-lg">
          Adaptive learning, expert courses, smart assessments, and an AI tutor — everything you need to ace your Chartered Accountancy exams.
        </p>
        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold">500+</div>
            <div className="text-primary-200 text-sm">Video Lessons</div>
          </div>
          <div>
            <div className="text-3xl font-bold">50+</div>
            <div className="text-primary-200 text-sm">Expert Instructors</div>
          </div>
          <div>
            <div className="text-3xl font-bold">10K+</div>
            <div className="text-primary-200 text-sm">Students</div>
          </div>
        </div>
      </div>

      {/* Right side - Auth form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white dark:bg-gray-900">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
