"use client";

import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { formatDate, formatTime } from "@/lib/validation";
import type { ReservationInput } from "@/lib/types";

export interface ReservationConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  input: ReservationInput | null;
  confirmationId: string;
}

export function ReservationConfirmation({ isOpen, onClose, input, confirmationId }: ReservationConfirmationProps) {
  if (!input) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="You're on the list" size="sm">
      <p className="text-base text-neutral-700">
        Thanks, {input.name.split(" ")[0]} — we&apos;ve noted your table for {input.partySize}{" "}
        {input.partySize === 1 ? "guest" : "guests"} on{" "}
        <strong className="text-primary-900">{formatDate(input.day, input.month, input.year)}</strong> at{" "}
        <strong className="text-primary-900">{formatTime(input.hour, input.minute, input.period)}</strong>.
      </p>
      <p className="mt-3 text-sm text-neutral-500">
        Reference {confirmationId}. If your plans change, call us at +91 98230 14477 — we hold tables
        for 15 minutes past the hour.
      </p>
      <Button onClick={onClose} className="mt-6 w-full">
        Done
      </Button>
    </Modal>
  );
}
