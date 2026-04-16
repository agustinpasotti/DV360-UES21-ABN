import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Sparkles, ChevronRight } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "ABN AI Assistance", a specialized AI assistant for ABN Digital. 
Your goal is to answer questions about the programmatic advertising proposal for Universidad Siglo 21.

Context of the proposal:
- Client: Universidad Siglo 21.
- Agency: ABN Digital (Certified Google Marketing Platform Partner).
- Main Tool: Display & Video 360 (DV360).
- Strategy: Programmatic advertising across Display, Video, CTV, and Audio.
- Key Benefits: Global reach, frequency control (e.g., reducing from 15 to 5 impacts), precision targeting, and brand safety.
- Buying Models: Open Auction, Private Marketplace (PMP), Preferred Deals (PD), and Programmatic Guaranteed (PG).
- Proposal Details: 
    * 16% fee for DV360 Open Exchange.
    * 10% fee for Youtube & Programmatic Direct Guaranteed.
    * Set Up Fee (USD 500): Bonificado (Waived).
    * Operational Platform Fee (USD 2,000/month): Bonificado (Waived).
    * ABN provides 100% bonificado "Operational" support including dedicated specialists.
- ABN Services: Media Strategy, Programmatic Excellence, Data & Analytics, Creative Production, Tech & Consulting, Global Reach.

Guidelines:
- Be professional, helpful, and concise.
- Use a friendly tone.
- If you don't know the answer based on the context, suggest contacting the ABN team.
- Answer in Spanish (the presentation language).
- Mention Universidad Siglo 21 and ABN Digital where appropriate.
`;

const SUGGESTED_QUESTIONS = [
  "¿Cuáles son los costos de la propuesta?",
  "¿Qué beneficios tiene usar DV360?",
  "¿Qué incluye el soporte de ABN?",
  "¿Cómo controlan la frecuencia de anuncios?"
];

export const AIAssistance: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: '¡Hola! Soy el asistente IA de ABN Digital. ¿En qué puedo ayudarte con respecto a esta propuesta para Universidad Siglo 21?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage = text.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI(process.env.GEMINI_API_KEY!);
      const model = ai.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: SYSTEM_INSTRUCTION,
      });

      const result = await model.generateContent(userMessage);
      const response = await result.response;
      const botResponse = response.text() || "Lo siento, tuve un problema al procesar tu consulta. Por favor, intenta de nuevo o contacta al equipo de ABN.";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Lo siento, hubo un error de conexión. Por favor intenta más tarde." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-ues21-green p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Chatbot</h3>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-[10px] opacity-80">En línea</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-ues21-green text-white' : 'bg-white border border-slate-200 text-ues21-green'}`}>
                      {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm shadow-sm ${msg.role === 'user' ? 'bg-ues21-green text-white rounded-tr-none' : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'}`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 items-center bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="px-4 py-2 bg-slate-50 border-t border-slate-100">
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-2">Preguntas sugeridas</p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED_QUESTIONS.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      className="text-xs bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full hover:border-ues21-green hover:text-ues21-green transition-all text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu consulta..."
                  className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-ues21-green/20 transition-all outline-none"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-ues21-green text-white p-2 rounded-xl hover:bg-ues21-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
              <p className="text-[9px] text-center text-slate-400 mt-2">
                Desarrollado por ABN Digital AI Team
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl transition-all duration-300 ${isOpen ? 'bg-slate-800 text-white' : 'bg-ues21-green text-white'}`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <div className="relative">
              <MessageSquare className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-ues21-accent rounded-full border-2 border-ues21-green"></div>
            </div>
            <span className="font-bold hidden md:block">Chatbot</span>
            <Sparkles className="w-4 h-4 text-ues21-accent animate-pulse" />
          </>
        )}
      </motion.button>
    </div>
  );
};
