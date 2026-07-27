export type MenuCategory =
  | "Hot Coffee"
  | "Cold Coffee"
  | "Tea"
  | "Pastries"
  | "Sandwiches"
  | "Specials";

export const MENU_CATEGORIES: MenuCategory[] = [
  "Hot Coffee",
  "Cold Coffee",
  "Tea",
  "Pastries",
  "Sandwiches",
  "Specials",
];

export interface MenuItem {
  category: MenuCategory;
  name: string;
  description: string;
  price: number;
  badge?: string;
}

export type Period = "AM" | "PM";

export interface ReservationInput {
  name: string;
  partySize: number;
  /** 10 digits, no +91 prefix — the prefix is fixed UI chrome, not part of the value */
  phone: string;
  day: number;
  /** 1–12 */
  month: number;
  year: number;
  /** 1–12, 12-hour clock */
  hour: number;
  /** 0 | 15 | 30 | 45 */
  minute: number;
  period: Period;
}

export type ReservationFieldErrors = Partial<Record<keyof ReservationInput, string>>;

export interface ReservationResult {
  ok: boolean;
  confirmationId?: string;
  errors?: ReservationFieldErrors;
}
