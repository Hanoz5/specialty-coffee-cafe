import type { Period, ReservationFieldErrors, ReservationInput } from "./types";

const PHONE_PATTERN = /^[6-9]\d{9}$/;
export const VALID_MINUTES = [0, 15, 30, 45] as const;
export const MIN_PARTY_SIZE = 1;
export const MAX_PARTY_SIZE = 8;

export function isValidName(name: string): boolean {
  return name.trim().length >= 2;
}

export function isValidPartySize(size: number): boolean {
  return Number.isInteger(size) && size >= MIN_PARTY_SIZE && size <= MAX_PARTY_SIZE;
}

export function isValidPhone(phone: string): boolean {
  return PHONE_PATTERN.test(phone.trim());
}

export function daysInMonth(month: number, year: number): number {
  // month is 1-12; Date's day-0-of-next-month trick returns the last day of `month`.
  return new Date(year, month, 0).getDate();
}

export function isValidCalendarDate(day: number, month: number, year: number): boolean {
  if (!Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(year)) return false;
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > daysInMonth(month, year)) return false;
  return true;
}

export function isValidTime(hour: number, minute: number, period: Period): boolean {
  if (!Number.isInteger(hour) || hour < 1 || hour > 12) return false;
  if (!VALID_MINUTES.includes(minute as (typeof VALID_MINUTES)[number])) return false;
  if (period !== "AM" && period !== "PM") return false;
  return true;
}

/** Converts 12-hour fields to a 24-hour hour value (0-23). */
export function to24Hour(hour: number, period: Period): number {
  const normalized = hour % 12; // 12 -> 0
  return period === "PM" ? normalized + 12 : normalized;
}

export function toDateTime(input: Pick<ReservationInput, "day" | "month" | "year" | "hour" | "minute" | "period">): Date {
  const hour24 = to24Hour(input.hour, input.period);
  return new Date(input.year, input.month - 1, input.day, hour24, input.minute, 0, 0);
}

export function isFutureDateTime(
  input: Pick<ReservationInput, "day" | "month" | "year" | "hour" | "minute" | "period">,
  now: Date = new Date(),
): boolean {
  return toDateTime(input).getTime() > now.getTime();
}

/** Formats a reservation date as DD/MM/YYYY. */
export function formatDate(day: number, month: number, year: number): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(day)}/${pad(month)}/${year}`;
}

/** Formats a reservation time as 12-hour clock, e.g. "7:30 PM". */
export function formatTime(hour: number, minute: number, period: Period): string {
  return `${hour}:${String(minute).padStart(2, "0")} ${period}`;
}

/**
 * Validates a full reservation payload and returns field-level errors.
 * Shared by the client form (inline validation) and the server action
 * (never trust client-only validation — this is re-run server-side).
 */
export function validateReservation(input: ReservationInput, now: Date = new Date()): ReservationFieldErrors {
  const errors: ReservationFieldErrors = {};

  if (!isValidName(input.name)) {
    errors.name = "Enter your name.";
  }

  if (!isValidPartySize(input.partySize)) {
    errors.partySize = `Choose a party size between ${MIN_PARTY_SIZE} and ${MAX_PARTY_SIZE}.`;
  }

  if (!isValidPhone(input.phone)) {
    errors.phone = "Enter a valid 10-digit mobile number.";
  }

  if (!isValidCalendarDate(input.day, input.month, input.year)) {
    errors.day = "That date doesn't exist — check the day and month.";
  }

  if (!isValidTime(input.hour, input.minute, input.period)) {
    errors.hour = "Choose a valid time.";
  }

  if (!errors.day && !errors.hour && !isFutureDateTime(input, now)) {
    errors.day = "Pick a date and time that hasn't passed yet.";
  }

  return errors;
}

export function hasErrors(errors: ReservationFieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
