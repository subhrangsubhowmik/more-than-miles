import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { loadExperiences } from '../loadExperiences.js';

export default function ExperienceDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadExperiences()
      .then((list) => {
        const e = list.find((x) => x.id === id);
        if (!e) setError('Experience not found');
        else setItem(e);
      })
      .catch((e) => setError(e.message));
  }, [id]);

  if (error) {
    return (
      <section className="section">
        <div className="container narrow">
          <p className="error">{error}</p>
          <p>
            <Link to="/experiences" className="link-more">Back to Experiences</Link>
          </p>
        </div>
      </section>
    );
  }

  if (!item) return null;

  return (
    <section className="section section-muted">
      <div className="container">
        <header className="page-head">
          <p className="eyebrow">Experience</p>
          <h1>{item.title}</h1>
          {item.subheading && <p className="section-subtitle">{item.subheading}</p>}
        </header>

        <div className="tour-detail">
          <div className="tour-detail-gallery">
            {item.images.slice(0, 2).map((src) => (
              <img key={src} src={src} alt={item.title} />
            ))}
          </div>

          <div className="tour-detail-body">
            {item.description && <p>{item.description}</p>}

            {item.include && item.include.length > 0 && (
              <div className="tour-highlights">
                <strong>Include:</strong>
                <ul>
                  {item.include.map((inc, i) => (
                    <li key={i}>{inc}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="back-row">
              <Link to="/experiences" className="btn btn-primary">Back to Experiences</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
