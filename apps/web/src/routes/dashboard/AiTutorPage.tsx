import { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Bot, Send, Sparkles, Trash2 } from 'lucide-react';
import { api } from '../../services/api';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function AiTutorPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => crypto.randomUUID());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = { id: crypto.randomUUID(), role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const { data } = await api.post('/ai/chat', { message: userMsg.content, sessionId });
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: 'assistant', content: data.data.message }]);
    } catch (error: any) {
      const status = error?.response?.status;
      const errorMsg = status === 503
        ? 'AI Tutor service is currently being set up. Please try again later.'
        : 'Sorry, I encountered an error. Please try again.';
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: 'assistant', content: errorMsg }]);
    } finally {
      setLoading(false);
    }
  };

  const suggestedQuestions = [
    'Explain the golden rules of accounting',
    'What is the difference between FIFO and LIFO?',
    'How to calculate depreciation using WDV method?',
    'Explain Section 44AD of Income Tax',
    'What are the types of company audits?',
    'Explain the concept of GST Input Tax Credit',
  ];

  return (
    <>
      <Helmet><title>AI Tutor - Yunai Academy</title></Helmet>

      <div className="flex flex-col h-[calc(100vh-140px)]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary-600" /> AI Tutor
            </h1>
            <p className="text-gray-500 text-sm">Your personal CA exam preparation assistant</p>
          </div>
          <Button variant="outline" size="sm" onClick={() => setMessages([])}>
            <Trash2 className="h-4 w-4" /> Clear Chat
          </Button>
        </div>

        {/* Chat area */}
        <Card className="flex-1 flex flex-col overflow-hidden">
          <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-12">
                <Sparkles className="h-12 w-12 text-primary-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-700 mb-2">Ask me anything about CA!</h3>
                <p className="text-sm text-gray-500 mb-6">I can help with Accounting, Tax, Audit, Law, and more</p>
                <div className="grid grid-cols-2 gap-2 max-w-lg mx-auto">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => setInput(q)}
                      className="text-left text-xs bg-gray-50 text-gray-600 px-3 py-2 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                    <Bot className="h-4 w-4 text-primary-600" />
                  </div>
                )}
                <div className={`max-w-[70%] px-4 py-3 rounded-2xl ${
                  msg.role === 'user'
                    ? 'bg-primary-600 text-white rounded-br-md'
                    : 'bg-gray-100 text-gray-800 rounded-bl-md'
                }`}>
                  <div className="text-sm whitespace-pre-wrap">{msg.content}</div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                  <Bot className="h-4 w-4 text-primary-600" />
                </div>
                <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask about any CA topic..."
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                disabled={loading}
              />
              <Button onClick={sendMessage} disabled={!input.trim() || loading}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
