import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { api } from '../../services/api';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Spinner } from '../../components/ui/Spinner';

export default function MyCoursesPage() {
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const { data } = await api.get('/enrollments');
        setEnrollments(data.data);
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    };
    fetchEnrollments();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" />
      </div>
    );
  }

  const inProgress = enrollments.filter((e: any) => e.progress < 100);
  const completed = enrollments.filter((e: any) => e.progress >= 100);

  return (
    <>
      <Helmet>
        <title>My Courses - Yunai Academy</title>
      </Helmet>

      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>
            <p className="text-gray-500 text-sm mt-1">
              {enrollments.length} course{enrollments.length !== 1 ? 's' : ''} enrolled
            </p>
          </div>
          <Link
            to="/courses"
            className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
          >
            Browse more courses <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {enrollments.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No courses yet</h3>
              <p className="text-gray-500 mb-6">Start your CA preparation journey by enrolling in a course</p>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
              >
                <BookOpen className="h-5 w-5" /> Browse Courses
              </Link>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* In Progress */}
            {inProgress.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" /> In Progress ({inProgress.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {inProgress.map((enrollment: any) => (
                    <CourseCard key={enrollment.id} enrollment={enrollment} />
                  ))}
                </div>
              </div>
            )}

            {/* Completed */}
            {completed.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" /> Completed ({completed.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {completed.map((enrollment: any) => (
                    <CourseCard key={enrollment.id} enrollment={enrollment} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

function CourseCard({ enrollment }: { enrollment: any }) {
  const course = enrollment.course;
  const firstLessonId = course?.modules?.[0]?.lessons?.[0]?.id;
  const isComplete = enrollment.progress >= 100;

  const levelColors: Record<string, 'success' | 'warning' | 'danger'> = {
    BEGINNER: 'success',
    INTERMEDIATE: 'warning',
    ADVANCED: 'danger',
  };

  return (
    <Card hover>
      <CardContent className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant={levelColors[course?.level] || 'default'}>
            {course?.level?.charAt(0) + course?.level?.slice(1).toLowerCase()}
          </Badge>
          <Badge>{course?.category}</Badge>
        </div>
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{course?.title}</h3>
        <p className="text-sm text-gray-500 mb-4">By {course?.instructor?.name}</p>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium text-gray-900">{Math.round(enrollment.progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full transition-all ${isComplete ? 'bg-green-500' : 'bg-primary-600'}`}
              style={{ width: `${enrollment.progress}%` }}
            />
          </div>
        </div>

        <Link
          to={
            firstLessonId
              ? `/learn/${course.slug}/${firstLessonId}`
              : `/courses/${course?.slug}`
          }
          className={`inline-flex items-center gap-1 text-sm font-medium ${
            isComplete
              ? 'text-green-600 hover:text-green-700'
              : 'text-primary-600 hover:text-primary-700'
          }`}
        >
          {isComplete ? 'Review Course' : 'Continue Learning'} <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
