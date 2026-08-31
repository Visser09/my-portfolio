import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mitchel Visser | AI-Assisted Full-Stack Developer",
  description:
    "Portfolio of Mitchel Visser — AI-assisted full-stack developer building AI products, automation, agent workflows, web applications, and Python services.",
  keywords: [
    "AI-assisted developer",
    "full-stack developer",
    "AI product engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "AI agents",
    "automation",
  ],
  authors: [{ name: "Mitchel Visser" }],
  openGraph: {
    title: "Mitchel Visser | AI-Assisted Full-Stack Developer",
    description:
      "AI-native product builder working across Next.js, TypeScript, Python, APIs, automation, and AI agent workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
