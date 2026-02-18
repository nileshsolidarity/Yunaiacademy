import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Trophy, BarChart3, Clock, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { api } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import { Card, CardContent, CardHeader } from '../../components/ui/Card';
import { Spinner } from '../../components/ui/Spinner';

const CHART_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function StudentDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState<any>(null);
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, enrollRes] = await Promise.all([
          api.get('/dashboard/student'),
          api.get('/enrollments'),
        ]);
        setStats(statsRes.data.data);
        setEnrollments(enrollRes.data.data);
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" />
      </div>
    );
  }

  const statCards = [
    { label: 'Enrolled Courses', value: stats?.totalEnrolled || 0, icon: BookOpen, color: 'text-blue-600 bg-blue-100' },
    { label: 'Completed', value: stats?.coursesCompleted || 0, icon: Trophy, color: 'text-green-600 bg-green-100' },
    { label: 'Avg Quiz Score', value: `${Math.round(stats?.averageQuizScore || 0)}%`, icon: BarChart3, color: 'text-purple-600 bg-purple-100' },
    { label: 'Quiz Attempts', value: stats?.totalQuizAttempts || 0, icon: Clock, color: 'text-orange-600 bg-orange-100' },
  ];

  // Chart data
  const progressData = enrollments.map((e: any) => ({
    name: e.course?.title?.substring(0, 20) + '...',
    progress: Math.round(e.progress),
  }));

  const completionData = [
    { name: 'Completed', value: stats?.coursesCompleted || 0 },
    { name: 'In Progress', value: (stats?.totalEnrolled || 0) - (stats?.coursesCompleted || 0) },
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard - Yunai Academy</title>
      </Helmet>

      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Welcome back, {user?.name?.split(' ')[0]}!
        </h1>
        <p className="text-gray-500 mb-8">Here's an overview of your learning progress</p>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statCards.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Course Progress Bar Chart */}
          <Card>
            <CardHeader>
              <h3 className="font-semibold text-gray-900">Course Progress</h3>
            </CardHeader>
            <CardContent>
              {progressData.length > 0 ? (
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis domain={[0, 100]} />
                    <Tooltip formatter={(value: number) => `${value}%`} />
                    <Bar dataKey="progress" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-[250px] flex items-center justify-center text-gray-400">
                  <p>No enrolled courses yet</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Completion Pie Chart */}
          <Card>
            <CardHeader>
              <h3 className="font-semibold text-gray-900">Completion Overview</h3>
            </CardHeader>
            <CardContent>
              {(stats?.totalEnrolled || 0) > 0 ? (
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={completionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}`}
                    >
                      {completionData.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-[250px] flex items-center justify-center text-gray-400">
                  <p>No data yet</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Enrolled Courses */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">My Courses</h2>
            <Link to="/courses" className="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1">
              Browse more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {enrollments.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No courses yet</h3>
                <p className="text-gray-500 mb-4">Start your learning journey by enrolling in a course</p>
                <Link to="/courses">
                  <button className="text-primary-600 font-medium hover:text-primary-700">Browse Courses</button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {enrollments.map((enrollment: any) => (
                <Card key={enrollment.id} hover>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {enrollment.course?.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      By {enrollment.course?.instructor?.name}
                    </p>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{Math.round(enrollment.progress)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full transition-all"
                          style={{ width: `${enrollment.progress}%` }}
                        />
                      </div>
                    </div>
                    <Link
                      to={`/courses/${enrollment.course?.slug}`}
                      className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Continue Learning
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
