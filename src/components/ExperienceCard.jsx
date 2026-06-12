import { Link } from 'react-router-dom';

export default function ExperienceCard({ exp }) {
  const img = exp.images && exp.images.length ? exp.images[0] : '/images/placeholder.jpg';
  return (
    <article className="tour-card">
      <div className="tour-gallery">
        <img src={img} alt={exp.title} />
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
