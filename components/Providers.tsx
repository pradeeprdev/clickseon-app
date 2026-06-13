"use client";
import { ThemeProvider } from 'next-themes';
import ToastProvider from './ToastProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  );
}
