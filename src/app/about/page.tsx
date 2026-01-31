import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About & Contact | Portfolio",
  description:
    "Building with precision and purpose. I focus on creating high-impact digital experiences through clean code and thoughtful design.",
};

/**
 * About Page
 * 
 * Displays the key philosophy, tech stack, and professional timeline.
 * Designed with a manifesto-style layout for strong personal branding.
 */
export default function AboutPage() {
  return (
    <>

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute left-1/4 h-full grid-line-v dark:grid-line-v-dark"></div>
        <div className="absolute left-1/2 h-full grid-line-v dark:grid-line-v-dark"></div>
        <div className="absolute left-3/4 h-full grid-line-v dark:grid-line-v-dark"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <main id="main-content" className="flex-1 px-6 py-20 md:py-32 max-w-[1280px] mx-auto">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 mb-24 md:mb-48">
            <div className="lg:col-span-5">
              <div className="aspect-4/5 bg-zinc-800 rounded-lg overflow-hidden relative group">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
                <Image
                  alt="Portrait of the developer"
                  className="w-full h-full object-cover grayscale contrast-125"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd9CBkcuWS_MdeG8H0e3eRriFfSJ-ulcZQc_ab0GhUFMqii11c9jKWTM-YS-Od5iZNPSDsWDYh6asdQn0KVCI_EpW7l1MTjfVmHOl4RPqFHb8JVfFCOmMQW4xZNagPyHmiTCkCA-Nhv7iVn02PQDOxAjmcXyxnOKpW6kOTBuiWuRPL-Q77xzh-Y_sKGupSzZLj83a9LjGjwh7JHPVbK2CfySK0Ks6RbOg4TUTBix2kbgLY78GD4FeLiEdZ0JiIWbe5qYtTtA5WEsTm"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em] mb-4">
                Philosophy
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter mb-8">
                Manifesto
              </h1>
              <div className="space-y-6 max-w-xl">
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  Building with precision and purpose. I focus on creating{" "}
                  <span className="text-slate-900 dark:text-white font-medium">
                    high-impact digital experiences
                  </span>{" "}
                  through clean code and thoughtful design.
                </p>
                <p className="text-base text-slate-600 dark:text-slate-500 leading-loose">
                  Based in {siteConfig.location} / Available for remote work. I believe that every line of
                  code should serve the user&apos;s intent. My process is an iterative dance between
                  logic and aesthetics, ensuring that what looks good also works flawlessly.
                </p>
                <div className="pt-4 flex gap-4 items-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                  <span className="text-sm font-medium tracking-wide">
                    Available for worldwide collaboration
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-24 md:mb-48">
            <div className="grid-line-h dark:grid-line-h-dark w-full mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-6">
                  Current Focus
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Scaling distributed architectures and refining micro-interaction patterns in React
                  environments.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 border border-slate-200 dark:border-white/10 rounded-full text-xs font-mono uppercase opacity-70 hover:opacity-100 hover:border-primary/50 transition-all cursor-default">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 border border-slate-200 dark:border-white/10 rounded-full text-xs font-mono uppercase opacity-70 hover:opacity-100 hover:border-primary/50 transition-all cursor-default">
                    Next.js
                  </span>
                  <span className="px-3 py-1 border border-slate-200 dark:border-white/10 rounded-full text-xs font-mono uppercase opacity-70 hover:opacity-100 hover:border-primary/50 transition-all cursor-default">
                    Rust
                  </span>
                  <span className="px-3 py-1 border border-slate-200 dark:border-white/10 rounded-full text-xs font-mono uppercase opacity-70 hover:opacity-100 hover:border-primary/50 transition-all cursor-default">
                    Tailwind
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                  Education
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  B.S. Computer Science
                  <br />
                  Stanford University, 2016
                </p>
              </div>
            </div>
          </section>

          <section className="mb-24 md:mb-48 max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight mb-10 md:mb-16">Experience</h2>
            <div className="space-y-0">
              {/* Timeline Item 1 */}
              <div className="grid grid-cols-[40px_1fr] group">
                <div className="flex flex-col items-center">
                  <div className="size-2 rounded-full bg-primary mt-2 ring-4 ring-primary/20"></div>
                  <div className="w-px bg-slate-200 dark:bg-white/10 grow mt-2"></div>
                </div>
                <div className="pb-16 pl-8">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                      Senior Developer at TechCorp
                    </h4>
                    <span className="text-sm font-medium text-slate-500">2021 — Present</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Spearheaded the migration of a monolithic architecture to serverless edge
                    functions, improving load times by 40% globally.
                  </p>
                </div>
              </div>
              {/* Timeline Item 2 */}
              <div className="grid grid-cols-[40px_1fr] group">
                <div className="flex flex-col items-center">
                  <div className="size-2 rounded-full bg-slate-700 mt-2 group-hover:bg-primary transition-colors"></div>
                  <div className="w-px bg-slate-200 dark:bg-white/10 grow mt-2"></div>
                </div>
                <div className="pb-16 pl-8">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                      Frontend Engineer at DesignStudio
                    </h4>
                    <span className="text-sm font-medium text-slate-500">2018 — 2021</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Architected a design system used across 12 product lines, focusing on
                    accessibility and kinetic typography.
                  </p>
                </div>
              </div>
              {/* Timeline Item 3 */}
              <div className="grid grid-cols-[40px_1fr] group">
                <div className="flex flex-col items-center">
                  <div className="size-2 rounded-full bg-slate-700 mt-2 group-hover:bg-primary transition-colors"></div>
                </div>
                <div className="pl-8">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                      Junior Dev at StartUp Inc
                    </h4>
                    <span className="text-sm font-medium text-slate-500">2016 — 2018</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Developed core features for the MVP of a fintech application, handling
                    high-volume transaction UI.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-24 border-t border-slate-200 dark:border-white/5" id="contact">
            <div className="max-w-4xl">
              <span className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em] mb-6 block">
                Get in touch
              </span>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-12">
                Let&apos;s build something together.
              </h2>
              <a className="inline-block group relative mb-24" href={`mailto:${siteConfig.email}`}>
                <span className="text-3xl md:text-5xl font-light text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  {siteConfig.email}
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-px bg-primary group-hover:h-[3px] transition-all"></div>
              </a>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-12 border-t border-slate-200 dark:border-white/5">
                <div className="flex gap-8">
                  {siteConfig.socials.github && (
                    <a
                      className="opacity-50 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2"
                      href={siteConfig.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub profile"
                    >
                      <span className="text-sm font-mono font-bold uppercase tracking-widest">Github</span>
                      <span className="material-symbols-outlined text-sm">north_east</span>
                    </a>
                  )}
                  {siteConfig.socials.linkedin && (
                    <a
                      className="opacity-50 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2"
                      href={siteConfig.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile"
                    >
                      <span className="text-sm font-mono font-bold uppercase tracking-widest">LinkedIn</span>
                      <span className="material-symbols-outlined text-sm">north_east</span>
                    </a>
                  )}
                  {siteConfig.socials.twitter && (
                    <a
                      className="opacity-50 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2"
                      href={siteConfig.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter profile"
                    >
                      <span className="text-sm font-mono font-bold uppercase tracking-widest">X / Twitter</span>
                      <span className="material-symbols-outlined text-sm">north_east</span>
                    </a>
                  )}
                </div>
                <div className="text-slate-600 text-xs font-mono tracking-widest uppercase">
                  {siteConfig.footer.copyright}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
