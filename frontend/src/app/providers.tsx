"use client";
import CartContextProvider from "@/contexts/CartContext";
import SearchContextProvider from "@/contexts/SearchContext";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <CartContextProvider>
          <SearchContextProvider>{children}</SearchContextProvider>
        </CartContextProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}
