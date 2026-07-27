"use server";

import { formatDate, formatTime, hasErrors, validateReservation } from "@/lib/validation";
import type { ReservationInput, ReservationResult } from "@/lib/types";

export async function submitReservation(input: ReservationInput): Promise<ReservationResult> {
  // Never trust client-only validation — re-run the same checks server-side.
  const errors = validateReservation(input);
  if (hasErrors(errors)) {
    return { ok: false, errors };
  }

  // No database or SMS/email service is wired up yet — this is the seam a
  // real backend would slot into. Log server-side so the request isn't
  // silently dropped in the meantime.
  console.log(
    `[reservation] ${input.name} · party of ${input.partySize} · +91 ${input.phone} · ` +
      `${formatDate(input.day, input.month, input.year)} at ${formatTime(input.hour, input.minute, input.period)}`,
  );

  const confirmationId = `DR-${Date.now().toString(36).toUpperCase()}`;
  return { ok: true, confirmationId };
}
