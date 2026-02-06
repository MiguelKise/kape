const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">Larios Coffee</div>
      <nav className="navbar__links">
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#locations">Locations</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="#contact" className="navbar__cta">
        Order Ahead
      </a>
    </header>
  );
};

export default Navbar;
