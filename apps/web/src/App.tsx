import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { AuthLayout } from './layouts/AuthLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AiChatWidget } from './components/AiChatWidget';
import { Spinner } from './components/ui/Spinner';

// Lazy-loaded pages for code splitting
const HomePage = lazy(() => import('./routes/HomePage'));
const LoginPage = lazy(() => import('./routes/auth/LoginPage'));
const RegisterPage = lazy(() => import('./routes/auth/RegisterPage'));
const ForgotPasswordPage = lazy(() => import('./routes/auth/ForgotPasswordPage'));
const CourseCatalogPage = lazy(() => import('./routes/courses/CourseCatalogPage'));
const CourseDetailPage = lazy(() => import('./routes/courses/CourseDetailPage'));
const StudentDashboard = lazy(() => import('./routes/dashboard/StudentDashboard'));
const CertificatesPage = lazy(() => import('./routes/dashboard/CertificatesPage'));
const AiTutorPage = lazy(() => import('./routes/dashboard/AiTutorPage'));
const MyCoursesPage = lazy(() => import('./routes/dashboard/MyCoursesPage'));
const SettingsPage = lazy(() => import('./routes/dashboard/SettingsPage'));
const CommunicationsPage = lazy(() => import('./routes/dashboard/CommunicationsPage'));
const InstructorDashboard = lazy(() => import('./routes/instructor/InstructorDashboard'));
const CreateCoursePage = lazy(() => import('./routes/instructor/CreateCoursePage'));
const EditCoursePage = lazy(() => import('./routes/instructor/EditCoursePage'));
const AdminDashboard = lazy(() => import('./routes/admin/AdminDashboard'));
const AdminUsersPage = lazy(() => import('./routes/admin/AdminUsersPage'));
const AdminCoursesPage = lazy(() => import('./routes/admin/AdminCoursesPage'));
const LessonPlayerPage = lazy(() => import('./routes/learn/LessonPlayerPage'));
const QuizPage = lazy(() => import('./routes/learn/QuizPage'));
const CommunityPage = lazy(() => import('./routes/community/CommunityPage'));
const PostDetailPage = lazy(() => import('./routes/community/PostDetailPage'));
const TermsPage = lazy(() => import('./routes/legal/TermsPage'));
const PrivacyPage = lazy(() => import('./routes/legal/PrivacyPage'));
const RefundPolicyPage = lazy(() => import('./routes/legal/RefundPolicyPage'));
const CookiePolicyPage = lazy(() => import('./routes/legal/CookiePolicyPage'));
const FAQPage = lazy(() => import('./routes/FAQPage'));
const AboutPage = lazy(() => import('./routes/AboutPage'));
const ContactPage = lazy(() => import('./routes/ContactPage'));
const NotFoundPage = lazy(() => import('./routes/NotFoundPage'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Public routes with main layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CourseCatalogPage />} />
          <Route path="/courses/:slug" element={<CourseDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/posts/:postId" element={<PostDetailPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Route>

        {/* Auth routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>

        {/* Protected: Student dashboard */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/dashboard/courses" element={<MyCoursesPage />} />
            <Route path="/dashboard/certificates" element={<CertificatesPage />} />
            <Route path="/dashboard/ai-tutor" element={<AiTutorPage />} />
            <Route path="/dashboard/communications" element={<CommunicationsPage />} />
            <Route path="/dashboard/settings" element={<SettingsPage />} />
          </Route>
        </Route>

        {/* Protected: Instructor */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/instructor" element={<InstructorDashboard />} />
            <Route path="/instructor/courses/new" element={<CreateCoursePage />} />
            <Route path="/instructor/courses/:id/edit" element={<EditCoursePage />} />
          </Route>
        </Route>

        {/* Protected: Admin */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsersPage />} />
            <Route path="/admin/courses" element={<AdminCoursesPage />} />
          </Route>
        </Route>

        {/* Protected: Learning (full-screen, no layout) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/learn/:courseSlug/:lessonId" element={<LessonPlayerPage />} />
          <Route path="/learn/:courseSlug/quiz/:quizId" element={<QuizPage />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Global AI Chat Widget */}
      <AiChatWidget />
    </Suspense>
  );
}
