"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Header() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  
  const isHome = pathname === "/";
  const isAlbum = pathname.startsWith("/albums");

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className={`w-full mx-auto flex justify-between items-center text-[var(--muted-foreground)] text-xs sm:text-sm font-mono transition-all duration-300 ${isAlbum ? "max-w-4xl" : "max-w-2xl"}`}>
      <div>
        {!isHome && (
          <Link
            href="/"
            className="hover:text-foreground hover:underline underline-offset-[3px] transition-colors text-left cursor-pointer"
          >
            ← back
          </Link>
        )}
      </div>
      <div className="flex items-center gap-3">
        {mounted && (
          <button
            onClick={toggleTheme}
            className="p-1 hover:text-foreground transition-colors duration-150"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>
        )}
      </div>
    </header>
  );
}
