const ProductCard = ({ product, onAddToCart }) => {
  const { name, category, price, rating, description, units } = product;

  return (
    <div className="product-card">
      <h3 className="product-name">{name}</h3>
      <div className="product-category">{category}</div>
      <div className="product-price">{price}</div>
      <div className="product-rating">Rating: {rating} ⭐</div>
      <p className="product-description">{description}</p>
      <div className="product-units">Units in stock: {units}</div>

      <button
        className="add-to-cart-button"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;