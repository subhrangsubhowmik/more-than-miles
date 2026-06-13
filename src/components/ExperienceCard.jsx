import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ExperienceCard({ exp }) {
  const [active, setActive] = useState(0);
  const images = exp.images && exp.images.length ? exp.images : ['/images/placeholder.jpg'];

  return (
    <article className="tour-card">
      <div className="tour-gallery">
        <img src={images[active]} alt={exp.title} onError={(e) => (e.currentTarget.style.opacity = 0.3)} />
        {images.length > 1 && (
          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={i === active ? 'dot active' : 'dot'}
                onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="tour-body">
        <h3>{exp.title}</h3>
        {exp.subheading && <p className="tour-subtitle">{exp.subheading}</p>}
        <p className="tour-body-desc">{exp.description}</p>
        <div className="tour-footer">
          <Link to={`/experiences/${exp.id}`} className="btn btn-primary view-more-btn">View More →</Link>
        </div>
      </div>
    </article>
  );
}
