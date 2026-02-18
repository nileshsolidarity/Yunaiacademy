import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Users, Star, Plus, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { api } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import { Card, CardContent, CardHeader } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Spinner } from '../../components/ui/Spinner';

export default function InstructorDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState<any>(null);
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, coursesRes] = await Promise.all([
          api.get('/dashboard/instructor'),
          api.get('/courses/instructor/mine'),
        ]);
        setStats(statsRes.data.data);
        setCourses(coursesRes.data.data);
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="flex justify-center py-20"><Spinner size="lg" /></div>;
  }

  const statCards = [
    { label: 'Total Courses', value: stats?.totalCourses || 0, icon: BookOpen, color: 'text-blue-600 bg-blue-100' },
    { label: 'Total Students', value: stats?.totalStudents || 0, icon: Users, color: 'text-green-600 bg-green-100' },
    { label: 'Avg Rating', value: (stats?.averageRating || 0).toFixed(1), icon: Star, color: 'text-yellow-600 bg-yellow-100' },
  ];

  const enrollmentData = courses.map((c: any) => ({
    name: c.title.length > 15 ? c.title.substring(0, 15) + '...' : c.title,
    students: c._count?.enrollments || 0,
  }));

  const statusColors: Record<string, 'success' | 'warning' | 'default'> = {
    PUBLISHED: 'success',
    DRAFT: 'warning',
    ARCHIVED: 'default',
  };

  return (
    <>
      <Helmet><title>Instructor Dashboard - Yunai Academy</title></Helmet>

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Instructor Dashboard</h1>
          <p className="text-gray-500">Welcome back, {user?.name}</p>
        </div>
        <Link to="/instructor/courses/new">
          <Button><Plus className="h-4 w-4" /> Create Course</Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {statCards.map((s) => (
          <Card key={s.label}>
            <CardContent className="p-4 flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${s.color}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enrollment Chart */}
      {enrollmentData.length > 0 && (
        <Card className="mb-8">
          <CardHeader><h3 className="font-semibold text-gray-900 flex items-center gap-2"><BarChart3 className="h-5 w-5" /> Students per Course</h3></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* Course List */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">My Courses</h2>
      {courses.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses yet</h3>
            <p className="text-gray-500 mb-4">Create your first course to start teaching</p>
            <Link to="/instructor/courses/new"><Button>Create Course</Button></Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {courses.map((course: any) => (
            <Card key={course.id} hover>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-7 w-7 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{course.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                      <Badge variant={statusColors[course.status]}>{course.status}</Badge>
                      <span>{course._count?.enrollments || 0} students</span>
                      <span>{course._count?.reviews || 0} reviews</span>
                    </div>
                  </div>
                </div>
                <Link to={`/instructor/courses/${course.id}/edit`}>
                  <Button variant="outline" size="sm">Edit</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
