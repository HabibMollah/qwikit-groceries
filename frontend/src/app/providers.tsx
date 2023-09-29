'use client';
import SearchContextProvider from '@/contexts/SearchContext';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <SearchContextProvider>{children}</SearchContextProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}
