import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface SelectOption {
  value: string | number;
  label: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "className"> {
  label: string;
  name: string;
  options: SelectOption[];
  error?: string;
  /** Visually hides the label (kept for screen readers) — for compact multi-select rows like Day/Month/Year. */
  hideLabel?: boolean;
  containerClassName?: string;
}

export function Select({
  label,
  name,
  id,
  options,
  error,
  required,
  hideLabel,
  containerClassName,
  ...rest
}: SelectProps) {
  const selectId = id ?? name;
  const errorId = error ? `${selectId}-error` : undefined;

  return (
    <div className={cn("flex flex-col gap-1.5", containerClassName)}>
      <label htmlFor={selectId} className={cn("text-sm font-medium text-foreground", hideLabel && "sr-only")}>
        {label}
        {required && <span className="text-error"> *</span>}
      </label>
      <select
        id={selectId}
        name={name}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        aria-required={required || undefined}
        className={cn(
          "h-11 rounded-md border bg-neutral-50 px-4 text-base text-foreground outline-none transition-colors",
          "focus:ring-2 focus:ring-focus-ring focus:border-secondary-500",
          "disabled:cursor-not-allowed disabled:text-neutral-400 disabled:bg-neutral-100",
          error ? "border-error bg-error-bg" : "border-neutral-300 hover:border-neutral-400",
        )}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} className="text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}
