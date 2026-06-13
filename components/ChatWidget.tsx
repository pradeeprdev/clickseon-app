"use client";
import { useState, useRef, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { sendChat, getChatHistory } from '../services/api';
import { useToast } from './ToastProvider';

export default function ChatWidget(){
  const [open, setOpen] = useState(false);
  const [sessionId, setSessionId] = useLocalStorage<string | null>('chat_session', null);
  const [messages, setMessages] = useState<{ from: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scroller = useRef<HTMLDivElement | null>(null);
  const { show } = useToast();

  useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
  }, [messages, open]);

  // Load chat history when we have a sessionId
  useEffect(() => {
    const loadHistory = async () => {
      if (!sessionId) return;
      try {
        const res = await getChatHistory(sessionId);
        const body = res.data?.data || res.data;
        if (Array.isArray(body?.history)) {
          const mapped = body.history.map((h: any) => ({ from: 'user' as const, text: h.userMessage })).flat();
          // interleave bot replies
          const interleaved = body.history.reduce((acc: any[], h: any) => acc.concat({ from: 'user', text: h.userMessage }, { from: 'bot', text: h.botReply }), [] as any[]);
          setMessages(interleaved);
        }
      } catch (err) {
        // ignore history load errors
      }
    };
    loadHistory();
  }, [sessionId]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const text = input.trim();
    setMessages((m) => [...m, { from: 'user', text }]);
    setInput('');
    setLoading(true);
    try {
      const payload = { sessionId: sessionId || undefined, message: text };
      const res = await sendChat(payload as any);
      // backend responds with { success: true, data: { sessionId, userMessage, botReply } }
      const body = res.data?.data || res.data;
      if (body?.sessionId) setSessionId(body.sessionId);
      setMessages((m) => [...m, { from: 'bot', text: body?.botReply || 'Sorry, no reply available.' }]);
    } catch (err: any) {
      // Prefer server provided message when available
      const serverMsg = err?.response?.data?.message || err?.message || 'Chat failed';
      // show toast and append a bot-style message so user sees the error inline
      show(serverMsg, 'error');
      setMessages((m) => [...m, { from: 'bot', text: serverMsg }]);
    } finally { setLoading(false); }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="w-80 md:w-96 h-96 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex flex-col overflow-hidden border">
          <div className="px-4 py-3 border-b">ClickGrow AI</div>
          <div ref={scroller} className="flex-1 p-3 overflow-auto space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={`max-w-[80%] ${m.from === 'user' ? 'ml-auto bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100'} rounded-md p-2`}>{m.text}</div>
            ))}
            {loading && <div className="text-sm text-slate-500">Thinking…</div>}
          </div>
          <div className="p-3 border-t">
            <div className="flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 p-2 border rounded" placeholder="Ask about website, SEO, AI" />
              <button onClick={handleSend} disabled={loading} className="px-3 py-2 bg-indigo-600 text-white rounded">Send</button>
            </div>
          </div>
        </div>
      )}

      <button onClick={() => setOpen((v) => !v)} className="mt-2 p-3 rounded-full bg-indigo-600 text-white shadow-lg">
        {open ? '×' : 'AI'}
      </button>
    </div>
  );
}
