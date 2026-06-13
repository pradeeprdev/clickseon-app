export interface LeadPayload {
  fullName: string;
  email: string;
  phone: string;
  service?: string;
  message?: string;
}

export interface ChatMessage {
  sessionId?: string;
  message: string;
}

export interface ChatResponse {
  sessionId: string;
  userMessage: string;
  botReply: string;
}
