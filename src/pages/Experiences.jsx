import { useEffect, useState } from 'react';
import { loadExperiences } from '../loadExperiences.js';
import ExperienceCard from '../components/ExperienceCard.jsx';

export default function Experiences() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadExperiences().then(setItems).catch((e) => setError(e.message));
  }, []);

  return (
    <section className="section">
      <div className="container">
        <header className="page-head">
          <p className="eyebrow">Explore</p>
          <h1>Experiences</h1>
          <p className="lede">Curated experiences across West Bengal.</p>
        </header>

        {error && <p className="error">{error}</p>}

        <div className="tour-list">
          {items.map((e) => (
            <ExperienceCard key={e.id} exp={e} />
          ))}
        </div>
      </div>
    </section>
  );
}
