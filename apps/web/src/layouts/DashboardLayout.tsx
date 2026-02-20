import { Outlet, NavLink } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  MessageSquare,
  Bot,
  Settings,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const studentLinks = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/dashboard/courses', icon: BookOpen, label: 'My Courses' },
  { to: '/dashboard/certificates', icon: Trophy, label: 'Certificates' },
  { to: '/dashboard/ai-tutor', icon: Bot, label: 'AI Tutor' },
  { to: '/community', icon: MessageSquare, label: 'Community' },
  { to: '/dashboard/settings', icon: Settings, label: 'Settings' },
];

const instructorLinks = [
  { to: '/instructor', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/instructor/courses', icon: BookOpen, label: 'My Courses' },
  { to: '/community', icon: MessageSquare, label: 'Community' },
  { to: '/dashboard/settings', icon: Settings, label: 'Settings' },
];

const adminLinks = [
  { to: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/admin/users', icon: Settings, label: 'Users' },
  { to: '/admin/courses', icon: BookOpen, label: 'Courses' },
  { to: '/community', icon: MessageSquare, label: 'Community' },
];

export function DashboardLayout() {
  const { user } = useAuth();

  const links =
    user?.role === 'ADMIN'
      ? adminLinks
      : user?.role === 'INSTRUCTOR'
        ? instructorLinks
        : studentLinks;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 min-h-[calc(100vh-64px)] p-4">
          <nav className="space-y-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/dashboard' || link.to === '/instructor' || link.to === '/admin'}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  }`
                }
              >
                <link.icon className="h-5 w-5" />
                {link.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
