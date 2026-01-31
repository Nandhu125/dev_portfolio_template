"use client";

import { useEffect, useRef, createContext, useContext, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

interface SmoothScrollerProps {
  children: React.ReactNode;
}

export default function SmoothScroller({ children }: SmoothScrollerProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Mobile optimization: Disable smooth scrolling on touch devices for native performance
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Only initialize Lenis on desktop
    if (isMobile) {
      setLenis(null);
      return;
    }

    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLenis(lenisInstance);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenisInstance.destroy();
    };
  }, []);

  useEffect(() => {
    if (!lenis) return;

    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          setTimeout(() => {
            lenis.scrollTo(targetElement, {
              offset: -100,
              duration: 1.5,
            });
          }, 100);
        }
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, [lenis, pathname]);

  useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor) {
        const href = anchor.getAttribute("href");

        if (href?.startsWith("#")) {
          e.preventDefault();
          const targetId = href.slice(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            lenis.scrollTo(targetElement, {
              offset: -100,
              duration: 1.5,
            });
            window.history.pushState(null, "", href);
          }
        } else if (href?.includes("#")) {
          const [path, hash] = href.split("#");
          const currentPath = window.location.pathname;

          if (path === currentPath || path === "" || path === "/") {
            e.preventDefault();
            const targetElement = document.getElementById(hash);
            if (targetElement) {
              lenis.scrollTo(targetElement, {
                offset: -100,
                duration: 1.5,
              });
              window.history.pushState(null, "", `#${hash}`);
            }
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [lenis]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
