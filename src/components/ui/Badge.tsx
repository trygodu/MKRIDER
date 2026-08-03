import { ReactNode } from "react";

export default function Badge({
  children,
  tone = "rust",
}: {
  children: ReactNode;
  tone?: "rust" | "paper" | "ember";
}) {
  const tones: Record<string, string> = {
    rust: "bg-rust-500/15 text-rust-400 border-rust-500/30",
    paper: "bg-paper-50/10 text-paper-100 border-paper-50/20",
    ember: "bg-ember-500/15 text-ember-500 border-ember-500/30",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
