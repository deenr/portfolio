import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Header } from "./components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dean Reymen",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-4 sm:px-8 min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <div className="pt-4 sm:pt-6">
            <Header />
          </div>
          <div className="flex-grow mt-8 sm:mt-12">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
