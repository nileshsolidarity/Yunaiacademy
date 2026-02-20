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

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  subject: string | null;
  content: string;
  read: boolean;
  createdAt: string;
  sender?: { id: string; name: string; avatar: string | null };
  receiver?: { id: string; name: string; avatar: string | null };
}

export interface Conversation {
  userId: string;
  userName: string;
  userAvatar: string | null;
  lastMessage: string;
  lastMessageAt: string;
  unreadCount: number;
}

export interface AiChatMessage {
  id: string;
  userId: string;
  role: 'user' | 'assistant';
  message: string;
  sessionId: string;
  createdAt: string;
}
