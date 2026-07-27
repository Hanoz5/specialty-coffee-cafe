import { Select } from "@/components/ui/Select";
import { daysInMonth } from "@/lib/validation";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export interface DateValue {
  day: number;
  month: number;
  year: number;
}

export interface DateSelectProps {
  value: Partial<DateValue>;
  onChange: (value: Partial<DateValue>) => void;
  error?: string;
}

export function DateSelect({ value, onChange, error }: DateSelectProps) {
  const currentYear = new Date().getFullYear();
  const yearOptions = [currentYear, currentYear + 1].map((year) => ({ value: year, label: String(year) }));
  const monthOptions = MONTHS.map((label, i) => ({ value: i + 1, label }));
  const maxDay = value.month && value.year ? daysInMonth(value.month, value.year) : 31;
  const dayOptions = Array.from({ length: maxDay }, (_, i) => ({ value: i + 1, label: String(i + 1) }));

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-foreground">
        Preferred Date <span className="text-error">*</span>
      </span>
      <div className="grid grid-cols-3 gap-3">
        <Select
          label="Day"
          name="day"
          hideLabel
          options={dayOptions}
          value={value.day ?? ""}
          onChange={(e) => onChange({ ...value, day: Number(e.target.value) })}
        />
        <Select
          label="Month"
          name="month"
          hideLabel
          options={monthOptions}
          value={value.month ?? ""}
          onChange={(e) => onChange({ ...value, month: Number(e.target.value) })}
        />
        <Select
          label="Year"
          name="year"
          hideLabel
          options={yearOptions}
          value={value.year ?? ""}
          onChange={(e) => onChange({ ...value, year: Number(e.target.value) })}
        />
      </div>
      <p className="text-xs text-neutral-500">DD / MM / YYYY</p>
      {error && <p className="text-sm text-error">{error}</p>}
    </div>
  );
}
