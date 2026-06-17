import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        bg-white/80
        backdrop-blur-md
        border
        border-white/50
        shadow-lg
        rounded-3xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}