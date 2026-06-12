import { useEffect, useState } from "react";
import { loadTours } from "../loadTours.js";
import TourCard from "../components/TourCard.jsx";

export default function Tours() {
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTours().then(setTours).catch((e) => setError(e.message));
  }, []);

  return (
    <section className="section">
      <div className="container">
        <header className="page-head">
          <p className="eyebrow">Explore</p>
          <h1>Destinations</h1>
          <p className="lede">Handpicked journeys across West Bengal.</p>
        </header>

        {error && <p className="error">{error}</p>}

        <div className="tour-list">
          {tours.map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
