const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1>Awaken Your Day at Larios Coffee</h1>
        <p>
          Small-batch roasted beans, handcrafted drinks, and a cozy space to slow down.
        </p>
        <div className="hero__actions">
          <a href="#menu" className="btn btn--primary">View Menu</a>
          <a href="#locations" className="btn btn--outline">Find Us</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
