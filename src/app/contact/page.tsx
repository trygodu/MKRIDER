import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with MK Rider about tours, custom trips, merch, or partnerships.",
};

export default function ContactPage() {
  return (
    <div className="py-20">
      <Container className="grid gap-16 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading
            eyebrow="Contact"
            title="Questions before you book?"
            description="Whether it's about a departure date, a custom private trip, or an order — this goes straight to MK."
          />
          <div className="mt-10 space-y-6 text-sm text-paper-200/70">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-paper-200/50">Email</p>
              <p className="mt-1 text-paper-100">hello@mkrider.com</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-paper-200/50">Response time</p>
              <p className="mt-1 text-paper-100">1–2 business days</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-paper-200/50">Custom trips</p>
              <p className="mt-1 text-paper-100">
                Private and corporate groups welcome on any of our eight regions.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-md border border-asphalt-700 bg-asphalt-900 p-6 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
