import { Routes, Route, Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Home from "./pages/Home.jsx";
import Tours from "./pages/Tours.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import TourDetail from "./pages/TourDetail.jsx";
import Experiences from "./pages/Experiences.jsx";
import ExperienceDetail from "./pages/ExperienceDetail.jsx";

export default function App() {
  const [attractionsOpen, setAttractionsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setAttractionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="app">
      <header className="site-header">
        <div className="container nav">
          <Link to="/" className="brand">
            <img src="/images/logo.jpeg" alt="More Than Miles" className="brand-mark" /> More Than Miles
          </Link>
          <nav className="menu" ref={menuRef}>
            <div className={"dropdown" + (attractionsOpen ? " open" : "") }>
              <button
                type="button"
                className="menu-button primary"
                onClick={() => setAttractionsOpen((o) => !o)}
                aria-haspopup="true"
                aria-expanded={attractionsOpen}
              >
                Attractions <span className="chev" aria-hidden>{attractionsOpen ? "▴" : "▾"}</span>
              </button>
              {attractionsOpen && (
                <div className="submenu" role="menu" aria-label="Attractions submenu">
                  <NavLink
                    to="/tours"
                    className={({ isActive }) => (isActive ? "active primary" : "primary")}
                    onClick={() => setAttractionsOpen(false)}
                    role="menuitem"
                  >
                    Destinations
                  </NavLink>
                  <NavLink
                    to="/experiences"
                    className={({ isActive }) => (isActive ? "active primary" : "primary")}
                    onClick={() => setAttractionsOpen(false)}
                    role="menuitem"
                  >
                    Experiences
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "") }>
              About Us
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "") }>
              Contact Us
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/experiences/:id" element={<ExperienceDetail />} />
          <Route path="/tours/:id" element={<TourDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© More Than Miles. Crafted for travellers around the World!</p>
        </div>
      </footer>
    </div>
  );
}
