import CategoryButton from './Components/CategoryButton'
import ProductCard from './Components/ProductCard'
import data from './data.json'
import { uniqueCategories } from './data'
import './App.css'
import { useState } from 'react'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Get total counts
  const totalProducts = data.length
  const totalCategories = uniqueCategories.length

  // Get filtered products count
  const filteredProducts = selectedCategory
    ? data.filter(product => product.category === selectedCategory)
    : data
  const filteredCount = filteredProducts.length

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div>
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
          />
        ))}
      </div>

      <div>Selected Category: {selectedCategory || 'All'}</div>
    </div>
  )
}

export default App
