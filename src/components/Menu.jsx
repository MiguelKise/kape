const Menu = ({ coffeeItems, pastryItems, onAddToCart }) => {
  return (
    <section id="menu" className="section">
      <div className="section__inner">
        <h2>Our Menu</h2>
        <p className="section__subtitle">A few of our favorites</p>

        <div className="menu-grid">
          <div className="menu-column">
            <h3>Coffee & Espresso</h3>
            <ul>
              {coffeeItems.map((item) => (
                <li key={item.id} className="menu-item">
                  <div>
                    <span className="menu-item__name">{item.name}</span>
                    <span className="menu-item__desc">{item.desc}</span>
                  </div>
                  <div className="menu-item__right">
                    <span className="menu-item__price">
                      ${item.price.toFixed(2)}
                    </span>
                    {onAddToCart && (
                      <button
                        type="button"
                        className="menu-item__add"
                        onClick={() => onAddToCart(item.id)}
                      >
                        Add
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="menu-column">
            <h3>Bakery</h3>
            <ul>
              {pastryItems.map((item) => (
                <li key={item.id} className="menu-item">
                  <div>
                    <span className="menu-item__name">{item.name}</span>
                    <span className="menu-item__desc">{item.desc}</span>
                  </div>
                  <div className="menu-item__right">
                    <span className="menu-item__price">
                      ${item.price.toFixed(2)}
                    </span>
                    {onAddToCart && (
                      <button
                        type="button"
                        className="menu-item__add"
                        onClick={() => onAddToCart(item.id)}
                      >
                        Add
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="menu__note">
          Full seasonal menu available in-store.
        </p>
      </div>
    </section>
  );
};

export default Menu;
