"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./ui/Button";

export default function PortalLookupForm() {
  const router = useRouter();
  const [confirmationId, setConfirmationId] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const id = confirmationId.trim().toUpperCase();
    if (!id) return;
    router.push(`/portal/${encodeURIComponent(id)}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="text"
        value={confirmationId}
        onChange={(e) => setConfirmationId(e.target.value)}
        placeholder="MKR-XXXXXX"
        className="flex-1 rounded-sm border border-asphalt-600 bg-asphalt-950 px-3 py-3 font-mono text-sm uppercase tracking-wider focus:border-rust-500 focus:outline-none"
      />
      <Button type="submit">Open My Trip</Button>
    </form>
  );
}
