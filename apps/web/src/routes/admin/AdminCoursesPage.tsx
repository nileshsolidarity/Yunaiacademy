import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, BookOpen, Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';
import { api } from '../../services/api';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Spinner } from '../../components/ui/Spinner';

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const params = search ? `?search=${encodeURIComponent(search)}` : '';
      const { data } = await api.get(`/courses${params}`);
      setCourses(data.data);
    } catch {
      // handle
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchCourses(); }, [search]);

  const togglePublish = async (courseId: string) => {
    try {
      await api.patch(`/courses/${courseId}/publish`);
      toast.success('Status updated');
      fetchCourses();
    } catch {
      toast.error('Failed to update');
    }
  };

  const statusColors: Record<string, 'success' | 'warning' | 'default'> = {
    PUBLISHED: 'success',
    DRAFT: 'warning',
    ARCHIVED: 'default',
  };

  return (
    <>
      <Helmet><title>Manage Courses - Admin - Yunai Academy</title></Helmet>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Courses</h1>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search courses..."
          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><Spinner size="lg" /></div>
      ) : (
        <div className="space-y-3">
          {courses.map((course: any) => (
            <Card key={course.id} hover>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{course.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                      <Badge variant={statusColors[course.status]}>{course.status}</Badge>
                      <span>{course.category}</span>
                      <span>By {course.instructor?.name}</span>
                      <span>{course._count?.enrollments || 0} students</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => togglePublish(course.id)}>
                  {course.status === 'PUBLISHED' ? <><EyeOff className="h-4 w-4" /> Unpublish</> : <><Eye className="h-4 w-4" /> Publish</>}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
