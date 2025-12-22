import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Header } from "./components/header";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "dean reymen",
    template: "%s | dean reymen",
  },
  description: "software engineer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deanreymen.be",
    siteName: "dean reymen",
    title: "dean reymen",
    description: "software engineer",
  },
  twitter: {
    card: "summary_large_image",
    title: "dean reymen",
    description: "software engineer",
  },
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
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
