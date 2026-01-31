

const techStack = [
    {
        name: "React",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#61DAFB]">
                <circle cx="12" cy="12" r="2" fill="currentColor" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(30 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(-30 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(90 12 12)" />
            </svg>
        )
    },
    {
        name: "Next.js",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black dark:text-white">
                <path d="M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525L13.9396 2.50285C13.3138 2.3332 12.6644 2.24357 12 2.24357V22ZM9.66318 20.3705C10.3735 20.7679 11.1685 21 12 21V4.89311L4.89311 21C5.37258 21 5.85206 20.8714 6.30511 20.6186L9.66318 20.3705ZM18.5283 17.0275L9.66318 4.89311L18.5283 17.0275ZM18.5283 17.0275L20.6385 14.3314L20.6385 14.3314L18.5283 17.0275Z" fill="currentColor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 13.6 2.376 15.112 3.044 16.453L13.94 2.503C13.314 2.333 12.665 2.244 12 2.244V2ZM9.663 20.371L18.529 9.023L19.982 10.999L10.337 23.337C10.875 23.638 11.433 23.868 12 24C17.523 24 22 19.523 22 14C22 11.777 21.272 9.728 20.046 8.082L9.663 20.371Z" fill="currentColor" />
                <path d="M16.5 13.5L14.5 11L15 11.5L16.5 13.5Z" fill="currentColor" />
            </svg>
        )
    },
    {
        name: "TypeScript",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#3178C6]">
                <path d="M0 0H24V24H0V0Z" fill="currentColor" fillOpacity="0" />
                <path d="M22 2H2V22H22V2Z" fill="currentColor" />
                <path d="M11.695 12.6109H9.983V19.4629H8.297V12.6109H6.585V11.2339H11.695V12.6109ZM17.436 17.5139C17.436 17.8936 17.3703 18.2163 17.239 18.4819C17.1077 18.7476 16.9207 18.9669 16.678 19.1409C16.4353 19.3149 16.1423 19.4416 15.799 19.5209C15.4557 19.6003 15.071 19.6399 14.645 19.6399C13.8823 19.6399 13.238 19.4976 12.712 19.2129L13.064 17.8989C13.528 18.1516 14.0727 18.2779 14.698 18.2779C15.2673 18.2779 15.6543 18.1829 15.859 17.9929C16.0637 17.8029 16.166 17.5456 16.166 17.2209C16.166 16.8976 16.0827 16.6383 15.916 16.4429C15.7493 16.2476 15.4383 16.0673 14.983 15.9019L14.338 15.6669C13.722 15.4376 13.2573 15.1323 12.944 14.7509C12.6307 14.3696 12.474 13.8949 12.474 13.3269C12.474 12.9236 12.569 12.5566 12.759 12.2259C12.949 11.8953 13.207 11.6169 13.533 11.3909C13.859 11.1649 14.2373 10.9943 14.668 10.8789C15.0987 10.7636 15.549 10.7059 16.018 10.7059C16.6927 10.7059 17.2943 10.8406 17.823 11.1099L17.388 12.3919C16.9247 12.1626 16.4227 12.0479 15.882 12.0479C15.3527 12.0479 14.9787 12.1383 14.76 12.3189C14.5413 12.4996 14.432 12.7449 14.432 13.0549C14.432 13.3443 14.5127 13.5689 14.674 13.7289C14.8353 13.8889 15.1127 14.0436 15.506 14.1929L16.208 14.4539C16.9067 14.7179 17.4333 15.0569 17.788 15.4709C18.1427 15.8849 18.32 16.3929 18.32 16.9949C18.32 17.5163 18.216 17.9863 18.008 18.4049V18.4049Z" fill="white" />
            </svg>
        )
    },
    {
        name: "Node.js",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#339933]">
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="currentColor" />
                <path d="M12 22V12" stroke="white" strokeWidth="2" />
                <path d="M12 12L22 7" stroke="white" strokeWidth="2" />
                <path d="M12 12L2 7" stroke="white" strokeWidth="2" />
            </svg>
        )
    },
    {
        name: "Tailwind",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#06B6D4]">
                <path d="M12.0001 6.5C12.5539 4.31478 14.0888 2.50002 17.5002 2.50002C13.5002 2.50002 12.0001 7.27838 15.5002 9.50002C19.0002 11.7217 19.5002 7.50002 21.5002 7.50002C20.9463 9.68525 19.4114 11.5 16.0001 11.5C20.0001 11.5 21.5002 6.72166 18.0002 4.50002C14.5002 2.27838 14.0002 6.5 12.0001 6.5Z" fill="currentColor" />
                <path d="M6.0001 12.5C6.55389 10.3148 8.08881 8.50002 11.5002 8.50002C7.50016 8.50002 6.0001 13.2784 9.50016 15.5C13.0002 17.7217 13.5002 13.5 15.5002 13.5C14.9463 15.6853 13.4114 17.5 10.0001 17.5C14.0001 17.5 15.5002 12.7217 12.0001 10.5C8.50016 8.27838 8.0001 12.5 6.0001 12.5Z" fill="currentColor" />
            </svg>
        )
    },
    {
        name: "Rust",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
                <circle cx="12" cy="12" r="10" fill="gray" />
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="black" stroke="none" />
                <path d="M21 12L19 12" stroke="white" strokeWidth="2" />
                <path d="M3 12L5 12" stroke="white" strokeWidth="2" />
                <path d="M12 3L12 5" stroke="white" strokeWidth="2" />
                <path d="M12 21L12 19" stroke="white" strokeWidth="2" />
                <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="1.5" />
            </svg>
        )
    },
    {
        name: "Python",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M12 0C6 0 6 3 6 3V6H13V9H4C2 9 0 7 0 12C0 17 2 16 5 16H8V13C8 10 10 10 11 10H16V3C16 0 12 0 12 0Z" fill="#306998" />
                <path d="M12 24C18 24 18 21 18 21V18H11V15H20C22 15 24 17 24 12C24 7 22 8 19 8H16V11C16 14 14 14 13 14H8V21C8 24 12 24 12 24Z" fill="#FFD43B" />
            </svg>
        )
    },
    {
        name: "Figma",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M6 12C6 15.3137 8.68629 18 12 18V12H6Z" fill="#0ACF83" />
                <path d="M6 6C6 9.31371 8.68629 12 12 12H18C18 8.68629 15.3137 6 12 6H6Z" fill="#A259FF" />
                <path d="M6 6C6 2.68629 8.68629 0 12 0H18V6H6Z" fill="#F24E1E" />
                <path d="M6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12V6H12V12H6Z" fillOpacity="0" />
                <circle cx="12" cy="12" r="3" fill="blue" fillOpacity="0" />
                <path d="M12 12V18C15.3137 18 18 15.3137 18 12H12Z" fill="#1ABCFE" />
                <path d="M12 24C10.3431 24 9 22.6569 9 21C9 19.3431 10.3431 18 12 18V24Z" fill="#0ACF83" />
            </svg>
        )
    }
];

