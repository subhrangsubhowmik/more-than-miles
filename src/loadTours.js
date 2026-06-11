// Fetches /tours.txt and parses it into an array of tours.
// Format documented at the top of public/tours.txt.
export async function loadTours() {
  const res = await fetch("/tours.txt", { cache: "no-cache" });
  if (!res.ok) throw new Error("Could not load tours.txt");
  const text = await res.text();
  return parseTours(text);
}

export function parseTours(text) {
  const tours = [];
  const lines = text.split(/\r?\n/);
  let current = null;

  for (const raw of lines) {
    const line = raw.replace(/\s+$/, "");
    const trimmed = line.trim();
    if (/^\s*#/.test(line)) continue; // comment

    const header = line.match(/^===\s*(.+?)\s*===\s*$/);
    if (header) {
      if (current) tours.push(finalize(current));
      current = {
        title: header[1],
        subtitle: "",
        images: [],
        duration: "",
        booking: "",
        descLines: [],
        highlights: [],
      };
      continue;
    }
    if (!current) continue;

    const keyValue = line.match(/^([a-zA-Z]+):\s*(.*)$/);
    if (keyValue) {
      const key = keyValue[1].toLowerCase();
      const value = keyValue[2].trim();

      if (key === "images") {
        current.images = value
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
          .slice(0, 3)
          .map((f) => (f.startsWith("/") || f.startsWith("http") ? f : `/images/${f}`));
        continue;
      }

      if (key === "subheading") {
        current.subtitle = value;
        continue;
      }

      if (key === "duration") {
        current.duration = value;
        continue;
      }

      if (key === "booking") {
        current.booking = value;
        continue;
      }

      if (key === "highlights") {
        if (value) {
          const parts = value
            .split(/[\u2022,\-\*]/)
            .map((s) => s.trim())
            .filter(Boolean);
          current.highlights.push(...parts);
        }
        continue;
      }

      if (key === "description") {
        if (value) current.descLines.push(value);
        continue;
      }
    }

    // bullet lines (•, -, *) are treated as highlights when present
    const bulletMatch = trimmed.match(/^[\u2022\-\*\u2023]\s*(.+)$/);
    if (bulletMatch) {
      current.highlights.push(bulletMatch[1].trim());
      continue;
    }

    current.descLines.push(line);
  }

  if (current) tours.push(finalize(current));
  return tours;
}

function finalize(t) {
  const description = t.descLines.join("\n").trim();
  const id = t.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return {
    id,
    title: t.title,
    subtitle: t.subtitle,
    images: t.images,
    description,
    highlights: t.highlights || [],
    duration: t.duration,
    booking: t.booking,
  };
}
