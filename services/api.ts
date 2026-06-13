import axios from 'axios';
import type { LeadPayload, ChatMessage } from '../types';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5050',
  timeout: 10000,
});

export const sendLead = (payload: LeadPayload) => {
  return instance.post('/api/leads', payload);
};

export const sendChat = (payload: ChatMessage) => {
  return instance.post('/api/chat', payload);
};

export const getChatHistory = (sessionId: string) => {
  return instance.get(`/api/chat/history/${sessionId}`);
};

export default instance;
