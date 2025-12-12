import React, { useState, useRef, useEffect } from 'react';
import { Icon } from './Icons';
import { ChatMessage } from '../types';
import { sendChatToGemini } from '../services/geminiService';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Systems Online. I am Corvus, your security advisor. How can I protect your business today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setIsLoading(true);

    const newHistory: ChatMessage[] = [...messages, { role: 'user', content: userMsg }];
    setMessages(newHistory);

    try {
      const responseText = await sendChatToGemini(messages, userMsg);
      setMessages([...newHistory, { role: 'model', content: responseText }]);
    } catch (error) {
      setMessages([...newHistory, { role: 'model', content: "Connection error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] md:w-96 h-[500px] glass-panel rounded-2xl flex flex-col overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-violet-500/30 animate-float-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-900/80 to-slate-900/80 p-4 border-b border-white/10 flex justify-between items-center backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-bold text-white text-sm tracking-wide">CORVUS AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <Icon name="close" className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-slate-950/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-violet-600 text-white rounded-br-none' 
                      : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 text-slate-400 p-3 rounded-lg rounded-bl-none border border-slate-700 text-xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-slate-900/80 border-t border-white/10 backdrop-blur-md">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about security..."
                className="w-full bg-slate-800/50 text-white rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 border border-slate-700 transition-all"
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-violet-600 rounded-full text-white hover:bg-violet-500 transition-colors disabled:opacity-50"
              >
                <Icon name="send" className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300 hover:scale-105 ${
          isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-gradient-to-br from-violet-600 to-blue-600 text-white'
        }`}
      >
        {isOpen ? <Icon name="close" /> : <Icon name="chat" />}
      </button>
    </div>
  );
};