const GRADIENTS: Record<string, string> = {
  rust: "from-rust-700 via-rust-600 to-asphalt-900",
  blood: "from-blood-600 via-asphalt-800 to-asphalt-950",
  ember: "from-ember-600 via-rust-600 to-asphalt-900",
  slate: "from-asphalt-600 via-asphalt-800 to-asphalt-950",
};

export default function RouteArt({
  tone = "rust",
  className = "",
  label,
}: {
  tone?: keyof typeof GRADIENTS;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${GRADIENTS[tone]} ${className}`}
    >
      <div className="absolute inset-0 grain" />
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M-20 260 C 60 260 50 190 130 190 C 210 190 200 110 280 110 C 340 110 350 60 420 40"
          stroke="white"
          strokeOpacity="0.5"
          strokeWidth="3"
        />
        <path
          d="M-20 300 C 40 300 60 230 140 230 C 220 230 210 150 300 150 C 360 150 370 90 420 70"
          stroke="white"
          strokeOpacity="0.25"
          strokeWidth="2"
        />
        <path
          d="M0 30 L60 90 L120 20 L190 100 L260 10 L330 80 L400 25"
          stroke="black"
          strokeOpacity="0.25"
          strokeWidth="2"
          fill="black"
          fillOpacity="0.15"
        />
      </svg>
      {label && (
        <span className="absolute bottom-3 right-3 font-display text-[11px] uppercase tracking-[0.25em] text-white/70">
          {label}
        </span>
      )}
    </div>
  );
}
