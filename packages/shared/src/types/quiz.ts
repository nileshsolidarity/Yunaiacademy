export interface Quiz {
  id: string;
  title: string;
  lessonId: string;
  passingScore: number;
  timeLimit: number | null;
  questions?: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  quizId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string | null;
  order: number;
}

export interface QuizAttempt {
  id: string;
  userId: string;
  quizId: string;
  score: number;
  answers: Record<string, number>;
  submittedAt: string;
  quiz?: Quiz;
}

export interface QuizSubmission {
  quizId: string;
  answers: Record<string, number>;
}
