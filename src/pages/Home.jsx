import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadTours } from "../loadTours.js";
import TourCard from "../components/TourCard.jsx";

export default function Home() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    loadTours().then(setTours).catch(console.error);
  }, []);

  const preview = tours.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">West Bengal · Curated Journeys</p>
          <h1>More Than Miles</h1>
          <p className="lede">
            Slow, soulful travel across Bengal — from the surf at Digha to the
            first light on Kanchenjunga.
          </p>
          <div className="hero-cta">
            <Link to="/tours" className="btn btn-primary">Destinations</Link>
            <Link to="/contact" className="btn btn-ghost">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Featured tours</h2>
            <Link to="/tours" className="link-more">View more →</Link>
          </div>
          <div className="grid">
            {preview.map((t) => (
              <TourCard key={t.id} tour={t} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <h2>Plan your trip with us</h2>
            <Link to="/contact" className="link-more">View more →</Link>
          </div>
          <div className="contact-glimpse">
            <a href="mailto:morethanmiles.tours@gmail.com" className="contact-chip">✉ morethanmiles.tours@gmail.com</a>
            <a href="https://wa.me/9875678205" className="contact-chip">⌬ WhatsApp +91 98756 78205</a>
            <a href="tel:+919830565635" className="contact-chip">☎ +91 98305 65635</a>
            <a href="https://www.facebook.com/share/1E9Mnq58CC/" className="contact-chip">f Facebook</a>
          </div>
        </div>
      </section>
    </>
  );
}
