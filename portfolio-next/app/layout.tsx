import type { Metadata } from "next";


import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { cn } from "@/lib/utils"

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Yan Berdin | Web Developer",
  description: "Portfolio of Yan Berdin, a web developer based in France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={cn(GeistSans.variable, AnekTelugu, "font-sans h-full bg-background text-foreground")}>{children}</body>
    </html>
  );
}
