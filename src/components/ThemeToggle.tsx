"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check the actual DOM class to determine initial state
    // This ensures we are always in sync with what the user sees (set by layout script)
    const isDarkOnDom = document.documentElement.classList.contains("dark");
    setIsDark(isDarkOnDom);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <button
        className="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 cursor-pointer rounded-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors overflow-hidden group"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-5 h-5">
        {/* Sun */}
        <svg
          className={`absolute inset-0 w-5 h-5 text-yellow-500 transition-all duration-500 ease-out ${isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
            }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle
            cx="12"
            cy="12"
            r="4"
            className={`transition-all duration-500 ${isDark ? "r-0" : ""}`}
            fill="currentColor"
          />
          <g
            className={`transition-all duration-500 origin-center ${isDark ? "scale-0" : "scale-100"
              }`}
          >
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>

        {/* Moon */}
        <svg
          className={`absolute inset-0 w-5 h-5 text-primary transition-all duration-500 ease-out ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
            }`}
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            className="transition-all duration-500"
          />
          <g
            className={`transition-all duration-700 delay-200 ${isDark ? "opacity-100" : "opacity-0"
              }`}
          >
            <circle cx="19" cy="5" r="0.5" fill="currentColor" className="animate-pulse" />
            <circle
              cx="16"
              cy="3"
              r="0.3"
              fill="currentColor"
              className="animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <circle
              cx="21"
              cy="8"
              r="0.4"
              fill="currentColor"
              className="animate-pulse"
              style={{ animationDelay: "0.4s" }}
            />
          </g>
        </svg>
      </div>

      <div
        className={`absolute inset-0 rounded-full transition-all duration-300 ${isDark ? "group-hover:bg-primary/10" : "group-hover:bg-yellow-500/10"
          }`}
      />
    </button>
  );
}
