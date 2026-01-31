"use client";

import Image from "next/image";
import { caseStudies } from "@/data/case-studies";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
import ArrowIcon from "@/components/ArrowIcon";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Case Studies Index
 * 
 * Displays a curated list of projects in a magazine-style layout.
 * Uses GSAP ScrollTrigger for revealing project cards on scroll.
 */
export default function CaseStudiesIndexPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header entrance animations
    if (headerRef.current) {
      const elements = headerRef.current.querySelectorAll(".header-animate");
      gsap.set(elements, { opacity: 0, y: 60 });
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2,
      });
    }

    // Staggered reveal for project cards visible in viewport
    if (projectsRef.current) {
      const cards = projectsRef.current.querySelectorAll(".project-entry");
      cards.forEach((card, index) => {
        gsap.set(card, { opacity: 0, y: 80 });
        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: index * 0.08,
              ease: "power3.out",
            });
          },
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute left-[8%] top-0 bottom-0 w-px bg-neutral-200 dark:bg-white/[0.03]" />
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-neutral-200 dark:bg-white/[0.03]" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-white/[0.03]" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-neutral-200 dark:bg-white/[0.03]" />
        <div className="absolute right-[8%] top-0 bottom-0 w-px bg-neutral-200 dark:bg-white/[0.03]" />
      </div>

      <main id="main-content" className="relative z-10">
        <section
          ref={headerRef}
          className="min-h-[70vh] flex flex-col justify-end pb-10 md:pb-24 pt-20 md:pt-32"
        >
          <div className="max-w-[1280px] mx-auto px-6 w-full">
            <div className="header-animate flex items-center gap-6 mb-8">
              <span className="text-[120px] md:text-[180px] lg:text-[220px] font-bold text-neutral-900/[0.04] dark:text-white/[0.04] leading-none select-none absolute -left-4 md:left-0 top-24 md:top-20">
                CS
              </span>
              <div className="relative flex items-center gap-4">
                <div className="w-16 h-px bg-primary" />
                <span className="text-primary text-[10px] font-mono font-bold uppercase tracking-[0.3em]">
                  Selected Works
                </span>
              </div>
            </div>

            <h1 className="header-animate text-5xl sm:text-6xl md:text-7xl lg:text-120px font-bold tracking-tighter leading-[0.85] mb-8">
              <span className="block text-[#121212] dark:text-white">Case</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-muted-teal">
                Studies
              </span>
            </h1>


            <p className="header-animate text-neutral-600 dark:text-neutral-400 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed font-light">
              Deep architectural narratives. Each project tells a story of
              challenges conquered and boundaries pushed.
            </p>


            <div className="header-animate flex flex-wrap gap-12 md:gap-20 mt-12 pt-8 border-t border-neutral-200 dark:border-white/10">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-[#121212] dark:text-white">{caseStudies.length}</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mt-2">Projects</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-[#121212] dark:text-white">15+</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mt-2">
                  Technologies
                </p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-[#121212] dark:text-white">100%</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mt-2">
                  Satisfaction
                </p>
              </div>
            </div>
          </div>
        </section>

        <section ref={projectsRef} className="py-10 md:py-24">
          <div className="max-w-[1280px] mx-auto px-6">
            {caseStudies.map((caseStudy, index) => (
              <Link
                key={caseStudy.slug}
                href={`/works/${caseStudy.slug}`}
                className="project-entry group block mb-16 md:mb-32 last:mb-0"
              >
                <article
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start ${index % 2 === 1 ? "lg:text-right" : ""
                    }`}
                >
                  {/* Project Number */}
                  <div
                    className={`lg:col-span-1 ${index % 2 === 1 ? "lg:order-3" : "lg:order-1"}`}
                  >
                    <span className="text-6xl md:text-8xl font-bold text-neutral-900/[0.06] dark:text-white/[0.06] group-hover:text-primary/20 transition-colors duration-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Image Container */}
                  <div
                    className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-surface-dark">
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

                      {/* Image */}
                      <Image
                        src={caseStudy.heroImage}
                        alt={caseStudy.title}
                        fill
                        className="object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out will-change-transform"
                        sizes="(max-width: 1024px) 95vw, 50vw"
                        priority={index === 0}
                      />

                      {/* Hover Reveal - View CTA */}
                      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="px-8 py-4 bg-[#1f6b75] backdrop-blur-md rounded-full border border-white/20 shadow-2xl flex items-center gap-3 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:scale-105 hover:bg-[#1f6b75]">
                          <span className="text-white text-sm font-semibold tracking-wide">View Case Study</span>
                          <ArrowIcon direction="diagonal" className="text-white" />
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-6 left-6 z-20">
                        <span className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white text-[10px] font-mono font-bold uppercase tracking-widest rounded-full border border-white/10">
                          {caseStudy.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${index % 2 === 1 ? "lg:order-2 lg:items-end" : "lg:order-3"
                      }`}
                  >
                    {/* Title */}
                    <h2
                      className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#121212] dark:text-white group-hover:text-primary transition-colors duration-500 leading-tight ${index % 2 === 1 ? "lg:text-right" : ""
                        }`}
                    >
                      {caseStudy.title}
                    </h2>

                    {/* Description */}
                    <p
                      className={`text-neutral-600 dark:text-neutral-400 leading-relaxed text-base md:text-lg max-w-md ${index % 2 === 1 ? "lg:text-right lg:ml-auto" : ""
                        }`}
                    >
                      {caseStudy.description}
                    </p>

                    {/* Meta Row */}
                    <div
                      className={`flex flex-wrap gap-4 items-center ${index % 2 === 1 ? "lg:justify-end" : ""
                        }`}
                    >
                      <span className="text-primary text-xs font-medium">{caseStudy.role}</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-white/30" />
                      <span className="text-neutral-600 dark:text-neutral-500 text-xs">{caseStudy.timeline}</span>
                    </div>

                    {/* Tech Stack */}
                    <div
                      className={`flex flex-wrap gap-2 pt-4 ${index % 2 === 1 ? "lg:justify-end" : ""
                        }`}
                    >
                      {caseStudy.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-neutral-100 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.06] rounded-lg text-[10px] font-mono uppercase text-neutral-600 dark:text-neutral-400 hover:border-primary/30 hover:text-primary transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Arrow Indicator */}
                    <div
                      className={`flex items-center gap-3 pt-4 ${index % 2 === 1 ? "lg:justify-end lg:flex-row-reverse" : ""
                        }`}
                    >
                      <div className="w-12 h-px bg-primary/50 group-hover:w-20 transition-all duration-500" />
                      <ArrowIcon direction={index % 2 === 1 ? "left" : "right"} className="text-primary text-lg" />
                    </div>
                  </div>
                </article>

                {/* Divider */}
                {index < caseStudies.length - 1 && (
                  <div className="mt-16 md:mt-32 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-white/10 to-transparent" />
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-32">
          <div className="max-w-[1280px] mx-auto px-6 text-center">
            <p className="text-primary text-[10px] font-mono font-bold uppercase tracking-[0.3em] mb-6">
              Ready to Start?
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212] dark:text-white tracking-tight mb-8">
              Let&apos;s build something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-muted-teal">
                extraordinary
              </span>
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-bold rounded-full hover:brightness-110 transition-all group"
            >
              Start a Project
              <ArrowIcon className="text-lg" />
            </Link>
          </div>
        </section>
      </main>

      <Footer className="px-6 md:px-12 lg:px-20" />
    </>
  );
}
