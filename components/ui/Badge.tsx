import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BadgeVariant =
  | "eyebrow"
  | "neutral"
  | "accent"
  | "outline"
  | "scrim"
  | "success"
  | "warning"
  | "error"
  | "info";

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  eyebrow: "bg-transparent text-secondary-600 uppercase px-0",
  neutral: "bg-neutral-200 text-neutral-900 rounded-full px-3 py-1",
  // Uses secondary-600, not the secondary-500 brand anchor: white/cream text on
  // secondary-500 is only 3.3:1 and fails normal-text AA contrast at badge size
  // (see docs/design/components/button.md's Accessibility note for the same fix).
  accent: "bg-secondary-600 text-neutral-100 rounded-full px-3 py-1",
  outline: "bg-neutral-50 text-primary-900 border border-primary-900 rounded-full px-3 py-1",
  // For tags placed directly over photographic media (media-overlay cards):
  // a solid dark backing keeps text legible regardless of what's behind it,
  // unlike a transparent/outline chip which can wash out over a bright patch
  // of the photo.
  scrim: "bg-primary-950/70 text-neutral-50 backdrop-blur-sm rounded-full px-3 py-1",
  success: "bg-success-bg text-success border border-success-border rounded-full px-3 py-1",
  warning: "bg-warning-bg text-warning border border-warning-border rounded-full px-3 py-1",
  error: "bg-error-bg text-error border border-error-border rounded-full px-3 py-1",
  info: "bg-info-bg text-info border border-info-border rounded-full px-3 py-1",
};

export interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

export function Badge({ variant = "neutral", children, className }: BadgeProps) {
  return <span className={cn("inline-flex items-center text-xs", VARIANT_CLASSES[variant], className)}>{children}</span>;
}
