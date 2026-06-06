export default function About() {
  return (
    <>
      <section className="page-hero about-hero">
        <div className="container hero-inner">
          <p className="eyebrow">About Us</p>
          <h1>More Than Miles Tours</h1>
          <p className="lede">
            At More Than Miles Tours, travel is more than just visiting places—it is about discovering cultures, creating meaningful connections, and experiencing destinations in an authentic way.
          </p>
        </div>
      </section>

      <section className="section about-content">
        <div className="container about-grid">
          <div>
            <p>
              Based in Kolkata, we specialize in curated travel experiences across West Bengal, showcasing the region's rich heritage, vibrant culture, breathtaking landscapes, and unique local traditions. From the colonial charm and cultural treasures of Kolkata to the misty hills of Darjeeling, the artistic soul of Santiniketan, the wilderness of the Sundarbans, and the grandeur of Durga Puja, we design journeys that go beyond conventional sightseeing.
            </p>
            <p>
              Founded by passionate travellers with extensive international travel experience, More Than Miles Tours was born from a love for meaningful travel and a deep appreciation for what modern travellers truly seek—authentic experiences, comfort, local insight, and seamless planning.
            </p>
            <p>
              Whether you are a solo traveller, couple, family, small group, or an international visitor looking to explore Eastern India, we offer thoughtfully crafted itineraries tailored to your interests and preferences.
            </p>
          </div>

          <div className="about-card">
            <h2>Our focus is simple</h2>
            <ul>
              <li>Authentic local experiences</li>
              <li>Customized travel planning</li>
              <li>Cultural immersion</li>
              <li>Reliable destination support</li>
              <li>Memorable journeys that go beyond the ordinary</li>
            </ul>
            <p className="about-tagline">At More Than Miles Tours, we don't just help you visit a destination—we help you experience it.</p>
            <p className="about-tagline-secondary">More Places. More Stories. More Than Miles.</p>
          </div>
        </div>
      </section>
    </>
  );
}
