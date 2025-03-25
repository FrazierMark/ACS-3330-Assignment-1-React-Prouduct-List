const CategoryButton = ({ category, selectedCategory, onClick }) => {
  return (
    <button
      className={`category-button ${selectedCategory === category ? 'active' : ''}`}
      onClick={() => onClick(category)}
    >
      {category}
    </button>
  );
};

export default CategoryButton;

