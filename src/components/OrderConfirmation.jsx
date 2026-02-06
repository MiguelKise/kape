const OrderConfirmation = ({ step, order, onNewOrder }) => {
  if (step !== 'confirmation') return null;

  if (!order) {
    return (
      <section id="order-confirmation" className="section">
        <div className="section__inner">
          <h2>No order yet</h2>
          <p className="order-confirmation__text">
            Add some drinks to your cart and place an order to see it here.
          </p>
          <button
            type="button"
            className="btn btn--outline"
            onClick={onNewOrder}
          >
            Browse drinks
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="order-confirmation" className="section">
      <div className="section__inner order-confirmation">
        <h2>Order placed ✨</h2>
        <p className="order-confirmation__text">
          Thanks, <strong>{order.name}</strong>! We&apos;re getting your drinks ready.
        </p>
        <p className="order-confirmation__text">
          Pickup time:{' '}
          <strong>
            {order.pickupTime === 'ASAP'
              ? 'ASAP (about 10–15 minutes)'
              : `In ${order.pickupTime} minutes`}
          </strong>
        </p>

        <ul className="order-confirmation__list">
          {order.items.map((item) => (
            <li key={item.id} className="order-confirmation__row">
              <span>
                {item.quantity} × {item.name}
              </span>
              <span>${(item.quantity * item.price).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <div className="order-confirmation__total">
          <span>Total</span>
          <strong>${order.total.toFixed(2)}</strong>
        </div>

        {order.notes && (
          <p className="order-confirmation__notes">
            Notes: {order.notes}
          </p>
        )}

        <button
          type="button"
          className="btn btn--primary"
          onClick={onNewOrder}
        >
          Start a new order
        </button>
      </div>
    </section>
  );
};

export default OrderConfirmation;

