import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider className="dark text-foreground bg-background">
      <NextThemesProvider >
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