export default function TechStack() {
    return (
        <section className="py-20 overflow-hidden bg-transparent dark:bg-transparent">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}} />

            {/* Infinite Marquee - Visible on All Devices */}
            <div
                className="flex relative overflow-hidden w-full select-none cursor-default"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 64px, black calc(100% - 64px), transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 64px, black calc(100% - 64px), transparent)'
                }}
            >
                {/* Animated Marquee Container */}
                <div className="flex items-center w-max whitespace-nowrap will-change-transform animate-marquee">
                    {/* First Iteration */}
                    <div className="flex gap-10 md:gap-16 items-center pl-10 md:pl-16">
                        {techStack.map((tech, index) => (
                            <div
                                key={`1-${index}`}
                                className="flex items-center gap-3 md:gap-4 cursor-pointer text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors duration-300 group"
                            >
                                <div className="w-8 h-8 md:w-12 md:h-12 relative grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-110">
                                    {tech.icon}
                                </div>
                                <span className="text-xl md:text-3xl font-bold tracking-tight">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                    {/* Second Iteration (Duplicate for seamless loop) */}
                    <div className="flex gap-10 md:gap-16 items-center pl-10 md:pl-16">
                        {techStack.map((tech, index) => (
                            <div
                                key={`2-${index}`}
                                className="flex items-center gap-3 md:gap-4 text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors duration-300 group"
                            >
                                <div className="w-8 h-8 md:w-12 md:h-12 relative grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-110">
                                    {tech.icon}
                                </div>
                                <span className="text-xl md:text-3xl font-bold tracking-tight">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
