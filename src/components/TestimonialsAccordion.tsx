"use client";

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const testimonials = [
    {
        id: "01",
        quote: "One of the most talented engineers I've worked with. The attention to detail and performance optimization is unmatched.",
        author: "Sarah Chen",
        role: "CTO @ TechFlow",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAd9CBkcuWS_MdeG8H0e3eRriFfSJ-ulcZQc_ab0GhUFMqii11c9jKWTM-YS-Od5iZNPSDsWDYh6asdQn0KVCI_EpW7l1MTjfVmHOl4RPqFHb8JVfFCOmMQW4xZNagPyHmiTCkCA-Nhv7iVn02PQDOxAjmcXyxnOKpW6kOTBuiWuRPL-Q77xzh-Y_sKGupSzZLj83a9LjGjwh7JHPVbK2CfySK0Ks6RbOg4TUTBix2kbgLY78GD4FeLiEdZ0JiIWbe5qYtTtA5WEsTm",
    },
    {
        id: "02",
        quote: "Transformed our clunky MVP into a world-class product. The user experience improved dramatically, leading to a 200% increase in retention.",
        author: "Mark Davis",
        role: "Product Lead @ Nexus",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrhT1dvcBvI5LnFyDiSbOu-FoS7EPuGSqhtZxX7kEJ6Z4aFkrsAUSC9OFomKhDHcm538ulFicXlEf-QO0K-h5_V4tX6ZQBftCOKJajp5196XvkS4qAg7J1BNOTh8MnVQ-xalti6b1ubS4T9njBgjU3rdhmP9u8oPMADJMVYhQpvolF3_HX2HwC8Cm5twE6Dy6jaN4NwTtPX4s32TELuwbfGp0qGanx4AQido68B2JMx3CGtukmy-4DrFnIdpTpoGM3lFf1CFYForBk",
    },
    {
        id: "03",
        quote: "Exceptional code quality and communication. Delivered ahead of schedule and exceeded all our technical requirements.",
        author: "Elena Rodriguez",
        role: "Founder @ Spark",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmg0LaKNDGc7jIUU1kiV9MUtyxFaBDuvy92BmOnhaue0Mu9_U7kSBMN9PPNXpxweRY8jvdq3qCSnlIWCRyiyD2-umm9WiryAKV_JwrZDxmKJEFL0AR_V4rwPbBywGMpvnn9RNxPiUNEeVKK-9zJzngxR3JoLk0GdTwuar9V3LRPCG480cuytcBttyx9s7E3JjI_-CeYk6WX1cQ0NWjBsPVFSeYLjbga4QNBQ4h28JdjwkZAB8aGTghuxVNFaAsC9U4_rQ4oF4QGwpx",
    },
    {
        id: "04",
        quote: "A true master of their craft. The way they handle complex state management while keeping the UI buttery smooth is impressive.",
        author: "Alex Thompson",
        role: "Engineering Manager @ Bloom",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0KDOGYbOJMOj453gipSj9VCU8CZlqHkqyRV02ugAiA-2-NZemXTxFx925f0zDk7ImhiUX83vPrbckXQVbvWGNoL_i0VVDXwaDP_KznZv4j09celLtjIV5bohg-t5tvTP578DOLj0R2vXJvWHPXlRIMS4ImtoycI5pvrFD5osNqXtjRUikVItRHRRrciVTcVq6Mkc8bTOKHmKqS4q7lvuyOqRfEnJrREc0vdCk_07ih_Ul2yqWCnwyvePGKMXrybuKhPZcQ3DR_MU2",
    },
];

export default function TestimonialsAccordion() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section className="py-24 bg-neutral-950 text-white overflow-hidden relative" ref={containerRef}>
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-8 lg:gap-16">

                {/* Header Section (Static Side) */}
                <div className="md:w-1/3 pt-8 pb-12 md:py-12 flex flex-col justify-between h-[600px] sticky top-24">
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="h-px w-12 bg-primary"></span>
                            <span className="text-primary font-mono text-sm tracking-widest uppercase">Client Feedback</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tighter mb-8 font-['Syne']">
                            Voices of <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-neutral-200 to-neutral-600">Success.</span>
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-sm leading-relaxed">
                            Real stories from technical leaders and founders about our collaboration.
                        </p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="hidden md:flex gap-2">
                        {testimonials.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1 flex-1 rounded-full transition-all duration-500 ${idx === activeIndex ? 'bg-primary' : 'bg-neutral-800'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Accordion / Gallery (Interactive Side) */}
                <div className="md:w-2/3 flex flex-col gap-4 h-[600px]">
                    {testimonials.map((item, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div
                                key={index}
                                onMouseEnter={() => handleMouseEnter(index)}
                                className={`relative rounded-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer border border-white/5 group ${isActive ? 'flex-grow-[3] opacity-100' : 'flex-grow-[1] opacity-60 hover:opacity-80'}`}
                            >
                                {/* Background Image (Darkened) */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={item.image}
                                        alt={item.author}
                                        fill
                                        className={`object-cover transition-transform duration-1000 ${isActive ? 'scale-105 grayscale-0' : 'scale-100 grayscale'}`}
                                    />
                                    <div className={`absolute inset-0 bg-neutral-900/40 transition-opacity duration-500 ${isActive ? 'opacity-60' : 'opacity-80'}`} />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                                </div>

                                {/* Content Layer */}
                                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                                    {/* Top Row: ID & Status */}
                                    <div className="flex justify-between items-start">
                                        <span className={`font-mono text-xl md:text-2xl font-bold tracking-tighter transition-colors ${isActive ? 'text-white' : 'text-neutral-500'}`}>
                                            {item.id}
                                        </span>
                                        <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-primary animate-pulse' : 'bg-neutral-600'}`} />
                                    </div>

                                    {/* Bottom Content (Only visible when active or compact view) */}
                                    <div className={`transform transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-50'}`}>
                                        {isActive && (
                                            <div className="mb-6 overflow-hidden">
                                                <p className="text-xl md:text-3xl font-medium leading-normal text-white/95 animate-slide-up">
                                                    &quot;{item.quote}&quot;
                                                </p>
                                            </div>
                                        )}

                                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-t border-white/10 pt-6">
                                            <div>
                                                <h3 className={`text-xl font-bold ${isActive ? 'text-white' : 'text-neutral-300'}`}>{item.author}</h3>
                                                <p className="text-primary font-mono text-xs uppercase tracking-wider">{item.role}</p>
                                            </div>

                                            {isActive && (
                                                <div className="flex gap-1 text-primary">
                                                    {[1, 2, 3, 4, 5].map((s) => (
                                                        <span key={s} className="material-symbols-outlined text-sm">star</span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
