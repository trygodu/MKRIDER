"use client";

import Button from "./ui/Button";

export default function PrintButton() {
  return (
    <Button variant="outline" onClick={() => window.print()} className="no-print">
      Print / Save as PDF
    </Button>
  );
}
