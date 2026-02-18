import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Clock, CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import toast from 'react-hot-toast';
import { api } from '../../services/api';
import { Button } from '../../components/ui/Button';
import { Card, CardContent } from '../../components/ui/Card';
import { Spinner } from '../../components/ui/Spinner';

export default function QuizPage() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentQ, setCurrentQ] = useState(0);
  const [result, setResult] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const { data } = await api.get(`/quizzes/${quizId}`);
        setQuiz(data.data);
        if (data.data.timeLimit) {
          setTimeLeft(data.data.timeLimit * 60); // convert minutes to seconds
        }
      } catch {
        toast.error('Quiz not found');
        navigate(-1);
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [quizId, navigate]);

  // Timer
  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0 || result) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(timerRef.current);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [timeLeft, result]);

  const handleAnswer = (questionId: string, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmit = async () => {
    if (submitting) return;
    setSubmitting(true);
    clearInterval(timerRef.current);
    try {
      const { data } = await api.post(`/quizzes/${quizId}/submit`, { answers });
      setResult(data.data);
      toast.success(data.data.passed ? 'Congratulations! You passed!' : 'Keep trying! Review the answers.');
    } catch {
      toast.error('Failed to submit quiz');
    } finally {
      setSubmitting(false);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Spinner size="lg" /></div>;
  if (!quiz) return null;

  const questions = quiz.questions || [];
  const currentQuestion = questions[currentQ];

  // Result view
  if (result) {
    return (
      <>
        <Helmet><title>Quiz Results - Yunai Academy</title></Helmet>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <Card className="max-w-lg w-full">
            <CardContent className="p-8 text-center">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                result.passed ? 'bg-green-100' : 'bg-red-100'
              }`}>
                {result.passed
                  ? <CheckCircle className="h-10 w-10 text-green-600" />
                  : <XCircle className="h-10 w-10 text-red-600" />
                }
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {result.passed ? 'You Passed!' : 'Not Quite'}
              </h1>
              <p className="text-gray-500 mb-6">
                {result.passed ? 'Great job! You\'ve mastered this topic.' : 'Review the material and try again.'}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-gray-900">{Math.round(result.score)}%</div>
                  <div className="text-xs text-gray-500">Score</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-600">{result.correctAnswers}</div>
                  <div className="text-xs text-gray-500">Correct</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-red-600">{result.totalQuestions - result.correctAnswers}</div>
                  <div className="text-xs text-gray-500">Wrong</div>
                </div>
              </div>

              <div className="flex gap-3 justify-center">
                <Button variant="outline" onClick={() => navigate(-1)}>Back to Course</Button>
                <Button onClick={() => { setResult(null); setAnswers({}); setCurrentQ(0); }}>
                  <RotateCcw className="h-4 w-4" /> Retry
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet><title>{quiz.title} - Quiz - Yunai Academy</title></Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <h1 className="font-bold text-gray-900">{quiz.title}</h1>
            <div className="flex items-center gap-4">
              {timeLeft !== null && (
                <div className={`flex items-center gap-1 text-sm font-mono ${timeLeft < 60 ? 'text-red-600' : 'text-gray-600'}`}>
                  <Clock className="h-4 w-4" /> {formatTime(timeLeft)}
                </div>
              )}
              <span className="text-sm text-gray-500">
                {Object.keys(answers).length}/{questions.length} answered
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Question navigation */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {questions.map((_: any, i: number) => (
              <button
                key={i}
                onClick={() => setCurrentQ(i)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                  i === currentQ
                    ? 'bg-primary-600 text-white'
                    : answers[questions[i].id] !== undefined
                      ? 'bg-green-100 text-green-700'
                      : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* Current question */}
          {currentQuestion && (
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">Question {currentQ + 1} of {questions.length}</div>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">{currentQuestion.question}</h2>

                <div className="space-y-3">
                  {(currentQuestion.options as string[]).map((option: string, i: number) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(currentQuestion.id, i)}
                      className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-colors ${
                        answers[currentQuestion.id] === i
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      <span className="font-medium mr-2">{String.fromCharCode(65 + i)}.</span>
                      {option}
                    </button>
                  ))}
                </div>

                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
                    disabled={currentQ === 0}
                  >
                    Previous
                  </Button>

                  {currentQ < questions.length - 1 ? (
                    <Button onClick={() => setCurrentQ(currentQ + 1)}>
                      Next <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button onClick={handleSubmit} loading={submitting} className="bg-green-600 hover:bg-green-700">
                      Submit Quiz
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
