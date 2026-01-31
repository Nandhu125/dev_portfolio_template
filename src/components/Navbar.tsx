"use client";

import ThemeToggle from "@/components/ThemeToggle";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileMenu from "@/components/MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    const basePath = path.split("#")[0];
    if (basePath === "") {
      return "hover:text-primary";
    }
    return pathname === basePath || pathname.startsWith(`${basePath}/`)
      ? "text-primary"
      : "hover:text-primary";
  };

  return (
    <>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div
          className={`
            pointer-events-auto relative
            flex items-center justify-between
            transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            ${isScrolled
              ? "mt-3 max-w-[750px] px-6 py-[9px] rounded-full nav-pill"
              : "mt-2 max-w-[1280px] px-6 py-4 rounded-full border border-transparent bg-transparent"
            }
            w-[95%] md:w-full
          `}
          style={{
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <div className="flex items-center justify-start z-20">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="material-symbols-outlined text-primary text-2xl">{siteConfig.nav.logo.icon}</span>
              <span
                className="font-bold text-lg tracking-tight whitespace-nowrap overflow-hidden transition-all duration-300 ease-out max-w-[200px] opacity-100"
              >
                {siteConfig.nav.logo.text}
              </span>
            </Link>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center">
            <div className="flex items-center gap-1">
              {siteConfig.nav.links.map((link) => (
                <Link
                  key={link.href}
                  className={`
                    relative px-4 py-1.5 text-sm font-medium transition-colors duration-300
                    ${isActive(link.href)}
                    after:content-[''] after:absolute after:bottom-1 after:left-4 after:right-4 after:h-px 
                    after:bg-primary after:scale-x-0 after:origin-center after:transition-transform after:duration-300
                    hover:after:scale-x-100
                  `}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center justify-end gap-2 z-20">
            <ThemeToggle />
            <Link
              className={`
                px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-full 
                hover:brightness-110 hover:shadow-lg hover:shadow-primary/20 
                transition-all duration-300 whitespace-nowrap
                ${isScrolled ? "px-5 py-2 text-xs" : ""}
              `}
              href="/contact"
            >
              Hire Me
            </Link>
          </div>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all active:scale-95 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`material-symbols-outlined text-2xl transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : "rotate-0"}`}>
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
