import { useState, useEffect } from "react";

const FilterNavigation = ({ onFilterChange, categories = [] }) => {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [priceRange, setPriceRange] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    onFilterChange({
      isOpenNow,
      priceRange,
      selectedCategory,
    });
  }, [isOpenNow, priceRange, selectedCategory, onFilterChange]);

  const handleClearFilter = () => {
    setIsOpenNow(false);
    setPriceRange("");
    setSelectedCategory("");
    onFilterChange({
      isOpenNow: false,
      priceRange: "",
      selectedCategory: "",
    });
  };

  return (
    <nav className="filter-nav">
      <section className="filter-options">
        Filter by:
        <label className="custom-checkbox">
          <input
            type="checkbox"
            checked={isOpenNow}
            onChange={(e) => setIsOpenNow(e.target.checked)}
          />
          Open Now
        </label>
        <select className="custom-select"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="">All Prices</option>
          <option value="low">Under Rp20.000</option>
          <option value="mid">Rp20.000 - Rp50.000</option>
          <option value="high">Above Rp50.000</option>
        </select>
        <select className="custom-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </section>
      <button onClick={handleClearFilter} className="clear-btn">
        Clear Filter
      </button>
    </nav>
  );
};

export default FilterNavigation;
