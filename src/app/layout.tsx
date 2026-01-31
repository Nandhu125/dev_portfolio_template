import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";
import PageLoader from "@/components/PageLoader";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/react";

/**
 * Root Layout
 * Defines the global structure, fonts, SEO metadata, and theme providers.
 * Includes smooth scrolling, page transitions, and analytics.
 */
export const metadata: Metadata = {
  title: {
    default: `${siteConfig.title} - ${siteConfig.role}`,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.siteUrl),

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: `${siteConfig.title} - ${siteConfig.role}`,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.title} - ${siteConfig.tagline}`,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.title} - ${siteConfig.role}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.socials.twitter
      ? `@${siteConfig.socials.twitter.split("/").pop()}`
      : undefined,
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },


  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
  width: "device-width",
  initialScale: 1,
};

import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Preconnect to font origins for faster loading */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Primary font - using font-display: swap for non-blocking */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
          rel="stylesheet"
        />
        {/* Material Icons - using display=swap for non-blocking */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@400,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-[#121212] text-[#121212] dark:text-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:font-bold focus:rounded-full focus:shadow-lg focus:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
        >
          Skip to main content
        </a>

        <PageLoader />
        <Navbar />
        <SmoothScroller>
          <PageTransition>{children}</PageTransition>
        </SmoothScroller>
        <Analytics />
      </body>
    </html>
  );
}
