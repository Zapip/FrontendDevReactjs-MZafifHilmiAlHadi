import RestaurantList from "../components/RestaurantList";
import FilterNavigation from "../components/FilterNavigation";
import { useState, useEffect, useCallback } from "react";
import { api } from "../services/api";
import { filterRestaurants } from "../utils/filterRestaurants";

const Home = () => {
  const [, setRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [, setFilters] = useState({
    isOpenNow: false,
    priceRange: "",
    selectedCategory: "",
  });

  useEffect(() => {
    api.getRestaurants().then((data) => {
      setRestaurants(data);
      setFilteredList(data);
    });
  }, []);

  const handleFilterChange = useCallback(async (newFilters) => {
    setFilters(newFilters);

    let baseData = [];

    if (newFilters.selectedCategory) {
      baseData = await api.getRestaurantsByCategory(
        newFilters.selectedCategory
      );
    } else {
      baseData = await api.getRestaurants();
    }

    const result = filterRestaurants(baseData, {
      isOpenNow: newFilters.isOpenNow,
      priceRange: newFilters.priceRange,
    });

    setRestaurants(baseData);
    setFilteredList(result);
  }, []);

  return (
    <>
      <header className="container">
        <h1>Restaurants</h1>
        <p>
          Discover the best restaurants in your area. Browse through our
          extensive list of eateries, read reviews, and find your next meal.
        </p>
      </header>

      <main className="home">
        <article>
          <FilterNavigation
            onFilterChange={handleFilterChange}
            categories={["Indonesian", "Japanese", "Chinese", "Western"]}
          />
        </article>

        <article className="container">
          <h2>All Restaurants</h2>
          <RestaurantList restaurants={filteredList} />
        </article>

        <article className="container load-more">
          <button>LOAD MORE</button>
        </article>
      </main>
    </>
  );
};

export default Home;
