const Cart = ({ items }) => {
  // Calculate total
  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + price;
  }, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart ({items.length} items)</h2>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {items.map((item, index) => (
              <li key={index} className="cart-item">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">{item.price}</span>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
