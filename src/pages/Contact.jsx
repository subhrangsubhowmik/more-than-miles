export default function Contact() {
  return (
    <section className="section">
      <div className="container narrow">
        <header className="page-head">
          <p className="eyebrow">Get in touch</p>
          <h1>Contact Us</h1>
          <p className="lede">
            Tell us where you'd like to go — we'll craft the rest. We usually reply within a few hours.
          </p>
        </header>

        <ul className="contact-list">
          <li>
            <span className="contact-icon">✉</span>
            <div>
              <div className="contact-label">Email</div>
              <a href="mailto:morethanmiles.tours@gmail.com">morethanmiles.tours@gmail.com</a>
            </div>
          </li>
          <li>
            <span className="contact-icon">⌬</span>
            <div>
              <div className="contact-label">WhatsApp</div>
              <a href="https://wa.me/9875678205">+91 98756 78205</a>
            </div>
          </li>
          <li>
            <span className="contact-icon">☎</span>
            <div>
              <div className="contact-label">Phone</div>
              <a href="tel:+919830000000">+91 98305 65635</a>
            </div>
          </li>
          <li>
            <span className="contact-icon">f</span>
            <div>
              <div className="contact-label">Facebook</div>
              <a href="https://www.facebook.com/share/1E9Mnq58CC/" target="_blank" rel="noreferrer">
                fb/morethanmiles
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
