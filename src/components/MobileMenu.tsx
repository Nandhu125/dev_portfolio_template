"use client";

import { useEffect, useSyncExternalStore, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import ThemeToggle from "@/components/ThemeToggle";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}


function useHydrated() {
  return useSyncExternalStore(
    () => () => { },
    () => true,
    () => false
  );
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const isHydrated = useHydrated();
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };


  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) {
      onClose();
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isHydrated) return null;

  return (
    <div
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className={`
        fixed inset-0 z-40 bg-white/98 dark:bg-[#0a0a0a]/98 backdrop-blur-xl
        flex flex-col pt-32 px-6
        transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]
      `}
      style={{
        clipPath: isOpen ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
        pointerEvents: isOpen ? "auto" : "none"
      }}
    >
      <div className="flex-1 flex flex-col justify-between pb-12">
        <nav className="flex flex-col gap-6 mt-8" aria-label="Mobile navigation">
          {siteConfig.nav.links.map((link, idx) => (
            <div key={link.href} className="overflow-hidden border-b border-neutral-100 dark:border-neutral-800 pb-4">
              <Link
                href={link.href}
                onClick={onClose}
                className={`
                  block text-4xl font-bold tracking-tight focus:text-primary focus:outline-none transition-colors duration-300
                  ${isActive(link.href) ? "text-primary" : "hover:text-primary"}
                  transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                  ${isOpen ? "translate-y-0" : "translate-y-[120%]"}
                `}
                style={{ transitionDelay: `${isOpen ? 100 + idx * 50 : 0}ms` }}
                tabIndex={isOpen ? 0 : -1}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>

        <div
          className={`
            flex flex-col gap-6 
            transition-all duration-500 delay-300
            ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
          `}
        >
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full py-4 bg-primary text-white text-xl font-bold rounded-full text-center hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 shadow-lg shadow-primary/20 transition-all active:scale-95"
            tabIndex={isOpen ? 0 : -1}
          >
            Hire Me
          </Link>

          <div className="flex items-center justify-between px-4 py-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50">
            <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Appearance</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
