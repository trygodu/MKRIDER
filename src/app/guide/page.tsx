import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import SlotImage from "@/components/SlotImage";
import { RIDER_PHOTOS } from "@/data/riderPhotos";

export const metadata: Metadata = {
  title: "The Guide — Meet MK Rider",
  description:
    "MK Rider has ridden every route on this site personally. Meet the guide behind MK Rider's small-group motorcycle tours.",
};

const CREDENTIALS = [
  "15+ years leading group motorcycle tours across 4 continents",
  "Certified motorcycle mechanic (all makes)",
  "Wilderness First Responder certified",
  "Advanced off-road & ADV instructor certification",
  "Multilingual: English, Spanish, conversational Italian",
];

const TIMELINE = [
  { year: "2009", text: "First cross-country ride, from Seattle to the Florida Keys, on a bike bought for $900." },
  { year: "2013", text: "Started leading informal group rides for friends across the American West." },
  { year: "2016", text: "Rode solo through Europe and North Africa, scouting the roads that became MK Rider's first routes." },
  { year: "2019", text: "Founded MK Rider to run small, personally-led tours instead of franchising the name out." },
  { year: "2023", text: "Added the Hà Giang Loop and Atlas Mountains after two seasons of solo recon riding." },
  { year: "Today", text: "Still leading every single group personally — no substitute guides, no exceptions." },
];

const GALLERY = [
  RIDER_PHOTOS.rearViewSky,
  RIDER_PHOTOS.backViewSeated,
  RIDER_PHOTOS.autumnMountainRoad,
  RIDER_PHOTOS.parkedOverlook,
  RIDER_PHOTOS.backViewRider,
  RIDER_PHOTOS.roadWithCars,
  RIDER_PHOTOS.adventureLandscape,
  RIDER_PHOTOS.backViewSeated,
];

export default function GuidePage() {
  return (
    <div>
      <section className="relative border-b border-asphalt-700">
        <Container className="grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-rust-400">
              The Guide
            </p>
            <h1 className="font-display text-6xl leading-[0.95] text-balance sm:text-7xl">
              MK Rider
            </h1>
            <p className="mt-6 text-lg text-paper-200/80">
              I don&apos;t send groups out with a local operator I&apos;ve never met. I ride
              every route myself, first, usually more than once, before it ever
              becomes a tour on this site. If you&apos;re on the back of a bike
              behind me, I already know where the gravel is.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/travel">See Upcoming Tours</Button>
              <Button href="/contact" variant="outline">
                Ask MK a Question
              </Button>
            </div>
          </div>
          <SlotImage
            photo={RIDER_PHOTOS.adventureLandscape}
            tone="rust"
            className="aspect-[4/5] w-full rounded-md"
            label="MK Rider"
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["15+", "Years leading tours"],
              ["4", "Continents ridden"],
              ["120K+", "Miles led on tour"],
              ["500+", "Riders guided"],
            ].map(([stat, label]) => (
              <div key={label} className="rounded-md border border-asphalt-700 bg-asphalt-900 p-6 text-center">
                <p className="font-display text-4xl text-rust-400">{stat}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-paper-200/50">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-asphalt-700 bg-asphalt-900/40 py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Philosophy" title="Why I started MK Rider." />
            <p className="mt-6 text-paper-200/80 leading-relaxed">
              Most guided tours are a brand name licensed to a local operator
              you meet for the first time at the airport. I wanted the
              opposite: a small outfit where the person planning the route,
              picking the lunch stops, and fixing the flat tire on day four is
              the same person who put the whole thing together.
            </p>
            <p className="mt-4 text-paper-200/80 leading-relaxed">
              That means fewer tours running at once, and a real cap on group
              size. It also means when a road closes for weather or a permit
              falls through, we have a backup plan I&apos;ve actually ridden —
              not one from a spreadsheet.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Credentials" title="The boring but important part." />
            <ul className="mt-6 space-y-3">
              {CREDENTIALS.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-paper-200/80">
                  <span className="mt-1 text-rust-500">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Timeline" title="Two decades on two wheels, condensed." />
          <div className="mt-12 space-y-8 border-l border-asphalt-700 pl-8">
            {TIMELINE.map((item) => (
              <div key={item.year} className="relative">
                <span className="absolute -left-[41px] flex h-6 items-center font-display text-lg text-rust-500">
                  {item.year}
                </span>
                <p className="text-paper-200/80">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-asphalt-700 bg-asphalt-900/40 py-20">
        <Container>
          <SectionHeading eyebrow="On the Road" title="From the last few seasons." align="center" />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {GALLERY.map((photo, i) => (
              <SlotImage key={i} photo={photo} tone="rust" className="aspect-square w-full rounded-md" />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
