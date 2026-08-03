import Link from "next/link";
import Container from "./ui/Container";

const COLUMNS = [
  {
    title: "Ride",
    links: [
      { href: "/travel", label: "Upcoming Tours" },
      { href: "/guide", label: "Meet MK Rider" },
      { href: "/contact", label: "Custom Trips" },
    ],
  },
  {
    title: "Shop",
    links: [
      { href: "/merch", label: "All Merch" },
      { href: "/merch?category=Apparel", label: "Apparel" },
      { href: "/merch?category=Gear", label: "Riding Gear" },
    ],
  },
  {
    title: "Brand",
    links: [
      { href: "/about", label: "Our Story" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-asphalt-700 bg-asphalt-900 grain">
      <Container className="grid grid-cols-2 gap-10 py-16 md:grid-cols-5">
        <div className="col-span-2">
          <Link href="/" className="font-display text-2xl tracking-[0.15em] text-paper-50">
            MK<span className="text-rust-500">RIDER</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-paper-200/60">
            A motorcycle lifestyle brand for riders who measure vacation days in
            switchbacks. Guided tours, rider-built gear, and a community that
            never takes the highway when the mountain road is right there.
          </p>
          <div className="mt-6 flex gap-4 text-xs font-semibold uppercase tracking-wider text-paper-200/60">
            <span>Instagram</span>
            <span>YouTube</span>
            <span>Strava</span>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-rust-400">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper-200/70 hover:text-paper-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-asphalt-700">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-paper-200/50 sm:flex-row">
          <p>© {new Date().getFullYear()} MK Rider. All roads reserved.</p>
          <Link href="/credits" className="hover:text-paper-200">
            Photo credits
          </Link>
          <p>Ride hard. Ride together. Ride home.</p>
        </Container>
      </div>
    </footer>
  );
}
