'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import "@/lib/emailjs";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
