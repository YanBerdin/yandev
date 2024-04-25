import "@/styles/globals.css"
// import "./globals.css";
import type { Metadata } from "next";

import { Anek_Telugu } from "next/font/google";
import { GeistSans } from 'geist/font/sans';

import { siteConfig } from "@/config/site"
// import { fontSans } from "@/lib/fonts"

import { cn } from "@/lib/utils"

import { Header } from "@/components/Header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  // title "Yan Berdin | Web Developer",
  // description: "Portfolio of Yan Berdin, a junior web developer based in France.",
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans h-full">
      <head />
      {/* <body className={inter.className}>{children}</body> */}
      <body className={cn("min-h-screen bg-background font-sans antialiased dark", GeistSans.variable, AnekTelugu,)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
