import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-rust-500 text-asphalt-950 hover:bg-ember-500 shadow-[0_0_0_1px_rgba(0,0,0,0.05)]",
  secondary: "bg-paper-50 text-asphalt-950 hover:bg-paper-200",
  ghost: "bg-transparent text-paper-50 hover:bg-asphalt-800",
  outline:
    "bg-transparent text-paper-50 border border-paper-50/30 hover:border-rust-500 hover:text-rust-400",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-wider transition-colors duration-200 rounded-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
  disabled,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
