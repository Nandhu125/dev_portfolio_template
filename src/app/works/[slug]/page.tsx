import Image from "next/image";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/data/case-studies";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import ArrowIcon from "@/components/ArrowIcon";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} | Portfolio`,
    description: caseStudy.description,
  };
}

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

/**
 * Case Study Detail Page
 * 
 * Renders the full case study with immersive visuals and detailed breakdown.
 * Generates static pages for all case studies at build time.
 */
export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <section className="relative h-screen w-full flex flex-col justify-end items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            fill
            className="object-cover scale-105 brightness-[0.4] grayscale-[0.2]"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-[1280px] px-6 pb-24">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3 py-1 bg-primary/20 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                {caseStudy.badge}
              </span>
              <span className="h-px w-12 bg-primary/30 hidden sm:block" />
              <span className="text-muted-teal text-[10px] font-medium uppercase tracking-widest">
                {caseStudy.subtitle}
              </span>
            </div>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-[0.9] max-w-4xl">
              {caseStudy.title}
            </h1>
            <p className="text-muted-teal text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              {caseStudy.description}
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-[1280px] mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <aside className="lg:col-span-4 h-fit lg:sticky lg:top-32 space-y-8 md:space-y-12">
          <div className="space-y-8">
            <div className="flex flex-col gap-1 border-t border-primary/20 pt-6">
              <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                The Role
              </span>
              <p className="text-white text-lg font-medium">{caseStudy.role}</p>
              <p className="text-muted-teal text-sm">{caseStudy.roleDescription}</p>
            </div>
            <div className="flex flex-col gap-1 border-t border-primary/20 pt-6">
              <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {caseStudy.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-surface-dark border border-white/5 rounded text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1 border-t border-primary/20 pt-6">
              <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                Timeline
              </span>
              <p className="text-white text-lg font-medium">{caseStudy.timeline}</p>
              <p className="text-muted-teal text-sm">{caseStudy.timelineDescription}</p>
            </div>
            {caseStudy.projectUrl && (
              <div className="pt-8">
                <a
                  href={caseStudy.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-black hover:bg-primary hover:text-white flex items-center justify-between px-6 py-4 rounded-lg transition-all group cursor-pointer"
                >
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Launch Project
                  </span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_outward
                  </span>
                </a>
              </div>
            )}
          </div>
        </aside>

        <div className="lg:col-span-8 space-y-20 md:space-y-24">
          <section className="space-y-6 md:space-y-8">
            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
              The Challenge
            </h2>
            <div className="prose prose-invert prose-lg max-w-none text-muted-teal space-y-6 leading-relaxed">
              {caseStudy.challenge.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>


          <section className="relative group">
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/5 shadow-2xl">
              <Image
                src={caseStudy.images[0]}
                alt="Project showcase"
                fill
                className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
            <p className="mt-4 text-[10px] uppercase tracking-widest text-muted-teal text-center">
              Fig 01: Project visualization
            </p>
          </section>


          <section className="space-y-6 md:space-y-8">
            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
              Technical Strategy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {caseStudy.technicalStrategies.map((strategy, index) => (
                <div
                  key={index}
                  className="bg-surface-dark p-6 md:p-8 rounded-xl border border-white/5"
                >
                  <span className="material-symbols-outlined text-primary mb-4 block">
                    {strategy.icon}
                  </span>
                  <h3 className="text-white font-bold mb-2">{strategy.title}</h3>
                  <p className="text-muted-teal text-sm leading-relaxed">{strategy.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-l-2 border-primary pl-8 md:pl-12 py-4">
            <blockquote className="text-white text-xl sm:text-2xl md:text-3xl font-light italic leading-snug">
              &quot;{caseStudy.quote}&quot;
            </blockquote>
          </section>

          {caseStudy.images.length > 1 && (
            <section className="grid grid-cols-2 gap-4 md:gap-6">
              {caseStudy.images.slice(1, 3).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/5"
                >
                  <Image
                    src={image}
                    alt={`Project image ${index + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </section>
          )}

          <section className="space-y-8 md:space-y-12">
            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
              The Outcome
            </h2>
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {caseStudy.outcomes.map((outcome, index) => (
                <div key={index} className="text-center md:text-left">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                    {outcome.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                    {outcome.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-muted-teal leading-relaxed">{caseStudy.conclusion}</p>
          </section>
        </div>
      </main>

      <footer className="w-full bg-neutral-50 dark:bg-surface-dark border-t border-neutral-200 dark:border-white/10 py-24 md:py-32 mt-24 md:mt-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
            {caseStudy.nextProject ? (
              <Link
                href={`/works/${caseStudy.nextProject.slug}`}
                className="space-y-4 md:space-y-6 max-w-xl group"
              >
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                  Next Project
                </span>
                <h2 className="text-neutral-900 dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter group-hover:text-primary transition-colors">
                  {caseStudy.nextProject.title}
                </h2>
                <p className="text-neutral-600 dark:text-muted-teal">{caseStudy.nextProject.description}</p>
              </Link>
            ) : (
              <Link href="/works" className="space-y-4 md:space-y-6 max-w-xl group">
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                  Back to Portfolio
                </span>
                <h2 className="text-neutral-900 dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter group-hover:text-primary transition-colors">
                  View All Projects
                </h2>
                <p className="text-neutral-600 dark:text-muted-teal">Explore more of my work and case studies.</p>
              </Link>
            )}
            <div className="flex gap-4">
              {caseStudy.prevProject ? (
                <Link
                  href={`/works/${caseStudy.prevProject.slug}`}
                  className="group size-12 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
                  aria-label="Previous project"
                >
                  <ArrowIcon direction="left" className="text-lg" />
                </Link>
              ) : (
                <div className="size-12 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center opacity-30">
                  <ArrowIcon direction="left" className="text-lg" />
                </div>
              )}
              {caseStudy.nextProject ? (
                <Link
                  href={`/works/${caseStudy.nextProject.slug}`}
                  className="group size-12 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
                  aria-label="Next project"
                >
                  <ArrowIcon className="text-lg" />
                </Link>
              ) : (
                <div className="size-12 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center opacity-30">
                  <ArrowIcon className="text-lg" />
                </div>
              )}
            </div>
          </div>
          <div className="mt-24 md:mt-32 pt-12 border-t border-neutral-200 dark:border-white/5 flex flex-col md:flex-row justify-between gap-8 items-center opacity-50">
            <p className="text-[10px] uppercase tracking-widest text-neutral-600 dark:text-muted-teal">
              {siteConfig.footer.copyright}
            </p>
            <div className="flex gap-8">
              {siteConfig.socials.github && (
                <a
                  className="text-[10px] uppercase tracking-widest text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {siteConfig.socials.linkedin && (
                <a
                  className="text-[10px] uppercase tracking-widest text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              )}
              {siteConfig.socials.twitter && (
                <a
                  className="text-[10px] uppercase tracking-widest text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
