"use client";

import { useState, useTransition, type FormEvent } from "react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { DateSelect } from "./DateSelect";
import { TimeSelect } from "./TimeSelect";
import { ReservationConfirmation } from "./ReservationConfirmation";
import { submitReservation } from "@/app/actions/reservation";
import { MAX_PARTY_SIZE, MIN_PARTY_SIZE, hasErrors, validateReservation } from "@/lib/validation";
import type { Period, ReservationFieldErrors, ReservationInput } from "@/lib/types";

type DateTimeState = Pick<ReservationInput, "day" | "month" | "year" | "hour" | "minute" | "period">;

function defaultDateTime(): DateTimeState {
  const soon = new Date(Date.now() + 60 * 60 * 1000); // an hour from now
  let minute = Math.ceil(soon.getMinutes() / 15) * 15;
  let hour24 = soon.getHours();
  if (minute === 60) {
    minute = 0;
    hour24 += 1;
  }
  const period: Period = hour24 >= 12 ? "PM" : "AM";
  const hour = hour24 % 12 || 12;

  return { day: soon.getDate(), month: soon.getMonth() + 1, year: soon.getFullYear(), hour, minute, period };
}

const PARTY_SIZE_OPTIONS = Array.from({ length: MAX_PARTY_SIZE - MIN_PARTY_SIZE + 1 }, (_, i) => {
  const size = MIN_PARTY_SIZE + i;
  return { value: size, label: `${size} ${size === 1 ? "guest" : "guests"}` };
});

export function ReservationForm() {
  const [name, setName] = useState("");
  const [partySize, setPartySize] = useState(2);
  const [phone, setPhone] = useState("");
  const [dateTime, setDateTime] = useState<DateTimeState>(defaultDateTime);
  const [errors, setErrors] = useState<ReservationFieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<{ input: ReservationInput; confirmationId: string } | null>(null);
  const [isPending, startTransition] = useTransition();

  function buildInput(): ReservationInput {
    return { name, partySize, phone, ...dateTime };
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitError(null);

    const input = buildInput();
    const clientErrors = validateReservation(input);
    setErrors(clientErrors);
    if (hasErrors(clientErrors)) return;

    startTransition(async () => {
      const result = await submitReservation(input);
      if (result.ok && result.confirmationId) {
        setConfirmation({ input, confirmationId: result.confirmationId });
      } else {
        setErrors(result.errors ?? {});
        setSubmitError("That didn't go through — check the fields above and try again.");
      }
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="grid gap-6 rounded-lg bg-surface p-6 shadow-md sm:p-8 lg:grid-cols-2">
        <Input
          label="Name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
          containerClassName="lg:col-span-2"
        />

        <Select
          label="Party Size"
          name="partySize"
          required
          options={PARTY_SIZE_OPTIONS}
          value={partySize}
          onChange={(e) => setPartySize(Number(e.target.value))}
          error={errors.partySize}
        />

        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          required
          prefix="+91"
          inputMode="numeric"
          maxLength={10}
          placeholder="98230 14477"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
          error={errors.phone}
        />

        <DateSelect
          value={dateTime}
          onChange={(value) => setDateTime((prev) => ({ ...prev, ...value }))}
          error={errors.day}
        />
        <TimeSelect
          value={dateTime}
          onChange={(value) => setDateTime((prev) => ({ ...prev, ...value }))}
          error={errors.hour}
        />

        <p className="text-sm text-neutral-500 lg:col-span-2">
          Party of {MAX_PARTY_SIZE}+? Call us at +91 98230 14477 and we&apos;ll set up the long table.
        </p>

        {submitError && <p className="text-sm text-error lg:col-span-2">{submitError}</p>}

        <div className="lg:col-span-2">
          <Button type="submit" size="lg" loading={isPending} className="w-full sm:w-auto">
            Confirm Reservation
          </Button>
        </div>
      </form>

      <ReservationConfirmation
        isOpen={Boolean(confirmation)}
        onClose={() => setConfirmation(null)}
        input={confirmation?.input ?? null}
        confirmationId={confirmation?.confirmationId ?? ""}
      />
    </>
  );
}
