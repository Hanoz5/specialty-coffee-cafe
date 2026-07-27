import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "size"> {
  label: string;
  name: string;
  error?: string;
  /** Fixed visual prefix inside the field, e.g. "+91" for a phone number. */
  prefix?: string;
  containerClassName?: string;
}

export function Input({ label, name, id, error, prefix, required, containerClassName, ...rest }: InputProps) {
  const inputId = id ?? name;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className={cn("flex flex-col gap-1.5", containerClassName)}>
      <label htmlFor={inputId} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-error"> *</span>}
      </label>
      <div
        className={cn(
          "flex h-11 items-center gap-2 rounded-md border bg-neutral-50 px-4 transition-colors",
          "focus-within:ring-2 focus-within:ring-focus-ring focus-within:border-secondary-500",
          error ? "border-error bg-error-bg" : "border-neutral-300 hover:border-neutral-400",
        )}
      >
        {prefix && <span className="shrink-0 text-base text-neutral-500">{prefix}</span>}
        <input
          id={inputId}
          name={name}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          aria-required={required || undefined}
          className={cn(
            "h-full flex-1 bg-transparent text-base text-foreground outline-none",
            "placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:text-neutral-400",
          )}
          {...rest}
        />
      </div>
      {error && (
        <p id={errorId} className="text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}
