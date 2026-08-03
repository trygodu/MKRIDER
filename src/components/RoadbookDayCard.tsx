import { RoadbookDay } from "@/data/types";

export default function RoadbookDayCard({ day }: { day: RoadbookDay }) {
  return (
    <div className="rounded-md border border-asphalt-700 bg-asphalt-900">
      <div className="border-b border-asphalt-700 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rust-400">
            Day {day.day}
          </p>
          {day.totalKm > 0 && (
            <div className="flex gap-4 text-xs uppercase tracking-wider text-paper-200/50">
              <span>{day.totalKm.toLocaleString()} km</span>
              <span>{day.duration}</span>
            </div>
          )}
        </div>
        <h3 className="mt-2 font-display text-3xl leading-tight">{day.title}</h3>
        <p className="mt-3 text-sm text-paper-200/75 leading-relaxed">{day.narrative}</p>
      </div>

      {day.legs.length > 0 && (
        <div className="overflow-x-auto p-6">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-asphalt-700 text-[11px] uppercase tracking-wider text-paper-200/50">
                <th className="py-2 pr-4 font-semibold">Total</th>
                <th className="py-2 pr-4 font-semibold">Leg</th>
                <th className="py-2 pr-4 font-semibold">Road</th>
                <th className="py-2 pr-4 font-semibold">Place</th>
                <th className="py-2 pr-4 font-semibold">Time</th>
                <th className="py-2 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {day.legs.map((leg, i) => (
                <tr key={i} className="border-b border-asphalt-800 last:border-0">
                  <td className="py-2 pr-4 font-mono text-paper-100">
                    {leg.cumulativeKm > 0 ? `${leg.cumulativeKm} km` : "0"}
                  </td>
                  <td className="py-2 pr-4 font-mono text-paper-200/60">
                    {leg.legKm > 0 ? `+${leg.legKm}` : "—"}
                  </td>
                  <td className="py-2 pr-4 text-rust-400">{leg.road}</td>
                  <td className="py-2 pr-4 text-paper-50">{leg.place}</td>
                  <td className="py-2 pr-4 text-paper-200/60">{leg.time}</td>
                  <td className="py-2 text-paper-200/70">{leg.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {day.pois.length > 0 && (
        <div className="grid gap-6 border-t border-asphalt-700 p-6 sm:grid-cols-2 lg:grid-cols-3">
          {day.pois.map((poi) => (
            <div key={poi.name}>
              <p className="font-display text-lg text-paper-50">{poi.name}</p>
              <p className="mt-1 text-sm text-paper-200/70 leading-relaxed">{poi.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
