import CategoryButton from './Components/CategoryButton'
import ProductCard from './Components/ProductCard'
import data from './data.json'
import { uniqueCategories } from './data'
import './App.css'
import { useState, useMemo } from 'react'
import Cart from './Components/Cart'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [shoppingCart, setShoppingCart] = useState([])

  // Get total counts
  const totalProducts = data.length
  const totalCategories = uniqueCategories.length

  // Get filtered products count
  const filteredProducts = selectedCategory
    ? data.filter(product => product.category === selectedCategory)
    : data
  const filteredCount = filteredProducts.length

  // Memoize the total units calculation
  const totalUnitsInInventory = useMemo(() => {
    console.log('Calculating total units')
    return data.reduce((acc, p) => acc + p.units, 0)
  }, [data])

  // Memoize the total cost calculation
  const totalCostOfInventory = useMemo(() => {
    console.log('Calculating total cost')
    return data.reduce((acc, p) => {
      // Handle the price string by removing '$' and converting to number
      const priceValue = parseFloat(p.price.replace('$', ''))
      return acc + (p.units * priceValue)
    }, 0)
  }, [data])

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  // Add to cart function
  const addToCart = (product) => {
    setShoppingCart([...shoppingCart, product])
  }

  return (
    <div className="app-container">
      <div className="stats-container">
        <div className="stats-item">
          <span className="stats-label">Total Products:</span>
          <span className="stats-value">{totalProducts}</span>
        </div>
        <div className="stats-item">
          <span className="stats-label">Total Categories:</span>
          <span className="stats-value">{totalCategories}</span>
        </div>
        <div className="stats-item">
          <span className="stats-label">Showing:</span>
          <span className="stats-value">
            {filteredCount} {selectedCategory ? `in ${selectedCategory} ` : ' products'}
          </span>
        </div>
      </div>

      <div className="content-area">
        <div className="product-section">
          <div className="category-container">
            <CategoryButton
              category="All"
              selectedCategory={selectedCategory}
              onClick={() => handleCategoryClick(null)}
            />
            {uniqueCategories.map(category => (
              <CategoryButton
                key={category}
                category={category}
                selectedCategory={selectedCategory}
                onClick={handleCategoryClick}
              />
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>

        <div className="cart-section">
          <Cart items={shoppingCart} />
        </div>
      </div>

      <div className="stats-container">
        <div className="stats-item">
          <span className="stats-label">Total Units in Inventory:</span>
          <span className="stats-value">{totalUnitsInInventory}</span>
        </div>
        <div className="stats-item">
          <span className="stats-label">Total Value of Inventory:</span>
          <span className="stats-value">${totalCostOfInventory.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default App
