import { RIDERS_GUIDE, PACKING_LIST } from "@/data/ridersGuide";

export default function RidersGuide() {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2">
        {RIDERS_GUIDE.map((section) => (
          <details key={section.title} className="group rounded-md border border-asphalt-700 bg-asphalt-900 p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl text-paper-50">
              {section.title}
              <span className="shrink-0 text-rust-500 transition-transform group-open:rotate-45">+</span>
            </summary>
            <ul className="mt-4 space-y-2.5">
              {section.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-paper-200/70">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-rust-500" />
                  {point}
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>

      <div className="mt-6 rounded-md border border-asphalt-700 bg-asphalt-900 p-6">
        <h3 className="font-display text-xl text-paper-50">Packing checklist</h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {PACKING_LIST.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-paper-200/70">
              <span className="mt-1 text-rust-500">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
