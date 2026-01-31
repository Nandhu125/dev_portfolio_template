import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact | DEV PORTFOLIO",
  description: "Get in touch for web development projects and consulting inquiries.",
  openGraph: {
    title: "Contact | DEV PORTFOLIO",
    description: "Let's build something extraordinary together.",
    url: `${siteConfig.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}