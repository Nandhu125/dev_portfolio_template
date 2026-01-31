interface ArrowIconProps {
  direction?: "left" | "right" | "diagonal";
  className?: string;
}

export default function ArrowIcon({ direction = "right", className = "" }: ArrowIconProps) {
  if (direction === "diagonal") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`inline-block transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${className}`}
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    );
  }

  const isLeft = direction === "left";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12" className={`inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 ${isLeft ? "rotate-180" : ""} ${className}`}><path fill="currentColor" d="M1.5 6a.75.75 0 0 1 .75-.75h5.94L6.22 3.28a.75.75 0 0 1 1.06-1.06l3.25 3.25a.75.75 0 0 1 0 1.06L7.28 9.78a.75.75 0 0 1-1.06-1.06l1.97-1.97H2.25A.75.75 0 0 1 1.5 6" /></svg>
  );
}
