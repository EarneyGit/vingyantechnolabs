import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../app/globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Vingyan Techno Labs | IoT, AI Computer Vision & Automation Solutions",
  description: "Build Smarter Operations with IoT, AI & Computer Vision. Vingyan Techno Labs helps businesses connect devices, automate processes, analyze visual data, and turn real-time intelligence into measurable operational decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
      <body className="antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-cyan-500/30">
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
