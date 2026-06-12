// Fetches /exp.txt and parses into experiences array.
export async function loadExperiences() {
  const res = await fetch('/exp.txt', { cache: 'no-cache' });
  if (!res.ok) throw new Error('Could not load exp.txt');
  const text = await res.text();
  return parseExperiences(text);
}

export function parseExperiences(text) {
  const items = [];
  const lines = text.split(/\r?\n/);
  let current = null;

  for (const raw of lines) {
    const line = raw.replace(/\s+$/, '');
    const trimmed = line.trim();
    if (/^\s*#/.test(line)) continue;

    const header = line.match(/^===\s*(.+?)\s*===\s*$/);
    if (header) {
      if (current) items.push(finalize(current));
      current = { title: header[1], subheading: '', images: [], include: [], descLines: [] };
      continue;
    }
    if (!current) continue;

    const kv = line.match(/^([a-zA-Z]+):\s*(.*)$/);
    if (kv) {
      const key = kv[1].toLowerCase();
      const value = kv[2].trim();
      if (key === 'images') {
        current.images = value
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
          .slice(0, 3)
          .map((f) => (f.startsWith('/') || f.startsWith('http') ? f : `/images/exp/${f}`));
        continue;
      }
      if (key === 'subheading') { current.subheading = value; continue; }
      if (key === 'include') {
        // separate by ; or , or •
        const parts = value.split(/[;\u2022,]/).map((s) => s.trim()).filter(Boolean);
        current.include.push(...parts);
        continue;
      }
      // 'goodfor' removed: no-op if present
      if (key === 'description') { if (value) current.descLines.push(value); continue; }
    }

    const bulletMatch = trimmed.match(/^[\u2022\-\*]\s*(.+)$/);
    if (bulletMatch) { current.include.push(bulletMatch[1].trim()); continue; }

    current.descLines.push(line);
  }

  if (current) items.push(finalize(current));
  return items;
}

function finalize(c) {
  return {
    id: c.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    title: c.title,
    subheading: c.subheading,
    images: c.images.length ? c.images : ['/images/exp/placeholder.svg'],
    include: c.include,
    description: c.descLines.join('\n').trim(),
  };
}
