const Locations = () => {
  return (
    <section id="locations" className="section section--light">
      <div className="section__inner">
        <h2>Visit Us</h2>
        <div className="locations-grid">
          <div className="location-card">
            <h3>Downtown</h3>
            <p>123 Main Street<br />Your City, ST 12345</p>
            <p>Mon–Fri: 7am – 7pm<br />Sat–Sun: 8am – 6pm</p>
          </div>
          <div className="location-card">
            <h3>Riverside</h3>
            <p>456 River Road<br />Your City, ST 12345</p>
            <p>Mon–Fri: 7am – 6pm<br />Sat–Sun: 8am – 5pm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
