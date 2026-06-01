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
    const line = raw.trimEnd();
    if (/^\s*#/.test(line)) continue; // comment

    const header = line.match(/^===\s*(.+?)\s*===\s*$/);
    if (header) {
      if (current) tours.push(finalize(current));
      current = { title: header[1], images: [], descLines: [] };
      continue;
    }
    if (!current) continue;

    const img = line.match(/^images:\s*(.*)$/i);
    if (img) {
      current.images = img[1]
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .slice(0, 3)
        .map((f) => (f.startsWith("/") || f.startsWith("http") ? f : `/images/${f}`));
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
  return { id, title: t.title, images: t.images, description };
}
