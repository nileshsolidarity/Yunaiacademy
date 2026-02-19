import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  BookOpen, Clock, Users, Star, PlayCircle, FileText, ChevronDown, ChevronUp, CheckCircle,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { api } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Card, CardContent } from '../../components/ui/Card';
import { Spinner } from '../../components/ui/Spinner';

export default function CourseDetailPage() {
  const { slug } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const { data } = await api.get(`/courses/${slug}`);
        setCourse(data.data);
        // Expand first module by default
        if (data.data.modules?.[0]) {
          setExpandedModules(new Set([data.data.modules[0].id]));
        }
        // Check if user is enrolled
        if (user) {
          try {
            const enrollRes = await api.get('/enrollments');
            const enrolled = enrollRes.data.data?.some(
              (e: any) => e.courseId === data.data.id
            );
            setIsEnrolled(!!enrolled);
          } catch {
            // Not logged in or enrollments fetch failed, that's ok
          }
        }
      } catch {
        toast.error('Course not found');
        navigate('/courses');
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [slug, navigate, user]);

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => {
      const next = new Set(prev);
      if (next.has(moduleId)) next.delete(moduleId);
      else next.add(moduleId);
      return next;
    });
  };

  const handleEnroll = async () => {
    if (!user) {
      navigate('/login');
      return;
    }
    setEnrolling(true);
    try {
      await api.post(`/enrollments/courses/${course.id}`);
      toast.success('Enrolled successfully!');
      navigate('/dashboard');
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Failed to enroll');
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!course) return null;

  const totalLessons = course.modules?.reduce((sum: number, m: any) => sum + (m.lessons?.length || 0), 0) || 0;
  const totalDuration = course.modules?.reduce(
    (sum: number, m: any) => sum + (m.lessons?.reduce((s: number, l: any) => s + (l.duration || 0), 0) || 0),
    0,
  ) || 0;

  const lessonIcon = (type: string) => {
    if (type === 'VIDEO') return <PlayCircle className="h-4 w-4 text-primary-500" />;
    if (type === 'QUIZ') return <CheckCircle className="h-4 w-4 text-orange-500" />;
    return <FileText className="h-4 w-4 text-gray-400" />;
  };

  return (
    <>
      <Helmet>
        <title>{course.title} - Yunai Academy</title>
        <meta name="description" content={course.description} />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <div className="flex gap-2 mb-4">
              <Badge variant="info">{course.level}</Badge>
              <Badge>{course.category}</Badge>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-gray-300 text-lg mb-6">{course.description}</p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
              {course.instructor && (
                <span>By <span className="text-white font-medium">{course.instructor.name}</span></span>
              )}
              <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {course._count?.enrollments || 0} students</span>
              <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" /> {totalLessons} lessons</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {Math.round(totalDuration / 60)} min</span>
              {course.averageRating > 0 && (
                <span className="flex items-center gap-1"><Star className="h-4 w-4 text-yellow-400" /> {course.averageRating.toFixed(1)}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Curriculum */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
            <div className="space-y-3">
              {course.modules?.map((module: any) => (
                <Card key={module.id}>
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900">{module.title}</h3>
                      <p className="text-sm text-gray-500">{module.lessons?.length || 0} lessons</p>
                    </div>
                    {expandedModules.has(module.id) ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {expandedModules.has(module.id) && (
                    <div className="border-t border-gray-100">
                      {module.lessons?.map((lesson: any) => (
                        <div key={lesson.id} className="flex items-center gap-3 px-6 py-3 hover:bg-gray-50">
                          {lessonIcon(lesson.type)}
                          <span className="text-sm text-gray-700 flex-1">{lesson.title}</span>
                          {lesson.duration && (
                            <span className="text-xs text-gray-400">{Math.round(lesson.duration / 60)} min</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {/* Instructor */}
            {course.instructor && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Instructor</h2>
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary-600">
                        {course.instructor.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{course.instructor.name}</h3>
                      {course.instructor.bio && (
                        <p className="text-gray-500 mt-1">{course.instructor.bio}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Enroll Sidebar */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">Free</div>
                <p className="text-gray-500 text-sm mb-6">Full access to all course content</p>
                {isEnrolled ? (
                  <Button
                    onClick={() => {
                      const firstLesson = course.modules?.[0]?.lessons?.[0];
                      if (firstLesson) {
                        navigate(`/learn/${slug}/${firstLesson.id}`);
                      } else {
                        navigate('/dashboard');
                      }
                    }}
                    className="w-full bg-green-600 hover:bg-green-700"
                    size="lg"
                  >
                    <BookOpen className="h-5 w-5" /> Continue Learning
                  </Button>
                ) : (
                  <Button onClick={handleEnroll} loading={enrolling} className="w-full" size="lg">
                    Enroll Now
                  </Button>
                )}
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" /> {totalLessons} lessons
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" /> Video & text content
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" /> Quizzes & assessments
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" /> AI tutor access
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" /> Certificate on completion
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
