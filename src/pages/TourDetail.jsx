import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { loadTours } from "../loadTours.js";

export default function TourDetail() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTours()
      .then((list) => {
        const t = list.find((x) => x.id === id);
        if (!t) setError("Tour not found");
        else setTour(t);
      })
      .catch((e) => setError(e.message));
  }, [id]);

  if (error) {
    return (
      <section className="section">
        <div className="container narrow">
          <p className="error">{error}</p>
          <p>
            <Link to="/tours" className="link-more">
              Back to tours
            </Link>
          </p>
        </div>
      </section>
    );
  }

  if (!tour) return null;

  const descriptionParagraphs = tour.description
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <section className="section section-muted">
      <div className="container">
        <header className="page-head">
          <p className="eyebrow">Tour</p>
          <h1>{tour.title}</h1>
          {tour.subtitle && <p className="section-subtitle">{tour.subtitle}</p>}
        </header>

        <div className="tour-detail">
          <div className="tour-detail-gallery">
            {tour.images.slice(0, 3).map((src) => (
              <img key={src} src={src} alt={tour.title} />
            ))}
          </div>

          <div className="tour-detail-body">
            <div className="tour-detail-meta">
              <div className="tour-detail-meta-item">
                <span className="detail-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </span>
                <div>
                  <strong>{tour.duration || "Flexible duration"}</strong>
                  <span>Recommended package length</span>
                </div>
              </div>

              <div className="tour-detail-meta-item">
                <span className="detail-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 7h18"></path>
                    <path d="M5 7v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7"></path>
                    <path d="M8 7V3"></path>
                    <path d="M16 7V3"></path>
                    <path d="M3 13h18"></path>
                  </svg>
                </span>
                <div>
                  <strong>{tour.booking || "Hotel + transport help available"}</strong>
                  <span>Booking support</span>
                </div>
              </div>
            </div>

            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="back-row">
              <Link to="/tours" className="btn btn-primary">
                Back to tours
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
