import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactPlayer from 'react-player';
import {
  PlayCircle, FileText, CheckCircle, Circle, ChevronLeft, ChevronRight,
  Menu, X, Bot,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { api } from '../../services/api';
import { Button } from '../../components/ui/Button';
import { Spinner } from '../../components/ui/Spinner';

export default function LessonPlayerPage() {
  const { courseSlug, lessonId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState<any>(null);
  const [currentLesson, setCurrentLesson] = useState<any>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Flatten all lessons in order
  const allLessons: any[] = [];
  course?.modules?.forEach((mod: any) => {
    mod.lessons?.forEach((lesson: any) => {
      allLessons.push({ ...lesson, moduleName: mod.title });
    });
  });

  const currentIndex = allLessons.findIndex((l) => l.id === lessonId);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [courseRes, progressRes] = await Promise.all([
          api.get(`/courses/${courseSlug}`),
          api.get(`/enrollments/courses/${courseSlug}/progress`).catch(() => ({ data: { data: { completedLessons: [] } } })),
        ]);

        setCourse(courseRes.data.data);

        // Find full lesson data
        let found: any = null;
        for (const mod of courseRes.data.data.modules || []) {
          found = mod.lessons?.find((l: any) => l.id === lessonId);
          if (found) break;
        }

        if (found) {
          // Fetch full lesson content if needed
          setCurrentLesson(found);
        }

        const completed = new Set<string>(
          (progressRes.data.data?.completedLessons || []).map((p: any) => p.lessonId),
        );
        setCompletedLessons(completed);
      } catch {
        toast.error('Failed to load lesson');
        navigate('/courses');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [courseSlug, lessonId, navigate]);

  const markComplete = async () => {
    if (!lessonId) return;
    try {
      await api.post(`/enrollments/lessons/${lessonId}/complete`);
      setCompletedLessons((prev) => new Set([...prev, lessonId]));
      toast.success('Lesson completed!');
    } catch {
      toast.error('Failed to mark complete');
    }
  };

  const navigateToLesson = (lid: string) => {
    navigate(`/learn/${courseSlug}/${lid}`);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><Spinner size="lg" /></div>;
  }

  return (
    <>
      <Helmet><title>{currentLesson?.title || 'Lesson'} - Yunai Academy</title></Helmet>

      <div className="min-h-screen bg-gray-900 flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-80' : 'w-0'} bg-white border-r border-gray-200 overflow-y-auto transition-all duration-300 flex-shrink-0`}>
          {sidebarOpen && (
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <Link to={`/courses/${courseSlug}`} className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  <ChevronLeft className="h-4 w-4 inline" /> Back to course
                </Link>
                <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <h2 className="font-bold text-gray-900 mb-4 text-sm">{course?.title}</h2>

              {course?.modules?.map((mod: any) => (
                <div key={mod.id} className="mb-4">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{mod.title}</h3>
                  <div className="space-y-1">
                    {mod.lessons?.map((lesson: any) => {
                      const isActive = lesson.id === lessonId;
                      const isCompleted = completedLessons.has(lesson.id);
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => navigateToLesson(lesson.id)}
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-left transition-colors ${
                            isActive
                              ? 'bg-primary-50 text-primary-700 font-medium'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          ) : (
                            <Circle className="h-4 w-4 text-gray-300 flex-shrink-0" />
                          )}
                          <span className="truncate">{lesson.title}</span>
                          {lesson.type === 'VIDEO' && <PlayCircle className="h-3 w-3 text-gray-400 ml-auto flex-shrink-0" />}
                          {lesson.type === 'TEXT' && <FileText className="h-3 w-3 text-gray-400 ml-auto flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Top bar */}
          <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {!sidebarOpen && (
                <button onClick={() => setSidebarOpen(true)} className="text-gray-400 hover:text-white">
                  <Menu className="h-5 w-5" />
                </button>
              )}
              <span className="text-sm font-medium">{currentLesson?.title}</span>
            </div>
            <div className="flex items-center gap-2">
              {!completedLessons.has(lessonId!) && (
                <Button size="sm" onClick={markComplete} className="bg-green-600 hover:bg-green-700">
                  <CheckCircle className="h-4 w-4" /> Mark Complete
                </Button>
              )}
            </div>
          </div>

          {/* Lesson Content */}
          <div className="flex-1 overflow-y-auto">
            {currentLesson?.type === 'VIDEO' && currentLesson.videoUrl ? (
              <div className="aspect-video bg-black">
                <ReactPlayer
                  url={currentLesson.videoUrl}
                  width="100%"
                  height="100%"
                  controls
                  playing={false}
                  config={{
                    youtube: { playerVars: { modestbranding: 1 } },
                  }}
                />
              </div>
            ) : currentLesson?.type === 'TEXT' ? (
              <div className="max-w-4xl mx-auto p-8">
                <div className="prose prose-lg max-w-none bg-white rounded-xl p-8 shadow-sm">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">{currentLesson.title}</h1>
                  <div className="text-gray-700 whitespace-pre-wrap">{currentLesson.content || 'No content available.'}</div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-96 text-gray-400">
                <p>Lesson content not available</p>
              </div>
            )}
          </div>

          {/* Bottom navigation */}
          <div className="bg-gray-800 border-t border-gray-700 px-4 py-3 flex items-center justify-between">
            {prevLesson ? (
              <button
                onClick={() => navigateToLesson(prevLesson.id)}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" /> {prevLesson.title}
              </button>
            ) : <div />}

            {nextLesson ? (
              <button
                onClick={() => navigateToLesson(nextLesson.id)}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
              >
                {nextLesson.title} <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <span className="text-sm text-green-400">Course Complete!</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
