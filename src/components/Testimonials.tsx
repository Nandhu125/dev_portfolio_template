"use client";

import Image from 'next/image';
import { useState, useCallback } from 'react';

const testimonials = [
    {
        id: 1,
        quote: "One of the most talented engineers I've worked with. The attention to detail and performance optimization is unmatched.",
        author: "Sarah Chen",
        role: "CTO @ TechFlow",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAd9CBkcuWS_MdeG8H0e3eRriFfSJ-ulcZQc_ab0GhUFMqii11c9jKWTM-YS-Od5iZNPSDsWDYh6asdQn0KVCI_EpW7l1MTjfVmHOl4RPqFHb8JVfFCOmMQW4xZNagPyHmiTCkCA-Nhv7iVn02PQDOxAjmcXyxnOKpW6kOTBuiWuRPL-Q77xzh-Y_sKGupSzZLj83a9LjGjwh7JHPVbK2CfySK0Ks6RbOg4TUTBix2kbgLY78GD4FeLiEdZ0JiIWbe5qYtTtA5WEsTm"
    },
    {
        id: 2,
        quote: "Transformed our clunky MVP into a world-class product. The user experience improved dramatically, leading to a 200% increase.",
        author: "Mark Davis",
        role: "Product Lead @ Nexus",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrhT1dvcBvI5LnFyDiSbOu-FoS7EPuGSqhtZxX7kEJ6Z4aFkrsAUSC9OFomKhDHcm538ulFicXlEf-QO0K-h5_V4tX6ZQBftCOKJajp5196XvkS4qAg7J1BNOTh8MnVQ-xalti6b1ubS4T9njBgjU3rdhmP9u8oPMADJMVYhQpvolF3_HX2HwC8Cm5twE6Dy6jaN4NwTtPX4s32TELuwbfGp0qGanx4AQido68B2JMx3CGtukmy-4DrFnIdpTpoGM3lFf1CFYForBk"
    },
    {
        id: 3,
        quote: "Exceptional code quality and communication. Delivered ahead of schedule and exceeded all our technical requirements.",
        author: "Elena Rodriguez",
        role: "Founder @ Spark",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmg0LaKNDGc7jIUU1kiV9MUtyxFaBDuvy92BmOnhaue0Mu9_U7kSBMN9PPNXpxweRY8jvdq3qCSnlIWCRyiyD2-umm9WiryAKV_JwrZDxmKJEFL0AR_V4rwPbBywGMpvnn9RNxPiUNEeVKK-9zJzngxR3JoLk0GdTwuar9V3LRPCG480cuytcBttyx9s7E3JjI_-CeYk6WX1cQ0NWjBsPVFSeYLjbga4QNBQ4h28JdjwkZAB8aGTghuxVNFaAsC9U4_rQ4oF4QGwpx"
    },
    {
        id: 4,
        quote: "A true master of their craft. The way they handle complex state management while keeping the UI buttery smooth is impressive.",
        author: "Alex Thompson",
        role: "Engineering Manager @ Bloom",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0KDOGYbOJMOj453gipSj9VCU8CZlqHkqyRV02ugAiA-2-NZemXTxFx925f0zDk7ImhiUX83vPrbckXQVbvWGNoL_i0VVDXwaDP_KznZv4j09celLtjIV5bohg-t5tvTP578DOLj0R2vXJvWHPXlRIMS4ImtoycI5pvrFD5osNqXtjRUikVItRHRRrciVTcVq6Mkc8bTOKHmKqS4q7lvuyOqRfEnJrREc0vdCk_07ih_Ul2yqWCnwyvePGKMXrybuKhPZcQ3DR_MU2"
    }
];

