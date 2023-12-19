import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J.A.R.V.I.S 🤖",
  description: "Chatbot utilizando Next.js TailwindCSS e Vercel IA SKD",
};

export default function RootLayout({children}: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
