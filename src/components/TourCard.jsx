import { useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="tour-footer">
          <span className="tour-availability">
            <svg className="calendar-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            {tour.duration || "Flexible duration"}
          </span>
          <Link to={`/tours/${tour.id}`} className="btn btn-primary view-more-btn">
            View More →
          </Link>
        </div>
      </div>
    </article>
  );
}

function truncate(s, n) {
  return s.length > n ? s.slice(0, n).trimEnd() + "…" : s;
}
