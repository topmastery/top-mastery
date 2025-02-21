'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconSend, IconRobot, IconX, IconMessageCircle } from '@tabler/icons-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
  
    try {
      if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
        throw new Error('API key is not configured');
      }
  
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: userMessage
            }]
          }],
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      });
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          `API Error: ${response.status}${errorData ? ' - ' + JSON.stringify(errorData) : ''}`
        );
      }
  
      const data = await response.json();
      
      if (!data.candidates || !data.candidates[0]?.content?.parts?.[0]?.text) {
        throw new Error('Invalid response format');
      }
  
      const aiResponse = data.candidates[0].content.parts[0].text;
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Error:', error);
      let errorMessage = 'عذراً، حدث خطأ في الاتصال بالمساعد الذكي. يرجى المحاولة مرة أخرى لاحقاً.';
      
      if (error instanceof Error) {
        if (error.message.includes('API key')) {
          errorMessage = 'عذراً، لم يتم تكوين مفتاح API بشكل صحيح. يرجى الاتصال بمسؤول النظام.';
        } else if (error.message.includes('500')) {
          errorMessage = 'عذراً، حدث خطأ في الخادم. يرجى المحاولة مرة أخرى بعد قليل.';
        }
      }
  
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: errorMessage
      }]);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 z-50 bg-primary text-dark p-3 rounded-full shadow-lg hover:bg-primary-light transition-all duration-300"
        aria-label="فتح المساعد الذكي"
      >
        <IconMessageCircle size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-36 right-8 z-50 bg-dark-light rounded-lg shadow-2xl w-[350px] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-dark p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconRobot size={24} />
                <h3 className="font-bold">المساعد الذكي</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-dark/10 p-1 rounded-full transition-colors"
              >
                <IconX size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-primary text-dark ml-4'
                        : 'bg-dark text-light mr-4'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-dark text-light p-3 rounded-lg mr-4">
                    جاري الكتابة...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-dark">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="اكتب رسالتك هنا..."
                  className="flex-1 bg-dark text-light rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-primary text-dark p-2 rounded-lg hover:bg-primary-light transition-colors disabled:opacity-50"
                >
                  <IconSend size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
