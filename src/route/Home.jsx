
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaWhatsapp } from "react-icons/fa";

const services = [
  {
    title: "Garden Design",
    description:
      "Beautifully planned outdoor spaces designed around your home, lifestyle and budget.",
    image: "../images/Home Image.jpg",
    alt: "Landscaped garden design",
  },
  {
    title: "Patios & Paving",
    description:
      "Create the perfect space for relaxing and entertaining with quality paving and patios.",
    image: "../images/garden4.JPG",
    alt: "Garden patio and paving",
  },
  {
    title: "Turfing & Lawns",
    description:
      "Give your garden a fresh start with a beautiful new lawn and professional turf installation.",
    image: "./gallery/1.jpg",
    alt: "Garden landscaping and lawn",
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Griffiths Landscapes | Landscaping & Garden Services in Glossop
        </title>
        <meta
          name="description"
          content="Transform your garden with Griffiths Landscapes. Expert patios, paving, turfing, decking and garden maintenance in Glossop and surrounding areas. Contact us for a free quote."
        />
      </Helmet>

      <main className="home">
        {/* Hero */}
        <section className="hero">
          <img
            src="../images/Home Image.jpg"
            alt="Beautiful outdoor landscaping by Griffiths Landscapes"
            className="hero__image"
          />

          <div className="hero__overlay" />

          <div className="hero__content">
            <span className="hero__eyebrow">
              LANDSCAPING IN GLOSSOP & SURROUNDING AREAS
            </span>

            <h1 className="hero__title">
              Your Garden.
              <br />
              <span>Our Craft.</span>
              <br />
              A Space to Love.
            </h1>

            <p className="hero__description">
              From beautiful patios to complete garden transformations,
              we create outdoor spaces that look incredible and work
              for your lifestyle.
            </p>

            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary">
                Get a Free Quote
              </Link>

              <a
                href="tel:07359303877"
                className="btn btn--outline"
              >
                Call 07359 303877
              </a>
            </div>

            <div className="hero__trust">
              <span>10+ Years of Experience</span>
              <span>Quality Craftsmanship</span>
              <span>Local & Reliable</span>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="intro section">
          <div className="intro__content">
            <span className="section__eyebrow">WELCOME TO GRIFFITHS LANDSCAPES</span>

            <h2 className="section__title">
              Making more of your outdoor space.
            </h2>

            <p>
              Your garden should be a place you love spending time in.
              We help homeowners across Glossop and Tameside transform
              their outdoor spaces with thoughtful design, quality
              materials and attention to detail.
            </p>

            <p>
              Whether you're planning a brand-new patio, a fresh lawn
              or a complete garden makeover, we bring experience and
              care to every project, from the first conversation to
              the finishing touches.
            </p>

            <Link to="/about" className="text-link">
              Discover more about us <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="intro__image-wrap">
            <img
              src="./gallery/1.jpg"
              alt="A completed Griffiths Landscapes garden project"
              className="intro__image"
              loading="lazy"
            />
            <div className="intro__experience">
              <strong>10+</strong>
              <span>Years of experience</span>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services section">
          <div className="section__heading">
            <span className="section__eyebrow">WHAT WE DO</span>
            <h2 className="section__title">
              Everything your garden needs.
            </h2>
            <p>
              Practical solutions and quality finishes to bring your
              outdoor vision to life.
            </p>
          </div>

          <div className="services__grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-card__image-wrap">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="service-card__image"
                    loading="lazy"
                  />
                </div>

                <div className="service-card__content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/contact" className="text-link">
                    Request a quote <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="services__note">
            We also offer decking, garden maintenance and wider
            landscaping services. Get in touch to discuss your project.
          </p>
        </section>

        {/* Why choose us */}
        <section className="why-us">
          <div className="why-us__inner">
            <div>
              <span className="section__eyebrow">
                THE GRIFFITHS DIFFERENCE
              </span>
              <h2 className="section__title">
                Good gardens start with good people.
              </h2>
            </div>

            <div className="why-us__points">
              <div className="why-us__point">
                <span className="why-us__number">01</span>
                <div>
                  <h3>Experience you can trust</h3>
                  <p>
                    Over a decade of experience delivering outdoor
                    improvements with care and attention to detail.
                  </p>
                </div>
              </div>

              <div className="why-us__point">
                <span className="why-us__number">02</span>
                <div>
                  <h3>Made for your home</h3>
                  <p>
                    Every project is tailored to your needs, style,
                    available space and budget.
                  </p>
                </div>
              </div>

              <div className="why-us__point">
                <span className="why-us__number">03</span>
                <div>
                  <h3>Quality from start to finish</h3>
                  <p>
                    We focus on careful preparation, durable materials
                    and a professional finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="contact-cta">
          <img
            src="../images/garden4.JPG"
            alt="Outdoor garden space"
            className="contact-cta__image"
            loading="lazy"
          />

          <div className="contact-cta__overlay" />

          <div className="contact-cta__content">
            <span className="section__eyebrow">
              LET'S CREATE SOMETHING SPECIAL
            </span>

            <h2>
              Ready to transform
              <br />
              your garden?
            </h2>

            <p>
              Tell us what you have in mind. Get in touch to discuss
              your ideas and request a free quote for your project.
            </p>

            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary">
                Get Your Free Quote
              </Link>

              <a
                href="tel:07359303877"
                className="btn btn--outline"
              >
                Call Our Team
              </a>
              
            </div>
     
            
          </div>
          
        </section>
      </main>
        <a
          href="https://wa.me/07359303877"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp />
          <span>How Can We Help?</span>
        </a>

    </>
  );
}
