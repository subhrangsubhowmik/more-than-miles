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
            <span className="contact-icon whatsapp" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.52 3.48A11.93 11.93 0 0012 .5 11.76 11.76 0 003.5 12c0 2.07.54 4 1.48 5.71L2 22l4.83-1.27A11.9 11.9 0 0012 23.5C18.07 23.5 23 18.57 23 12.5a11.9 11.9 0 00-2.48-9.02zM12 21.5a9.96 9.96 0 01-5.2-1.43l-.37-.22-2.87.75.77-2.8-.25-.37A9.93 9.93 0 1112 21.5z" />
                <path d="M17.1 14.1c-.3-.15-1.7-.85-1.95-.95-.25-.1-.43-.15-.62.15s-.71.95-.87 1.15c-.16.2-.32.22-.6.075-.28-.145-1.17-.43-2.22-1.37-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.017-.43.12-.57.12-.12.28-.31.42-.47.14-.16.18-.27.28-.45.09-.18.05-.34-.025-.49-.08-.15-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.46.07-.7.34-.24.27-.92.9-.92 2.2 0 1.3.94 2.55 1.07 2.73.13.18 1.86 2.84 4.52 3.98 1.64.7 2.64.86 3.56.7.55-.1 1.7-.7 1.94-1.37.24-.66.24-1.22.17-1.34-.07-.12-.25-.18-.55-.33z" />
              </svg>
            </span>
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
