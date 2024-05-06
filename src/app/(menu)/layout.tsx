import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/app/components/Navigation";
import React from "react";
import "../../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matchmaker App",
  description: "Find like-minded team members for gaming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
