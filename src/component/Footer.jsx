
import { Link } from "react-router-dom";

const services = [
  "Landscape Gardening",
  "Patios & Paving",
  "Fencing",
  "Driveways",
  "Garden Maintenance",
  "Decking",
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer__top">
        {/* Brand and contact */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo-link" aria-label="Griffiths Landscapes home">
            <img
              className="footer__image"
              src="./images/image.png"
              alt="Griffiths Landscapes"
              loading="lazy"
            />
          </Link>

          <p className="footer__tagline">
            Creating outdoor spaces to love.
          </p>

          <p className="footer__description">
            Professional landscaping and garden improvements across
            Glossop, Tameside and the surrounding areas.
          </p>

          <a className="footer__call" href="tel:07475767732">
            <span className="footer__call-icon" aria-hidden="true">
              ↗
            </span>
            <span>
              <small>Call us today</small>
              <strong>07475 767732</strong>
            </span>
          </a>

          <Link to="/contact" className="footer__quote">
            Request a free quote <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="footer__column" aria-label="Footer navigation">
          <h2 className="footer__heading">Explore</h2>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/gallery">Project Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Services */}
        <div className="footer__column">
          <h2 className="footer__heading">Our Services</h2>
          <ul className="footer__links">
            {services.map((service) => (
              <li key={service}>
                <Link to="/services">{service}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Opening hours */}
        <div className="footer__column footer__hours">
          <h2 className="footer__heading">Opening Hours</h2>

          <p className="footer__hours-intro">
            Get in touch to discuss your next garden project.
          </p>

          <ul className="footer__hours-list">
            <li>
              <span>Monday – Friday</span>
              <time>09:00 – 18:00</time>
            </li>
            <li>
              <span>Saturday</span>
              <time>09:00 – 15:00</time>
            </li>
            <li>
              <span>Sunday</span>
              <span className="footer__closed">Closed</span>
            </li>
          </ul>

          <p className="footer__availability">
            <span className="footer__availability-dot" />
            Here to help with your garden plans
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Griffiths Landscapes.
            All rights reserved.
          </p>

          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <a href="tel:07475767732">Call us</a>
          </div>

          <a className="footer__back-top" href="#top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
