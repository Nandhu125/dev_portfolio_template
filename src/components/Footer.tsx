import { forwardRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer
      className={`border-t border-neutral-200 dark:border-neutral-800 py-12 ${className}`}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            {siteConfig.nav.logo.icon}
          </span>
          <span className="font-bold tracking-tight max-md:text-sm">{siteConfig.nav.logo.text}</span>
          <span className="text-neutral-500 text-sm ml-4 max-md:text-xs">{siteConfig.footer.copyright}</span>
        </div>
        <div className="flex gap-8">
          {siteConfig.socials.github && (
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              GitHub
            </Link>
          )}
          {siteConfig.socials.linkedin && (
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </Link>
          )}
          {siteConfig.socials.twitter && (
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href={siteConfig.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter profile"
            >
              Twitter
            </Link>
          )}
          {siteConfig.socials.dribbble && (
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href={siteConfig.socials.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble profile"
            >
              Dribbble
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
