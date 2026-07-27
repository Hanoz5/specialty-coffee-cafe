import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "accent" | "ghost" | "destructive" | "outline-inverse";
export type ButtonSize = "sm" | "md" | "lg";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-primary-900 text-neutral-100 hover:bg-primary-800 active:bg-primary-950",
  secondary:
    "bg-transparent text-primary-900 border border-primary-900/10 hover:bg-primary-50 active:bg-primary-100",
  accent: "bg-secondary-600 text-neutral-100 hover:bg-secondary-700 active:bg-secondary-800",
  ghost: "bg-transparent text-primary-900 hover:bg-primary-50 active:bg-primary-100",
  destructive: "bg-error text-neutral-100 hover:brightness-95 active:brightness-90",
  // For CTAs placed directly over a photographic/dark hero background.
  "outline-inverse":
    "bg-transparent text-neutral-50 border border-neutral-50/40 hover:bg-neutral-50/10 active:bg-neutral-50/20",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-12 px-5 text-base gap-2",
  lg: "h-14 px-7 text-lg gap-2",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center rounded-full font-medium font-sans whitespace-nowrap " +
  "transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-focus-ring focus-visible:ring-offset-2 disabled:pointer-events-none " +
  "disabled:bg-neutral-200 disabled:text-neutral-400";

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  className?: string;
  children: ReactNode;
}

interface ButtonAsButton
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

interface ButtonAsLink
  extends CommonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> {
  href: string;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function Spinner() {
  return (
    <span
      aria-hidden="true"
      className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
    />
  );
}

export function Button({ variant = "primary", size = "md", loading, className, children, ...rest }: ButtonProps) {
  const classes = cn(BASE_CLASSES, VARIANT_CLASSES[variant], SIZE_CLASSES[size], className);

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  const buttonRest = rest as Omit<ButtonAsButton, "href">;
  return (
    <button
      className={classes}
      disabled={buttonRest.disabled || loading}
      aria-busy={loading || undefined}
      {...buttonRest}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
}
