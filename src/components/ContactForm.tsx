"use client";

import { FormEvent, useState } from "react";
import Button from "./ui/Button";

const TOPICS = ["General question", "Custom / private trip", "Merch order help", "Press & partnerships"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-md border border-rust-500/40 bg-rust-500/10 p-8 text-center">
        <h2 className="font-display text-3xl">Message sent.</h2>
        <p className="mt-3 text-paper-200/70">
          Thanks, {name.split(" ")[0]} — MK Rider typically replies within one to two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-paper-200/60">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-sm border border-asphalt-600 bg-asphalt-950 px-3 py-3 text-sm focus:border-rust-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-paper-200/60">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-sm border border-asphalt-600 bg-asphalt-950 px-3 py-3 text-sm focus:border-rust-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-paper-200/60">
          Topic
        </label>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full rounded-sm border border-asphalt-600 bg-asphalt-950 px-3 py-3 text-sm focus:border-rust-500 focus:outline-none sm:w-auto"
        >
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-paper-200/60">
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="w-full rounded-sm border border-asphalt-600 bg-asphalt-950 px-3 py-3 text-sm focus:border-rust-500 focus:outline-none"
        />
      </div>

      <Button type="submit" size="lg">
        Send Message
      </Button>
    </form>
  );
}
