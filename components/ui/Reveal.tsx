"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger this reveal behind siblings — milliseconds, applied as a transition-delay. */
  delayMs?: number;
  /**
   * "base" (400ms, default) for ordinary section/card content; "slow" (900ms) for hero entrance
   * and category-intro reveals specifically — see style-guide.md §8's duration table.
   */
  speed?: "base" | "slow";
}

const SPEED_CLASS: Record<NonNullable<RevealProps["speed"]>, string> = {
  base: "duration-[var(--duration-base)]",
  slow: "duration-[var(--duration-slow)]",
};

/**
 * Fades + rises content into view on first scroll intersection. No-ops entirely under
 * prefers-reduced-motion (content renders at its resting state immediately) — see
 * Docs/Design/style-guide.md §8.
 */
export function Reveal({ children, className, delayMs = 0, speed = "base" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-[var(--ease-standard)]",
        SPEED_CLASS[speed],
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
