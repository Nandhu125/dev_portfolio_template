"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";
import ArrowIcon from "@/components/ArrowIcon";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FormData {
  name: string;
  email: string;
  project: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  project?: string;
  message?: string;
}

export default function ContactClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }));
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  /**
   * GSAP Animation Context
   * Handles entrance animations for the contact form and info elements.
   * Cleaned up on unmount to prevent memory leaks.
   */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2,
      });

      // Decorative line expansion
      gsap.from(".reveal-line", {
        scaleX: 0,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.5,
        transformOrigin: "left center",
      });

      // Form fields cascade
      gsap.from(".form-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.8,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
        },
      });

      // Contact info side panel
      gsap.from(".info-item", {
        x: -20,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return undefined;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email";
        return undefined;
      case "project":
        if (!value) return "Please select a project type";
        return undefined;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10) return "Message must be at least 10 characters";
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const fieldName = name as keyof FormData;
    if (touched[fieldName] && errors[fieldName]) {
      const error = validateField(fieldName, value);
      setErrors((prev) => ({ ...prev, [fieldName]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, email: true, project: true, message: true });
      return;
    }

    setFormState("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState("success");
      setTimeout(() => {
        setFormState("idle");
        setFormData({ name: "", email: "", project: "", message: "" });
        setTouched({});
        setErrors({});
      }, 3000);
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  const inputBaseClass = "w-full bg-transparent py-4 text-xl text-[#121212] dark:text-white outline-none border-none ring-0 focus:outline-none focus:ring-0 focus:border-none transition-all duration-300 placeholder:text-neutral-400 dark:placeholder:text-neutral-600";

  const projectTypes = [
    {
      value: "web-dev",
      label: "Web Development",
      icon: "code",
    },
    {
      value: "design",
      label: "UI/UX Design",
      icon: "palette",
    },
    {
      value: "consulting",
      label: "Consulting",
      icon: "groups",
    },
    {
      value: "other",
      label: "Other",
      icon: "more_horiz",
    },
  ];

  const getUnderlineClass = (fieldName: keyof FormData, isFocused: boolean) => {
    const hasError = touched[fieldName] && errors[fieldName];
    if (hasError) return "bg-red-400";
    if (isFocused) return "bg-primary scale-x-100";
    return "bg-neutral-300 dark:bg-white/20";
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white dark:bg-[#0a0a0a] pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12 md:mb-32">
          <div className="overflow-hidden">
            <p className="reveal-text text-primary text-xs font-mono font-bold uppercase tracking-[0.3em] mb-4">
              Get in Touch
            </p>
          </div>
          <div className="overflow-hidden">
            <h1 className="reveal-text text-5xl md:text-7xl lg:text-[100px] font-bold text-[#121212] dark:text-white leading-[0.9] tracking-tighter mb-8">
              Let&apos;s start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-muted-teal">
                conversation.
              </span>
            </h1>
          </div>
          <div className="overflow-hidden max-w-2xl">
            <p className="reveal-text text-neutral-600 dark:text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
              Have a project in mind? I&apos;m currently accepting new projects and consulting
              engagements for {siteConfig.availabilityPeriod}.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-4 space-y-8 lg:space-y-12">
            <div className="w-full h-px bg-neutral-200 dark:bg-white/10 reveal-line mb-8" />

            <div className="info-item">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-4">Email</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-2xl text-[#121212] dark:text-white hover:text-primary transition-colors font-medium block"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="info-item">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-4">Location</h3>
              <p className="text-xl text-[#121212] dark:text-white font-light">{siteConfig.location}</p>
              <p className="text-sm text-neutral-500 mt-2 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Local time: {time || "Loading..."}
              </p>
            </div>

            <div className="info-item">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-4">Socials</h3>
              <div className="flex flex-col gap-3 w-fit">
                {Object.entries(siteConfig.socials).map(([platform, url]) => (
                  url && (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#121212] dark:text-white hover:text-primary transition-colors duration-300 flex items-center gap-3 group"
                    >
                      <span className="capitalize text-lg">{platform}</span>
                      <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 duration-300 -translate-x-2 group-hover:translate-x-0 transition-all">
                        arrow_outward
                      </span>
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-8">
            <div className="w-full h-px bg-neutral-200 dark:bg-white/10 reveal-line mb-12" />

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {/* Name Field */}
                <div className="form-item space-y-2 group">
                  <label htmlFor="name" className={`text-xs font-mono uppercase tracking-widest transition-colors duration-300 ${errors.name && touched.name ? "text-red-400" : "text-neutral-500 group-focus-within:text-primary"
                    }`}>
                    01 / Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputBaseClass}
                      placeholder="John Doe"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-300 dark:bg-white/20" />
                    <div className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-500 origin-left scale-x-0 group-focus-within:scale-x-100 ${errors.name && touched.name ? "bg-red-400 scale-x-100" : "bg-primary"
                      }`} />
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${errors.name && touched.name ? "max-h-6 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-red-400 text-xs pt-1">{errors.name}</p>
                  </div>
                </div>

                {/* Email Field */}
                <div className="form-item space-y-2 group">
                  <label htmlFor="email" className={`text-xs font-mono uppercase tracking-widest transition-colors duration-300 ${errors.email && touched.email ? "text-red-400" : "text-neutral-500 group-focus-within:text-primary"
                    }`}>
                    02 / Email
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputBaseClass}
                      placeholder="john@example.com"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-300 dark:bg-white/20" />
                    <div className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-500 origin-left scale-x-0 group-focus-within:scale-x-100 ${errors.email && touched.email ? "bg-red-400 scale-x-100" : "bg-primary"
                      }`} />
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${errors.email && touched.email ? "max-h-6 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-red-400 text-xs pt-1">{errors.email}</p>
                  </div>
                </div>
              </div>

              {/* Project Type Field - Custom Dropdown */}
              <div className="form-item space-y-2 group relative z-50" ref={dropdownRef}>
                <label htmlFor="project" className={`text-xs font-mono uppercase tracking-widest transition-colors duration-300 ${errors.project && touched.project ? "text-red-400" : "text-neutral-500 group-focus-within:text-primary"
                  }`}>
                  03 / Project Type
                </label>
                <div className="relative">
                  {/* Custom Dropdown Trigger */}
                  <button
                    type="button"
                    onClick={() => {
                      setIsDropdownOpen(!isDropdownOpen);
                      if (!touched.project) {
                        setTouched(prev => ({ ...prev, project: true }));
                      }
                    }}
                    className="w-full cursor-pointer bg-transparent py-4 text-xl text-left outline-none flex items-center justify-between group/trigger"
                  >
                    <span className={formData.project ? "text-[#121212] dark:text-white" : "text-neutral-400 dark:text-neutral-600"}>
                      {formData.project
                        ? projectTypes.find(p => p.value === formData.project)?.label
                        : "Select a service..."}
                    </span>
                    <span className={`material-symbols-outlined text-neutral-400 text-xl transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""
                      }`}>
                      expand_more
                    </span>
                  </button>

                  {/* Custom Dropdown Menu */}
                  <div className={`absolute top-full left-0 right-0 mt-2 bg-white/80 dark:bg-[#121212]/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-neutral-200 dark:border-white/10 overflow-hidden z-50 transition-all duration-300 origin-top ${isDropdownOpen
                    ? "opacity-100 scale-y-100 translate-y-0"
                    : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                    }`}>
                    <div className="p-2">
                      {projectTypes.map((type, index) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, project: type.value }));
                            setIsDropdownOpen(false);
                            const error = validateField("project", type.value);
                            setErrors(prev => ({ ...prev, project: error }));
                          }}
                          className={`w-full cursor-pointer flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 group/item ${formData.project === type.value
                            ? "bg-primary/10 dark:bg-white/5 shadow-inner"
                            : "hover:bg-neutral-100 dark:hover:bg-white/5"
                            }`}
                          style={{
                            transitionDelay: isDropdownOpen ? `${index * 30}ms` : "0ms"
                          }}
                        >
                          {/* Icon */}
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${formData.project === type.value
                            ? "bg-primary text-white shadow-lg shadow-primary/25 scale-110"
                            : "bg-neutral-100 dark:bg-white/10 text-neutral-500 dark:text-neutral-400 group-hover/item:bg-neutral-200 dark:group-hover/item:bg-white/20 group-hover/item:text-[#121212] dark:group-hover/item:text-white group-hover/item:scale-110"
                            }`}>
                            <span className="material-symbols-outlined text-xl">
                              {type.icon}
                            </span>
                          </div>

                          {/* Label */}
                          <span className="text-base font-medium text-[#121212] dark:text-white flex-grow text-left">
                            {type.label}
                          </span>

                          {/* Selected indicator */}
                          {formData.project === type.value && (
                            <span className="material-symbols-outlined text-primary text-xl animate-in zoom-in spin-in-90 duration-300">
                              check_circle
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Underline animations */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-300 dark:bg-white/20" />
                  <div className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-500 origin-left ${errors.project && touched.project ? "bg-red-400 scale-x-100" : isDropdownOpen ? "bg-primary scale-x-100" : "scale-x-0"
                    }`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${errors.project && touched.project ? "max-h-6 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-red-400 text-xs pt-1">{errors.project}</p>
                </div>
              </div>

              {/* Message Field */}
              <div className="form-item space-y-2 group">
                <label htmlFor="message" className={`text-xs font-mono uppercase tracking-widest transition-colors duration-300 ${errors.message && touched.message ? "text-red-400" : "text-neutral-500 group-focus-within:text-primary"
                  }`}>
                  04 / Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`${inputBaseClass} resize-none border-none`}
                    placeholder="Tell me about your project..."
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-300 dark:bg-white/20" />
                  <div className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-500 origin-left scale-x-0 group-focus-within:scale-x-100 ${errors.message && touched.message ? "bg-red-400 scale-x-100" : "bg-primary"
                    }`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${errors.message && touched.message ? "max-h-6 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-red-400 text-xs pt-1">{errors.message}</p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-item pt-4 flex flex-col gap-4">
                <button
                  type="submit"
                  disabled={formState === "submitting" || formState === "success"}
                  className={`group relative px-10 py-5 font-bold text-lg rounded-full overflow-hidden transition-all duration-300 disabled:opacity-50 ${formState === "error"
                    ? "bg-red-500 text-white"
                    : "bg-primary text-white hover:brightness-110"
                    }`}
                >
                  <span className={`relative z-10 flex items-center justify-center gap-2 ${formState === "submitting" ? "opacity-0" : "opacity-100"}`}>
                    {formState === "success" && "Message Sent!"}
                    {formState === "error" && "Failed to send. Try again."}
                    {(formState === "idle" || formState === "submitting") && "Send Message"}
                    {formState === "idle" && <ArrowIcon className="text-xl" />}
                    {formState === "success" && <span className="material-symbols-outlined text-xl">check</span>}
                    {formState === "error" && <span className="material-symbols-outlined text-xl">error</span>}
                  </span>

                  {formState === "submitting" && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                </button>

                {formState === "error" && (
                  <p className="text-red-500 text-sm">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-muted-teal/5 rounded-full blur-[100px] mix-blend-screen" />
      </div>
    </div>
  );
}
