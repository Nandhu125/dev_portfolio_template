import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Portfolio",
  description:
    "Deep architectural narratives. Each project tells a story of challenges conquered and boundaries pushed.",
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
