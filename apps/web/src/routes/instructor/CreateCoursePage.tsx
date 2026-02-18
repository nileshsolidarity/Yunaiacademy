import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { api } from '../../services/api';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card, CardContent } from '../../components/ui/Card';
import { COURSE_CATEGORIES } from '@yunai/shared';

interface CourseForm {
  title: string;
  description: string;
  category: string;
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  thumbnail?: string;
}

export default function CreateCoursePage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [courseId, setCourseId] = useState<string | null>(null);
  const [modules, setModules] = useState<Array<{ id?: string; title: string; lessons: Array<{ title: string; type: string; videoUrl: string; content: string }> }>>([]);
  const [newModuleTitle, setNewModuleTitle] = useState('');

  const { register, handleSubmit, formState: { errors }, watch } = useForm<CourseForm>({
    defaultValues: { level: 'BEGINNER' },
  });

  // Step 1: Basic info
  const onSubmitBasics = async (data: CourseForm) => {
    setLoading(true);
    try {
      const res = await api.post('/courses', data);
      setCourseId(res.data.data.id);
      toast.success('Course created! Now add modules and lessons.');
      setStep(2);
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Failed to create course');
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Add modules
  const addModule = async () => {
    if (!newModuleTitle.trim() || !courseId) return;
    try {
      const res = await api.post(`/courses/${courseId}/modules`, { title: newModuleTitle });
      setModules([...modules, { id: res.data.data.id, title: newModuleTitle, lessons: [] }]);
      setNewModuleTitle('');
      toast.success('Module added');
    } catch {
      toast.error('Failed to add module');
    }
  };

  const addLesson = async (moduleIndex: number) => {
    const mod = modules[moduleIndex];
    if (!mod.id) return;

    const lessonTitle = prompt('Enter lesson title:');
    if (!lessonTitle) return;

    const lessonType = prompt('Enter type (VIDEO, TEXT, or QUIZ):')?.toUpperCase() || 'VIDEO';
    let videoUrl = '';
    let content = '';

    if (lessonType === 'VIDEO') {
      videoUrl = prompt('Enter video URL (YouTube/Vimeo):') || '';
    } else if (lessonType === 'TEXT') {
      content = prompt('Enter lesson content (Markdown):') || '';
    }

    try {
      await api.post(`/courses/modules/${mod.id}/lessons`, {
        title: lessonTitle,
        type: lessonType,
        videoUrl: videoUrl || null,
        content: content || null,
      });

      const updated = [...modules];
      updated[moduleIndex].lessons.push({ title: lessonTitle, type: lessonType, videoUrl, content });
      setModules(updated);
      toast.success('Lesson added');
    } catch {
      toast.error('Failed to add lesson');
    }
  };

  // Step 3: Publish
  const publishCourse = async () => {
    if (!courseId) return;
    setLoading(true);
    try {
      await api.patch(`/courses/${courseId}/publish`);
      toast.success('Course published!');
      navigate('/instructor');
    } catch {
      toast.error('Failed to publish');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet><title>Create Course - Yunai Academy</title></Helmet>

      <div className="max-w-3xl mx-auto">
        {/* Step Indicator */}
        <div className="flex items-center gap-4 mb-8">
          {['Basic Info', 'Modules & Lessons', 'Review & Publish'].map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step > i + 1 ? 'bg-green-500 text-white' : step === i + 1 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {i + 1}
              </div>
              <span className={`text-sm font-medium ${step === i + 1 ? 'text-gray-900' : 'text-gray-400'}`}>{label}</span>
              {i < 2 && <div className="w-8 h-0.5 bg-gray-200" />}
            </div>
          ))}
        </div>

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Course Basic Information</h2>
              <form onSubmit={handleSubmit(onSubmitBasics)} className="space-y-5">
                <Input
                  label="Course Title"
                  placeholder="e.g., CA Foundation - Principles of Accounting"
                  error={errors.title?.message}
                  {...register('title', { required: 'Title is required', minLength: { value: 3, message: 'Min 3 characters' } })}
                />

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    rows={4}
                    placeholder="What will students learn in this course?"
                    className={`block w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.description ? 'border-red-300' : 'border-gray-300'}`}
                    {...register('description', { required: 'Description is required', minLength: { value: 10, message: 'Min 10 characters' } })}
                  />
                  {errors.description && <p className="text-sm text-red-600">{errors.description.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      {...register('category', { required: 'Category is required' })}
                    >
                      <option value="">Select category</option>
                      {COURSE_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    {errors.category && <p className="text-sm text-red-600">{errors.category.message}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Level</label>
                    <select
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      {...register('level')}
                    >
                      <option value="BEGINNER">Beginner</option>
                      <option value="INTERMEDIATE">Intermediate</option>
                      <option value="ADVANCED">Advanced</option>
                    </select>
                  </div>
                </div>

                <Input
                  label="Thumbnail URL (optional)"
                  placeholder="https://..."
                  {...register('thumbnail')}
                />

                <div className="flex justify-end">
                  <Button type="submit" loading={loading}>
                    Next: Add Content <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Modules & Lessons */}
        {step === 2 && (
          <div>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Add Modules & Lessons</h2>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newModuleTitle}
                    onChange={(e) => setNewModuleTitle(e.target.value)}
                    placeholder="Module title (e.g., Introduction to Accounting)"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    onKeyDown={(e) => e.key === 'Enter' && addModule()}
                  />
                  <Button onClick={addModule} disabled={!newModuleTitle.trim()}>Add Module</Button>
                </div>
              </CardContent>
            </Card>

            {modules.map((mod, i) => (
              <Card key={i} className="mb-4">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">Module {i + 1}: {mod.title}</h3>
                    <Button variant="outline" size="sm" onClick={() => addLesson(i)}>+ Add Lesson</Button>
                  </div>
                  {mod.lessons.length > 0 ? (
                    <div className="space-y-2 ml-4">
                      {mod.lessons.map((lesson, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-gray-600 py-1">
                          <span className="w-16 text-xs font-mono bg-gray-100 px-2 py-0.5 rounded">{lesson.type}</span>
                          {lesson.title}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400 ml-4">No lessons yet</p>
                  )}
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={() => setStep(1)}><ArrowLeft className="h-4 w-4" /> Back</Button>
              <Button onClick={() => setStep(3)} disabled={modules.length === 0}>
                Next: Review <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Review & Publish */}
        {step === 3 && (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Review & Publish</h2>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Course Summary</h3>
                  <p className="text-sm text-gray-600">{modules.length} modules, {modules.reduce((s, m) => s + m.lessons.length, 0)} lessons total</p>
                </div>
                {modules.map((mod, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900">{mod.title}</h4>
                    <ul className="mt-2 space-y-1">
                      {mod.lessons.map((l, j) => (
                        <li key={j} className="text-sm text-gray-500 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary-400" />
                          {l.title} ({l.type})
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(2)}><ArrowLeft className="h-4 w-4" /> Back</Button>
                <div className="flex gap-3">
                  <Button variant="secondary" onClick={() => navigate('/instructor')}>Save as Draft</Button>
                  <Button onClick={publishCourse} loading={loading}>Publish Course</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}
