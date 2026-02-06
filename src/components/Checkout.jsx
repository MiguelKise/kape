const Checkout = ({
  step,
  cart,
  total,
  onBackToMenu,
  onUpdateQuantity,
  onRemoveItem,
  onPlaceOrder,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    if (!name || !cart.length) return;

    const details = {
      name,
      email: String(formData.get('email') || '').trim(),
      pickupTime: String(formData.get('pickupTime') || 'ASAP'),
      notes: String(formData.get('notes') || '').trim(),
    };

    onPlaceOrder(details);
  };

  if (step !== 'checkout') {
    return null;
  }

  return (
    <section id="checkout" className="section section--light">
      <div className="section__inner checkout">
        <div className="checkout__cart">
          <h2>Your cart</h2>
          {!cart.length && (
            <p className="checkout__empty">
              Your cart is empty. Add a drink from the menu to get started.
            </p>
          )}
          {!!cart.length && (
            <>
              <ul className="checkout__list">
                {cart.map((item) => (
                  <li key={item.id} className="checkout__row">
                    <div>
                      <div className="checkout__name">{item.name}</div>
                      <div className="checkout__meta">
                        ${item.price.toFixed(2)} each
                      </div>
                    </div>
                    <div className="checkout__controls">
                      <input
                        type="number"
                        min="0"
                        value={item.quantity}
                        className="checkout__qty"
                        onChange={(e) =>
                          onUpdateQuantity(
                            item.id,
                            Number(e.target.value || 0),
                          )
                        }
                      />
                      <button
                        type="button"
                        className="checkout__remove"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="checkout__total">
                <span>Total</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
            </>
          )}
          <button
            type="button"
            className="checkout__back"
            onClick={onBackToMenu}
          >
            ← Back to menu
          </button>
        </div>

        <form className="checkout__form" onSubmit={handleSubmit}>
          <h2>Pickup details</h2>
          <div className="field">
            <label htmlFor="checkout-name">Name for the order</label>
            <input
              id="checkout-name"
              name="name"
              type="text"
              placeholder="Jane Doe"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="checkout-email">Email (for receipt)</label>
            <input
              id="checkout-email"
              name="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>
          <div className="field">
            <label htmlFor="checkout-pickup">Pickup time</label>
            <select id="checkout-pickup" name="pickupTime" defaultValue="ASAP">
              <option value="ASAP">ASAP (10–15 minutes)</option>
              <option value="15">In 15 minutes</option>
              <option value="30">In 30 minutes</option>
              <option value="60">In 1 hour</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="checkout-notes">Order notes</label>
            <textarea
              id="checkout-notes"
              name="notes"
              rows={3}
              placeholder="Extra hot, less sweet, add an extra napkin…"
            />
          </div>

          <button
            type="submit"
            className="btn btn--primary btn--full"
            disabled={!cart.length}
          >
            Place order – ${total.toFixed(2)}
          </button>
          <p className="checkout__hint">
            This is a demo experience – no real payment will be taken.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Checkout;

