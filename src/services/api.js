const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getRestaurants = async () => {
  try {
    const response = await fetch(`${BASE_URL}/restaurants`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};

const getRestaurantById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/restaurants/${id}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching restaurant with id ${id}:`, error);
    throw error;
  }
};

const getReviews = async (restaurantId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/reviews?restaurantId=${restaurantId}`
    );

    if (!response.ok) {
      console.log(
        `There are no reviews on restaurant with id ${restaurantId}:`,
        response.status
      );
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error(
      `Error fetching reviews for restaurant with id ${restaurantId}:`,
      error
    );
    return [];
  }
};

const getRestaurantsByCategory = async (category) => {
  try {
    const response = await fetch(
      `${BASE_URL}/restaurants?categories=${category}`
    );
    return await response.json();
  } catch (error) {
    console.error(`Error fetching restaurants by category:`, error);
    throw error;
  }
};

export const api = {
  getRestaurants,
  getRestaurantById,
  getReviews,
  getRestaurantsByCategory,
};
