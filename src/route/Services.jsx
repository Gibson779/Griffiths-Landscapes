export default function Services(){
    
    return (
    <main className="services">

      <section className="services__hero">
        <h1>Our Services</h1>
        <p>
          We provide high-quality services tailored to meet our customers'
          needs. Our team focuses on reliability, professionalism, and
          outstanding results.
        </p>
      </section>

      <section className="services__list">

        <div className="service-card">
          <h2>Service One</h2>
          <p>
            A short description of your first service. Explain what it includes
            and the value it provides to customers.
          </p>
        </div>

        <div className="service-card">
          <h2>Service Two</h2>
          <p>
            Describe another service you offer. Highlight the main benefits and
            why customers should choose it.
          </p>
        </div>

        <div className="service-card">
          <h2>Service Three</h2>
          <p>
            Add details about another offering. This could include specialised
            services or custom solutions.
          </p>
        </div>

      </section>

      <section className="services__cta">
        <h2>Interested in our services?</h2>
        <p>
          Get in touch with us today to learn more or request a quote.
        </p>
      </section>

    </main>
  );
}