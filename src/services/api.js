const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getRestaurants = async () => {
  try {
    const response = await fetch(`${BASE_URL}/restaurants`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};

const getRestaurantById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/restaurants/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching restaurant with id ${id}:`, error);
    throw error;
  }
};

const getRiviews = async (restaurantId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/reviews?restaurantId=${restaurantId}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error(
      `Error fetching reviews for restaurant with id ${restaurantId}:`,
      error
    );
    throw error;
  }
};

export const api = {
  getRestaurants,
  getRestaurantById,
  getRiviews,
};
