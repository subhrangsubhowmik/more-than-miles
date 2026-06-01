import { useState } from "react";

export default function TourCard({ tour, compact = false }) {
  const [active, setActive] = useState(0);
  const images = tour.images.length ? tour.images : ["/images/placeholder.jpg"];

  return (
    <article className={`tour-card ${compact ? "tour-card-compact" : ""}`}>
      <div className="tour-gallery">
        <img src={images[active]} alt={tour.title} onError={(e) => (e.currentTarget.style.opacity = 0.3)} />
        {images.length > 1 && (
          <div className="thumbs">
            {images.map((src, i) => (
              <button
                key={src}
                className={i === active ? "thumb active" : "thumb"}
                onClick={() => setActive(i)}
                aria-label={`Image ${i + 1}`}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="tour-body">
        <h3>{tour.title}</h3>
        <p>{compact ? truncate(tour.description, 140) : tour.description}</p>
      </div>
    </article>
  );
}

function truncate(s, n) {
  return s.length > n ? s.slice(0, n).trimEnd() + "…" : s;
}