// Pure CSS transitions - No GSAP needed
export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const active = testimonials[currentIndex];
    const nextIndex = (currentIndex + 1) % testimonials.length;

    const handleSlide = useCallback((direction: 'next' | 'prev') => {
        if (isAnimating) return;
        setIsAnimating(true);

        // CSS transitions handle the animation
        setTimeout(() => {
            if (direction === 'next') {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            } else {
                setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
            }
            setIsAnimating(false);
        }, 400);
    }, [isAnimating]);

    return (
        <section className="relative py-16 md:py-32 overflow-hidden bg-white dark:bg-transparent scroll-reveal">

            <div className="container mx-auto px-6 max-w-[1280px]">
                {/* Header */}
                <div className="mb-12 md:mb-20">
                    <span className="text-primary font-mono font-bold tracking-widest text-xs uppercase mb-4 block">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        Trusted by industry leaders.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">

                    {/* Visual Side (Left) - Sticky Stack Effect */}
                    <div className="lg:col-span-5 relative h-[350px] md:h-[600px] w-full max-w-[400px] lg:max-w-none mx-auto lg:mx-0">

                        {/* Background Layer (Previous Image hint) */}
                        <div
                            className="absolute top-4 left-4 right-[-1rem] bottom-[-1rem] bg-neutral-100 dark:bg-white/5 rounded-2xl overflow-hidden opacity-50 z-0"
                        >
                            <Image
                                src={testimonials[nextIndex].image}
                                alt="Previous"
                                fill
                                className="object-cover grayscale opacity-30"
                                loading="lazy"
                            />
                        </div>

                        {/* Main Image Card - Pure CSS transitions */}
                        <div
                            className={`relative w-full h-full rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-900 z-10 shadow-2xl shadow-black/20 transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                                }`}
                        >
                            <Image
                                src={active.image}
                                alt={active.author}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                loading="lazy"
                            />

                            {/* Overlay info */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/80 to-transparent text-white">
                                <div className="flex gap-1 text-primary mb-2">
                                    {[1, 2, 3, 4, 5].map(s => (
                                        <span key={s} className="material-symbols-outlined text-lg fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    ))}
                                </div>
                                <p className="font-mono text-xs uppercase tracking-widest text-white/80">
                                    Verified Client
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content Side (Right) */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full py-4 relative">

                        {/* Quote Content - Pure CSS transitions */}
                        <div className={`relative z-10 transition-all duration-400 ease-out ${isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
                            }`}>
                            <span className="text-9xl text-neutral-100 dark:text-white/5 font-serif absolute -top-12 -left-8 select-none -z-10">
                                &ldquo;
                            </span>

                            <blockquote className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-neutral-900 dark:text-white mb-8 md:mb-12">
                                {active.quote}
                            </blockquote>

                            <div className="flex items-center gap-6">
                                <div className="w-12 h-px bg-neutral-300 dark:bg-white/20"></div>
                                <div>
                                    <h4 className="text-xl font-bold text-neutral-900 dark:text-white">
                                        {active.author}
                                    </h4>
                                    <p className="text-neutral-500 dark:text-neutral-400 font-mono text-xs uppercase tracking-wider mt-1">
                                        {active.role}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-4 mt-10 justify-center md:mt-20">
                            <button
                                onClick={() => handleSlide('prev')}
                                className="w-14 h-14 rounded-full cursor-pointer border border-neutral-200 dark:border-white/10 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors group"
                                disabled={isAnimating}
                            >
                                <span className="material-symbols-outlined text-neutral-900 dark:text-white transition-transform">
                                    arrow_back
                                </span>
                            </button>

                            <div className="flex-1 max-w-[120px] h-px bg-neutral-200 dark:bg-white/10 relative overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-primary origin-left transition-transform duration-500"
                                    style={{ transform: `scaleX(${(currentIndex + 1) / testimonials.length})` }}
                                />
                            </div>

                            <button
                                onClick={() => handleSlide('next')}
                                className="w-14 h-14 rounded-full border cursor-pointer border-neutral-200 dark:border-white/10 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors group"
                                disabled={isAnimating}
                            >
                                <span className="material-symbols-outlined text-neutral-900 dark:text-white transition-transform">
                                    arrow_forward
                                </span>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
