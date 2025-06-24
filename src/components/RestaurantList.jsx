import { useState, useEffect } from "react";
import { api } from "../services/api";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    api
      .getRestaurants()
      .then(setRestaurants)
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <section className="restaurant-list">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} data={restaurant} />
      ))}
    </section>
  );
};
export default RestaurantList;
