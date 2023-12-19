import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J.A.R.V.I.S 🤖",
  description: "Chatbot utilizando Next.js TailwindCSS e Vercel IA SKD",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://workshop-chatbot-ia.vercel.app/",
    siteName: "J.A.R.V.I.S 🤖",
    images: [
      {
        url: "https://workshop-chatbot-ia.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "J.A.R.V.I.S 🤖",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
