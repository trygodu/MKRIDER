"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Container from "./ui/Container";
import Button from "./ui/Button";

const LINKS = [
  { href: "/travel", label: "Travel" },
  { href: "/merch", label: "Merch" },
  { href: "/guide", label: "The Guide" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-asphalt-700 bg-asphalt-950/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between py-3">
        <Link
          href="/"
          className="font-display text-2xl tracking-[0.15em] text-paper-50"
          onClick={() => setOpen(false)}
        >
          MK<span className="text-rust-500">RIDER</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                  active ? "text-rust-400" : "text-paper-100/80 hover:text-paper-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/travel" size="sm">
            Book a Ride
          </Button>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 bg-paper-50 transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-paper-50 transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-paper-50 transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      {open && (
        <div className="border-t border-asphalt-700 bg-asphalt-950 md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 text-sm font-semibold uppercase tracking-wider text-paper-100/80 hover:bg-asphalt-800 hover:text-paper-50"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/travel" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Book a Ride
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
