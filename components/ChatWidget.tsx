"use client";
import { useState, useRef, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { sendChat, getChatHistory } from "../services/api";
import { useToast } from "./ToastProvider";

type Msg = {
  from: "user" | "bot";
  text: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [sessionId, setSessionId] = useLocalStorage<string | null>(
    "chat_session",
    null
  );
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scroller = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { show } = useToast();

  // auto scroll
  useEffect(() => {
    if (scroller.current) {
      scroller.current.scrollTop = scroller.current.scrollHeight;
    }
  }, [messages, open]);

  // focus input on open
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // load history
  useEffect(() => {
    const loadHistory = async () => {
      if (!sessionId) return;
      try {
        const res = await getChatHistory(sessionId);
        const body = res.data?.data || res.data;

        if (Array.isArray(body?.history)) {
          const interleaved = body.history.reduce(
            (acc: Msg[], h: any) =>
              acc.concat(
                { from: "user", text: h.userMessage },
                { from: "bot", text: h.botReply }
              ),
            []
          );

          setMessages(interleaved);
        }
      } catch {}
    };

    loadHistory();
  }, [sessionId]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const text = input.trim();

    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const payload = { sessionId: sessionId || undefined, message: text };
      const res = await sendChat(payload as any);
      const body = res.data?.data || res.data;

      if (body?.sessionId) setSessionId(body.sessionId);

      setMessages((m) => [
        ...m,
        {
          from: "bot",
          text: body?.botReply || "Sorry, no reply available.",
        },
      ]);
    } catch (err: any) {
      const msg =
        err?.response?.data?.message || err?.message || "Chat failed";
      show(msg, "error");

      setMessages((m) => [...m, { from: "bot", text: msg }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Chat Window */}
      {open && (
        <div className="w-80 md:w-96 h-[500px] flex flex-col rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <div className="font-semibold">ClickGrow AI</div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scroller}
            className="flex-1 p-3 space-y-2 overflow-auto scroll-smooth"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 max-w-[75%] text-sm rounded-2xl shadow-sm leading-relaxed ${
                    m.from === "user"
                      ? "bg-indigo-600 text-white rounded-br-sm"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex items-center gap-1 text-slate-500 text-sm px-2">
                <span className="animate-bounce">●</span>
                <span className="animate-bounce delay-150">●</span>
                <span className="animate-bounce delay-300">●</span>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-white dark:bg-slate-900">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask anything..."
                className="flex-1 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />

              <button
                onClick={handleSend}
                disabled={loading}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl hover:scale-105 transition"
      >
        {open ? "×" : "💬"}
      </button>
    </div>
  );
}