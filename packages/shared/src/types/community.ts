export interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
  courseId: string | null;
  user?: { id: string; name: string; avatar: string | null };
  commentsCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  content: string;
  userId: string;
  postId: string;
  user?: { id: string; name: string; avatar: string | null };
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  read: boolean;
  link: string | null;
  createdAt: string;
}

export interface AiChatMessage {
  id: string;
  userId: string;
  role: 'user' | 'assistant';
  message: string;
  sessionId: string;
  createdAt: string;
}
