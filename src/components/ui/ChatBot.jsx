import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../supabaseClient';

// Helper to parse basic markdown bold (**text**) even while typing
const formatMessage = (text) => {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*|\*\*.*?$)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**')) {
      return <strong key={i} className="font-bold text-on-surface">{part.replace(/\*\*/g, '')}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
};

// A simple typewriter effect component for AI messages
const TypewriterText = ({ text, speed = 10, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    
    if (!text) {
      if (onComplete) onComplete();
      return;
    }

    const timer = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        if (onComplete) onComplete();
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed, onComplete]);

  return <span className="whitespace-pre-wrap">{formatMessage(displayedText)}</span>;
};

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: "Hi! I'm Gagan's AI assistant. Ask me anything about his skills, projects, or let me know if you want to send him an email!", isComplete: true }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    
    // Format history for Gemini API. Gemini requires history to start with a 'user' message.
    // We skip the initial greeting message which has role 'model'.
    const history = messages.slice(1).map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    setMessages(prev => [...prev, { role: 'user', text: userMessage, isComplete: true }]);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat', {
        body: { history, message: userMessage }
      });

      if (error) throw error;

      if (data && data.text) {
        setMessages(prev => [...prev, { role: 'model', text: data.text, isComplete: false }]);
      } else {
        throw new Error("Invalid response from AI");
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "I'm having trouble connecting right now. Please try again later.", 
        isComplete: true,
        isError: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const markMessageComplete = (index) => {
    setMessages(prev => {
      const newMessages = [...prev];
      if (newMessages[index]) {
        newMessages[index].isComplete = true;
      }
      return newMessages;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto bg-white border border-outline-variant shadow-2xl w-[350px] sm:w-[400px] h-[500px] flex flex-col mb-4 overflow-hidden rounded-md"
          >
            {/* Header */}
            <div className="bg-[#0A0A0A] text-white p-4 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-headline-md font-bold text-sm">GS</div>
                <div>
                  <h3 className="font-label-mono text-[11px] uppercase tracking-widest font-bold m-0 leading-tight">Gagan AI</h3>
                  <p className="text-[9px] text-white/70 uppercase tracking-widest m-0 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 block animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-surface-container-lowest flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-md text-[13px] font-body-main leading-relaxed shadow-sm
                      ${msg.role === 'user' 
                        ? 'bg-primary text-white rounded-tr-none' 
                        : msg.isError 
                          ? 'bg-error-container text-on-error-container border border-[#ffdad6] rounded-tl-none'
                          : 'bg-white border border-outline-variant text-on-surface rounded-tl-none'}`}
                  >
                    {msg.role === 'model' && !msg.isComplete ? (
                      <TypewriterText 
                        text={msg.text} 
                        speed={8} 
                        onComplete={() => markMessageComplete(idx)} 
                      />
                    ) : (
                      <span className="whitespace-pre-wrap">{formatMessage(msg.text)}</span>
                    )}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex w-full justify-start">
                  <div className="bg-white border border-outline-variant p-3 rounded-md rounded-tl-none flex items-center gap-1 h-10 shadow-sm">
                    <motion.div 
                      className="w-1.5 h-1.5 bg-outline rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div 
                      className="w-1.5 h-1.5 bg-outline rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div 
                      className="w-1.5 h-1.5 bg-outline rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form 
              onSubmit={handleSubmit} 
              className="p-3 border-t border-outline-variant bg-white flex items-end gap-2 shrink-0"
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder="Ask about my experience..."
                className="flex-1 max-h-[100px] min-h-[40px] resize-none outline-none font-body-main text-[13px] p-2 bg-transparent text-on-surface placeholder:text-outline"
                rows={1}
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-md bg-[#0A0A0A] flex flex-shrink-0 items-center justify-center text-white disabled:bg-outline-variant disabled:text-outline transition-colors hover:bg-primary"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto w-14 h-14 rounded-full bg-[#0A0A0A] border border-[#333] shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-white hover:bg-primary transition-colors duration-300 relative"
      >
        <span className="material-symbols-outlined text-[24px]">
          {isOpen ? 'close' : 'smart_toy'}
        </span>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
