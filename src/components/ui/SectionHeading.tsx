export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-rust-400">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-4xl sm:text-5xl leading-[0.95] text-balance ${
          light ? "text-paper-50" : "text-paper-50"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-paper-200/70">{description}</p>
      )}
    </div>
  );
}
