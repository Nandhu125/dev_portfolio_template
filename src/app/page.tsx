import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import ArrowIcon from "@/components/ArrowIcon";
import TechStack from "@/components/TechStack";
import { siteConfig } from "@/config/site";
import { caseStudies } from "@/data/case-studies";

// Dynamic imports for below-the-fold components
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="py-32" />,
});

/**
 * Landing Page
 * 
 * Server Component that renders the main sections of the portfolio:
 * - Hero section with 4K abstract visuals
 * - Selected Works grid
 * - Capabilities/Services
 * - Testimonials (Lazy loaded)
 * - Contact CTA
 */
export default function Home() {
  const featuredWorks = caseStudies.slice(0, 4);

  return (
    <>
      <main id="main-content" className="max-w-[1280px] mx-auto px-6">
        <section className="relative min-h-[75vh] grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-24 md:pt-32">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-primary/20 rounded-full blur-[60px] md:blur-[120px] -z-10 opacity-30 pointer-events-none" />

          <div className="md:col-span-6 flex flex-col items-start z-10 w-full">
            <div className="animate-fade-in-up mb-6 flex items-center gap-2 px-3 py-1.5 md:gap-3 md:px-4 md:py-2 bg-neutral-900/5 dark:bg-neutral-100/5 backdrop-blur-sm md:backdrop-blur-md rounded-full border border-neutral-200 dark:border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] md:text-xs font-mono font-medium tracking-widest uppercase text-neutral-600 dark:text-neutral-300">
                {siteConfig.availability}
              </span>
            </div>

            <h1 className="animate-fade-in-up animation-delay-100 font-[family-name:var(--font-heading)] text-5xl md:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tighter mb-10 text-neutral-900 dark:text-neutral-100">
              DIGITAL
              <span className="block text-transparent bg-clip-text bg-linear-to-b from-neutral-800 to-neutral-400 dark:from-neutral-200 dark:to-neutral-600 pb-4">
                REALITY
              </span>
              <span className="block text-xl sm:text-2xl md:text-4xl text-primary dark:text-teal-400 mt-2 font-[family-name:var(--font-display)] font-light tracking-wide">
                ARCHITECT & DEV
              </span>
            </h1>

            <p className="animate-fade-in-up animation-delay-200 text-neutral-600 dark:text-neutral-400 text-base md:text-xl max-w-lg mb-8 md:mb-10 leading-relaxed font-light">
              {siteConfig.description}
            </p>

            <div className="animate-fade-in-up animation-delay-300 flex flex-wrap gap-4 md:gap-6">
              <Link
                href="/works"
                className="group relative px-6 py-3 md:px-8 md:py-4 flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-black font-bold text-sm md:text-lg rounded-full overflow-hidden transition-all whitespace-nowrap"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowIcon className="transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 mix-blend-difference" />
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 md:px-8 md:py-4 flex items-center justify-center bg-transparent border border-neutral-200 dark:border-white/20 text-neutral-900 dark:text-white font-bold text-sm md:text-lg rounded-full hover:bg-neutral-100 dark:hover:bg-white/10 transition-all whitespace-nowrap"
              >
                About Me
              </Link>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-200 md:col-span-6 relative h-full min-h-[400px] flex items-center justify-start perspective-1000">
            <div className="relative w-full aspect-square max-w-[500px]">
              <div className="absolute top-0 md:top-10 right-10 w-48 h-64 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-white/10 p-4 transform rotate-6 hover:rotate-0 transition-transform duration-500 z-10 shadow-2xl shadow-neutral-200/50 dark:shadow-primary/10">
                <div className="w-full h-full bg-neutral-100 dark:bg-neutral-800/50 rounded flex items-center justify-center overflow-hidden">
                  <div className="text-4xl text-neutral-300 dark:text-neutral-700 font-bold">Ui</div>
                </div>
              </div>
              <div className="absolute bottom-0 md:bottom-10 left-10 md:left-10 w-56 h-48 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl rounded-xl border border-neutral-200 dark:border-white/10 p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-20 shadow-2xl shadow-neutral-200/50 dark:shadow-black/50">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="space-y-2 font-mono text-xs text-neutral-500">
                    <div className="flex justify-between"><span className="text-purple-500 dark:text-purple-400">const</span> <span>design</span></div>
                    <div className="pl-4 text-neutral-600 dark:text-neutral-400">IS_ART = <span className="text-orange-500 dark:text-orange-400">true</span>;</div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 m-auto w-48 h-48 md:w-64 md:h-64 bg-gradient-to-tr from-primary to-emerald-500 rounded-full blur-[40px] md:blur-[80px] opacity-40 animate-pulse" />
            </div>
          </div>
        </section>



        <TechStack />

        <section className="py-16 md:py-24">
          <div className="scroll-reveal flex items-end justify-between mb-10 md:mb-16">
            <div className="flex flex-col gap-2">
              <span className="text-primary font-mono font-bold tracking-widest text-xs uppercase">
                Portfolio
              </span>
              <h2 className="text-4xl font-bold tracking-tight">Selected Works</h2>
            </div>
            <div className="hidden md:block text-neutral-500 text-sm max-w-[240px] text-right">
              Focusing on performance, typography, and clean architecture.
            </div>
          </div>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {featuredWorks.map((project, index) => {
              // Layout logic: Large items on index 0 and 3 (0 % 3 === 0, 3 % 3 === 0)
              // But 3 % 3 IS 0. Wait.
              // Logic Check:
              // Index 0: 0 % 3 = 0 -> Large. Correct.
              // Index 1: 1 % 3 = 1 -> Small. Correct.
              // Index 2: 2 % 3 = 2 -> Small. Correct.
              // Index 3: 3 % 3 = 0 -> Large. Correct.
              // So `index % 3 === 0` logic works for the 0,1,2,3 pattern.

              const isLarge = index % 3 === 0;

              return (
                <Link
                  key={project.slug}
                  href={`/works/${project.slug}`}
                  className={`scroll-reveal ${isLarge ? 'md:col-span-8' : 'md:col-span-4'} group cursor-pointer ${index > 0 ? 'animation-delay-100' : ''}`}
                >
                  <div className={`relative ${isLarge ? 'aspect-video' : 'aspect-square'} overflow-hidden rounded-xl bg-[#1E1E1E] mb-6`}>
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-400"
                      sizes={isLarge ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className={`absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isLarge ? 'p-8' : 'p-6'} flex items-end z-10`}>
                      <span className="text-white font-medium flex items-center gap-2">
                        Explore Case Study{" "}
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </span>
                    </div>
                  </div>
                  <div className={isLarge ? "flex justify-between items-start" : ""}>
                    <div>
                      <h3 className={`${isLarge ? 'text-2xl' : 'text-xl'} font-bold mb-2`}>{project.title}</h3>
                      <p className={`text-neutral-500 dark:text-neutral-400 ${isLarge ? '' : 'text-sm'}`}>
                        {project.subtitle}
                      </p>
                    </div>
                    {isLarge && (
                      <div className="flex gap-2">
                        {project.techStack.slice(0, 2).map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-mono font-bold uppercase rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* View All Projects Button */}
          <div className="scroll-reveal flex justify-center mt-16">
            <Link
              href="/works"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:brightness-110 transition-all"
            >
              View All Projects
              <ArrowIcon className="text-xl" />
            </Link>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 md:py-24 border-t border-neutral-200 dark:border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="scroll-reveal">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">
                architecture
              </span>
              <h3 className="text-xl font-bold mb-4">Frontend Architecture</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Crafting modular, scalable frontend systems with React, Next.js, and TypeScript.
                Focus on atomic design and reusable components.
              </p>
            </div>
            <div className="scroll-reveal animation-delay-100">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">
                speed
              </span>
              <h3 className="text-xl font-bold mb-4">Performance Audit</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Optimizing Core Web Vitals, reducing bundle sizes, and implementing edge computing
                solutions to ensure lightning-fast loads.
              </p>
            </div>
            <div className="scroll-reveal animation-delay-200">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">
                database
              </span>
              <h3 className="text-xl font-bold mb-4">System Design</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Designing robust backend infrastructures and API integrations that handle thousands
                of concurrent users without friction.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact CTA */}
        <section
          id="contact"
          className="py-16 md:py-32 flex flex-col items-center text-center"
        >
          <h2 className="scroll-reveal text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Have a project in mind?
          </h2>
          <p className="scroll-reveal animation-delay-100 text-xl text-neutral-500 dark:text-neutral-400 mb-12 max-w-xl">
            I&apos;m currently accepting new projects and consulting engagements for {siteConfig.availabilityPeriod}.
          </p>
          <Link
            href="/contact"
            className="scroll-reveal animation-delay-200 px-12 py-5 bg-primary text-white text-lg font-bold rounded-lg hover:brightness-110 transition-all shadow-lg shadow-primary/20 inline-flex items-center gap-2 group"
          >
            Start a Conversation
            <ArrowIcon className="text-xl" />
          </Link>
        </section>
      </main >

      <Footer />
    </>
  );
}
