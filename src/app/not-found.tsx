import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ArrowIcon from "@/components/ArrowIcon";

export const metadata: Metadata = {
  title: `404 - Page Not Found | ${siteConfig.nav.logo.text}`,
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white dark:bg-[#121212]">
      {/* Background grid effect */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <div className="absolute left-1/4 h-full w-px bg-neutral-500/20"></div>
        <div className="absolute left-1/2 h-full w-px bg-neutral-500/20"></div>
        <div className="absolute left-3/4 h-full w-px bg-neutral-500/20"></div>
      </div>

      <div className="relative z-10 text-center max-w-xl">
        {/* 404 Number */}
        <h1 className="text-[150px] md:text-[200px] font-bold leading-none tracking-tighter text-primary/20 select-none">
          404
        </h1>

        {/* Message */}
        <div className="-mt-8 md:-mt-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#121212] dark:text-white">Page not found</h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-lg mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 group"
            >
              <ArrowIcon direction="left" className="text-sm" />
              Back to Home
            </Link>
            <Link
              href="/works"
              className="px-8 py-4 border border-neutral-300 dark:border-neutral-700 font-bold rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all text-[#121212] dark:text-white"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-8 text-neutral-500 text-xs font-mono uppercase tracking-widest">
        Lost in the void
      </div>
    </div>
  );
}
