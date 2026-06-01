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
              <a href="mailto:hello@morethanmiles.in">hello@morethanmiles.in</a>
            </div>
          </li>
          <li>
            <span className="contact-icon">⌬</span>
            <div>
              <div className="contact-label">WhatsApp</div>
              <a href="https://wa.me/919830000000">+91 98300 00000</a>
            </div>
          </li>
          <li>
            <span className="contact-icon">☎</span>
            <div>
              <div className="contact-label">Phone</div>
              <a href="tel:+919830000000">+91 98300 00000</a>
            </div>
          </li>
          <li>
            <span className="contact-icon">f</span>
            <div>
              <div className="contact-label">Facebook</div>
              <a href="https://facebook.com/morethanmiles" target="_blank" rel="noreferrer">
                facebook.com/morethanmiles
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
