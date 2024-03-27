"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: Session;
}>) {
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={inter.className}>
          <MainHeader />
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
          </main>
          <Footer />
        </body>
      </SessionProvider>
    </html>
  );
}
