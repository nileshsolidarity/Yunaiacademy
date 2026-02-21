import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Send, ArrowLeft, Search, User } from 'lucide-react';
import { api } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Spinner } from '../../components/ui/Spinner';

interface Conversation {
  userId: string;
  userName: string;
  userAvatar: string | null;
  lastMessage: string;
  lastMessageAt: string;
  unreadCount: number;
}

interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  subject: string | null;
  content: string;
  read: boolean;
  createdAt: string;
  sender: { id: string; name: string; avatar: string | null };
  receiver: { id: string; name: string; avatar: string | null };
}

interface Contact {
  id: string;
  name: string;
  avatar: string | null;
  role: string;
}

export default function CommunicationsPage() {
  const { user } = useAuth();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [selectedUserName, setSelectedUserName] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [showNewMessage, setShowNewMessage] = useState(false);
  const [contactSearch, setContactSearch] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchConversations();
  }, []);

  useEffect(() => {
    if (selectedUserId) {
      fetchMessages(selectedUserId);
    }
  }, [selectedUserId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const fetchConversations = async () => {
    try {
      const { data } = await api.get('/messages/conversations');
      setConversations(data.data || []);
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async (userId: string) => {
    try {
      const { data } = await api.get(`/messages/conversations/${userId}?limit=100`);
      setMessages(data.data || []);
      // Refresh conversations to update unread counts
      fetchConversations();
    } catch {
      // silently fail
    }
  };

  const fetchContacts = async (search: string) => {
    try {
      const { data } = await api.get(`/messages/contacts?search=${encodeURIComponent(search)}`);
      setContacts(data.data || []);
    } catch {
      // silently fail
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedUserId) return;
    setSendingMessage(true);
    try {
      await api.post('/messages', {
        receiverId: selectedUserId,
        content: newMessage.trim(),
      });
      setNewMessage('');
      fetchMessages(selectedUserId);
    } catch {
      // silently fail
    } finally {
      setSendingMessage(false);
    }
  };

  const openConversation = (userId: string, userName: string) => {
    setSelectedUserId(userId);
    setSelectedUserName(userName);
    setShowNewMessage(false);
  };

  const startNewMessage = () => {
    setShowNewMessage(true);
    setSelectedUserId(null);
    setSelectedUserName('');
    setMessages([]);
    setContactSearch('');
    fetchContacts('');
  };

  const selectContact = (contact: Contact) => {
    setSelectedUserId(contact.id);
    setSelectedUserName(contact.name);
    setShowNewMessage(false);
  };

  const handleContactSearch = (value: string) => {
    setContactSearch(value);
    fetchContacts(value);
  };

  const goBack = () => {
    setSelectedUserId(null);
    setSelectedUserName('');
    setShowNewMessage(false);
    setMessages([]);
  };

  if (loading) return <div className="flex justify-center py-20"><Spinner size="lg" /></div>;

  // Contact picker for new message
  if (showNewMessage) {
    return (
      <>
        <Helmet><title>New Message - Yunai Academy</title></Helmet>

        <div className="flex items-center gap-3 mb-6">
          <button onClick={goBack} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">New Message</h1>
        </div>

        <Card>
          <CardContent className="p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for a user..."
                value={contactSearch}
                onChange={(e) => handleContactSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
              />
            </div>
            <div className="space-y-1 max-h-96 overflow-y-auto">
              {contacts.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No contacts found</p>
              ) : (
                contacts.map((contact) => (
                  <button
                    key={contact.id}
                    onClick={() => selectContact(contact)}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left"
                  >
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      {contact.avatar ? (
                        <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full" />
                      ) : (
                        <User className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{contact.name}</p>
                      <p className="text-xs text-gray-500 capitalize">{contact.role.toLowerCase()}</p>
                    </div>
                  </button>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </>
    );
  }

  // Conversation view (messages with a specific user)
  if (selectedUserId) {
    return (
      <>
        <Helmet><title>Chat with {selectedUserName} - Yunai Academy</title></Helmet>

        <div className="flex items-center gap-3 mb-6">
          <button onClick={goBack} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedUserName}</h1>
        </div>

        <Card className="flex flex-col" style={{ height: 'calc(100vh - 220px)' }}>
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No messages yet. Start the conversation!</p>
            ) : (
              messages.map((msg) => {
                const isOwn = msg.senderId === user?.id;
                return (
                  <div key={msg.id} className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[75%] px-4 py-2.5 rounded-2xl ${
                        isOwn
                          ? 'bg-primary-600 text-white rounded-br-md'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-bl-md'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                      <p className={`text-xs mt-1 ${isOwn ? 'text-primary-200' : 'text-gray-400'}`}>
                        {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
              />
              <Button onClick={handleSendMessage} disabled={sendingMessage || !newMessage.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </>
    );
  }

  // Conversations list (default view)
  return (
    <>
      <Helmet><title>Communications - Yunai Academy</title></Helmet>

      <div className="flex items-center justify-between mb-1">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Communications</h1>
        <Button onClick={startNewMessage}>
          <Mail className="h-4 w-4" /> New Message
        </Button>
      </div>
      <p className="text-gray-500 mb-8">Your messages and conversations</p>

      {conversations.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <Mail className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No messages yet</h3>
            <p className="text-gray-500 mb-4">Start a conversation with an instructor or classmate</p>
            <Button onClick={startNewMessage}>Send your first message</Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          {conversations.map((conv) => (
            <Card key={conv.userId} hover>
              <button
                onClick={() => openConversation(conv.userId, conv.userName)}
                className="w-full text-left"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      {conv.userAvatar ? (
                        <img src={conv.userAvatar} alt={conv.userName} className="w-12 h-12 rounded-full" />
                      ) : (
                        <User className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900 dark:text-white truncate">{conv.userName}</h3>
                        <span className="text-xs text-gray-400 flex-shrink-0 ml-2">
                          {new Date(conv.lastMessageAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 truncate mt-0.5">{conv.lastMessage}</p>
                    </div>
                    {conv.unreadCount > 0 && (
                      <span className="bg-primary-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                        {conv.unreadCount}
                      </span>
                    )}
                  </div>
                </CardContent>
              </button>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
