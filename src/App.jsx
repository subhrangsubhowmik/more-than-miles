import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Tours from "./pages/Tours.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import TourDetail from "./pages/TourDetail.jsx";

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="container nav">
          <Link to="/" className="brand">
            <img src="/images/logo.jpeg" alt="More Than Miles" className="brand-mark" /> More Than Miles
          </Link>
          <nav className="menu">
            <NavLink to="/tours" className={({ isActive }) => (isActive ? "active" : "") }>
              Destinations
            </NavLink>            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "") }>
              About Us
            </NavLink>            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact Us
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<TourDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} More Than Miles. Crafted for travellers of Bengal.</p>
        </div>
      </footer>
    </div>
  );
}
