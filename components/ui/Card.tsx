import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type CardVariant = "surface" | "outlined" | "dark" | "media-overlay";

export interface CardProps {
  variant?: CardVariant;
  image?: { src: string; alt: string };
  imageAspectClassName?: string;
  href?: string;
  className?: string;
  children: ReactNode;
}

const VARIANT_CLASSES: Record<CardVariant, string> = {
  surface: "bg-surface shadow-md",
  outlined: "bg-neutral-50 border border-neutral-200",
  dark: "bg-primary-900 text-neutral-100 shadow-md",
  "media-overlay": "bg-primary-900 shadow-lg",
};

export function Card({
  variant = "surface",
  image,
  imageAspectClassName = "aspect-[4/3]",
  href,
  className,
  children,
}: CardProps) {
  const isMediaOverlay = variant === "media-overlay";
  const Wrapper = href ? Link : "div";
  const wrapperProps = href ? { href } : {};

  return (
    <Wrapper
      {...(wrapperProps as { href: string })}
      className={cn(
        "block overflow-hidden rounded-lg",
        VARIANT_CLASSES[variant],
        href && "transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg",
        href &&
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      {isMediaOverlay ? (
        <div className={cn("relative", imageAspectClassName)}>
          {image && (
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-950/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-neutral-50">{children}</div>
        </div>
      ) : (
        <>
          {image && (
            <div className={cn("relative", imageAspectClassName)}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
          <div className="p-6">{children}</div>
        </>
      )}
    </Wrapper>
  );
}
