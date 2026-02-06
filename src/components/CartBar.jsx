const CartBar = ({ count, total, onCheckout, disabled }) => {
  return (
    <div className="cart-bar">
      <div className="cart-bar__summary">
        <span className="cart-bar__label">Your order</span>
        {count ? (
          <span className="cart-bar__count">
            {count} item{count === 1 ? '' : 's'}
          </span>
        ) : (
          <span className="cart-bar__empty">No items yet</span>
        )}
        <span className="cart-bar__total">
          ${total.toFixed(2)}
        </span>
      </div>
      <button
        type="button"
        className="btn btn--outline cart-bar__button"
        disabled={disabled}
        onClick={onCheckout}
      >
        {disabled ? 'Add drinks to start' : 'Review & checkout'}
      </button>
    </div>
  );
};

export default CartBar;

