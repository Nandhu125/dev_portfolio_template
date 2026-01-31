"use client";

import { useEffect, useRef, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const previousPathnameRef = useRef(pathname);

  useEffect(() => {
    if (previousPathnameRef.current === pathname) {
      return;
    }

    if (isAnimatingRef.current) {
      previousPathnameRef.current = pathname;
      return;
    }

    isAnimatingRef.current = true;
    previousPathnameRef.current = pathname;

    // Dynamic import GSAP only when transition is needed
    import("gsap").then(({ default: gsap }) => {
      const tl = gsap.timeline({
        onComplete: () => {
          isAnimatingRef.current = false;
        },
      });

      tl.to(overlayRef.current, {
        y: "0%",
        duration: 0.5,
        ease: "power3.inOut",
      })
        .to({}, { duration: 0.1 })
        .to(overlayRef.current, {
          y: "-100%",
          duration: 0.5,
          ease: "power3.inOut",
        })
        .fromTo(
          containerRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.3"
        )
        .set(overlayRef.current, { y: "100%" });
    });
  }, [pathname]);

  return (
    <>
      <div ref={containerRef} className="page-transition-container">
        {children}
      </div>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-9998 bg-primary pointer-events-none"
        style={{ transform: "translateY(100%)" }}
      >
        <div className="h-full flex items-center justify-center">
          <div className="flex items-center gap-3 text-white">
            <span className="material-symbols-outlined text-3xl">terminal</span>
            <span className="text-2xl font-bold tracking-tight">DEV.FOLIO</span>
          </div>
        </div>
      </div>
    </>
  );
}

