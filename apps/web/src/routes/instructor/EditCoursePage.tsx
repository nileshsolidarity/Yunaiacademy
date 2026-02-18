import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Save, Trash2, Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';
import { api } from '../../services/api';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card, CardContent, CardHeader } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Spinner } from '../../components/ui/Spinner';
import { COURSE_CATEGORIES } from '@yunai/shared';

export default function EditCoursePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        // Fetch by ID — we need to get it from instructor's courses
        const res = await api.get('/courses/instructor/mine');
        const found = res.data.data.find((c: any) => c.id === id);
        if (found) {
          setCourse(found);
          reset({
            title: found.title,
            description: found.description,
            category: found.category,
            level: found.level,
            thumbnail: found.thumbnail || '',
          });
        } else {
          toast.error('Course not found');
          navigate('/instructor');
        }
      } catch {
        toast.error('Failed to load course');
        navigate('/instructor');
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id, navigate, reset]);

  const onSave = async (data: any) => {
    setSaving(true);
    try {
      await api.put(`/courses/${id}`, data);
      toast.success('Course updated');
    } catch {
      toast.error('Failed to update');
    } finally {
      setSaving(false);
    }
  };

  const togglePublish = async () => {
    try {
      const res = await api.patch(`/courses/${id}/publish`);
      setCourse({ ...course, status: res.data.data.status });
      toast.success(res.data.data.status === 'PUBLISHED' ? 'Course published!' : 'Course unpublished');
    } catch {
      toast.error('Failed to update status');
    }
  };

  if (loading) return <div className="flex justify-center py-20"><Spinner size="lg" /></div>;
  if (!course) return null;

  return (
    <>
      <Helmet><title>Edit: {course.title} - Yunai Academy</title></Helmet>

      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Edit Course</h1>
            <Badge variant={course.status === 'PUBLISHED' ? 'success' : 'warning'} className="mt-1">{course.status}</Badge>
          </div>
          <Button variant={course.status === 'PUBLISHED' ? 'secondary' : 'primary'} onClick={togglePublish}>
            {course.status === 'PUBLISHED' ? <><EyeOff className="h-4 w-4" /> Unpublish</> : <><Eye className="h-4 w-4" /> Publish</>}
          </Button>
        </div>

        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit(onSave)} className="space-y-5">
              <Input
                label="Course Title"
                error={errors.title?.message as string}
                {...register('title', { required: 'Title is required' })}
              />

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  rows={4}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  {...register('description', { required: 'Required' })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <select className="block w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" {...register('category')}>
                    {COURSE_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Level</label>
                  <select className="block w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" {...register('level')}>
                    <option value="BEGINNER">Beginner</option>
                    <option value="INTERMEDIATE">Intermediate</option>
                    <option value="ADVANCED">Advanced</option>
                  </select>
                </div>
              </div>

              <Input label="Thumbnail URL" {...register('thumbnail')} />

              <Button type="submit" loading={saving}>
                <Save className="h-4 w-4" /> Save Changes
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
