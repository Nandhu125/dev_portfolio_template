"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

// Helper to separate session load state from component state
let isSessionLoaded = false;

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(!isSessionLoaded);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // If already loaded in this session, hide immediately
    if (isSessionLoaded) {
      setIsVisible(false);
      return;
    }

    // Use CSS animations instead of GSAP for faster initial load
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1500); // Wait for animation to finish

    const hideTimer = setTimeout(() => {
      isSessionLoaded = true;
      setIsVisible(false);
    }, 1900);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-[#121212] transition-opacity duration-400 ${isExiting ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className={`flex flex-col items-center gap-6 transition-all duration-400 ${isExiting ? '-translate-y-5 opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-4xl">{siteConfig.nav.logo.icon}</span>
          <span className="text-3xl font-bold tracking-tight text-[#121212] dark:text-white">{siteConfig.nav.logo.text}</span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="w-48 h-[2px] bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary dark:bg-teal-400 rounded-full animate-[loading-bar_1.5s_ease-in-out_forwards]"
            ></div>
          </div>

          <span className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-widest animate-pulse font-mono">
            Loading
          </span>
        </div>
      </div>
    </div>
  );
}
