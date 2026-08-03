export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatPrice(usd: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(usd);
}

export function nextStartDate(dates: string[]) {
  const now = new Date();
  const upcoming = dates
    .map((d) => new Date(d + "T00:00:00"))
    .filter((d) => d.getTime() >= now.setHours(0, 0, 0, 0))
    .sort((a, b) => a.getTime() - b.getTime());
  return upcoming[0] ?? new Date(dates[0] + "T00:00:00");
}
