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

  return (
    <section className="section section-muted">
      <div className="container">
        <header className="page-head">
          <p className="eyebrow">Tour</p>
          <h1>{tour.title}</h1>
        </header>

        <div className="tour-detail">
          <div className="tour-detail-gallery">
            {tour.images.map((src) => (
              <img key={src} src={src} alt={tour.title} />
            ))}
          </div>

          <div className="tour-detail-body">
            <p className="lede">{tour.description}</p>
            <p>
              <Link to="/tours" className="btn btn-primary">
                Back to tours
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
