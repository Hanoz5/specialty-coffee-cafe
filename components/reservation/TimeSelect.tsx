import { Select } from "@/components/ui/Select";
import { VALID_MINUTES } from "@/lib/validation";
import type { Period } from "@/lib/types";

export interface TimeValue {
  hour: number;
  minute: number;
  period: Period;
}

export interface TimeSelectProps {
  value: Partial<TimeValue>;
  onChange: (value: Partial<TimeValue>) => void;
  error?: string;
}

const HOUR_OPTIONS = Array.from({ length: 12 }, (_, i) => ({ value: i + 1, label: String(i + 1) }));
const MINUTE_OPTIONS = VALID_MINUTES.map((m) => ({ value: m, label: m.toString().padStart(2, "0") }));
const PERIOD_OPTIONS: { value: Period; label: string }[] = [
  { value: "AM", label: "AM" },
  { value: "PM", label: "PM" },
];

export function TimeSelect({ value, onChange, error }: TimeSelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-foreground">
        Preferred Time <span className="text-error">*</span>
      </span>
      <div className="grid grid-cols-3 gap-3">
        <Select
          label="Hour"
          name="hour"
          hideLabel
          options={HOUR_OPTIONS}
          value={value.hour ?? ""}
          onChange={(e) => onChange({ ...value, hour: Number(e.target.value) })}
        />
        <Select
          label="Minute"
          name="minute"
          hideLabel
          options={MINUTE_OPTIONS}
          value={value.minute ?? ""}
          onChange={(e) => onChange({ ...value, minute: Number(e.target.value) })}
        />
        <Select
          label="AM/PM"
          name="period"
          hideLabel
          options={PERIOD_OPTIONS}
          value={value.period ?? ""}
          onChange={(e) => onChange({ ...value, period: e.target.value as Period })}
        />
      </div>
      <p className="text-xs text-neutral-500">12-hour clock</p>
      {error && <p className="text-sm text-error">{error}</p>}
    </div>
  );
}
