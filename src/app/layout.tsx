import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "BIMSaarthi - AI + BIM Construction Intelligence",
  description: "Unified BIM and Knowledge Graph platform for intelligent project decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body 
        className={cn(inter.variable, "min-h-screen bg-background font-sans antialiased")}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
