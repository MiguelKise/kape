const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="section__inner contact">
        <div>
          <h2>Contact & Orders</h2>
          <p>
            Have a question or want to place a large order for an event?
            Reach out and we&apos;ll get back to you shortly.
          </p>
          <p className="contact__details">
            Phone: <a href="tel:+15551234567">(555) 123-4567</a><br />
            Email: <a href="mailto:hello@larioscoffee.com">hello@larioscoffee.com</a>
          </p>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="How can we help?" required />
          </div>
          <button type="submit" className="btn btn--primary btn--full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
