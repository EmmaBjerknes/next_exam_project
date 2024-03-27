"use client";

import "./globals.css";
import React from "react";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body>
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
