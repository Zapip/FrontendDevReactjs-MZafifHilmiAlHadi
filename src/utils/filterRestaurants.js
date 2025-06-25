export const filterRestaurants = (restaurants, filters) => {
  const { isOpenNow, priceRange } = filters;

  return restaurants.filter((resto) => {
    if (isOpenNow && !resto.isOpen) return false;

    const low = resto.lowerprice;
    const high = resto.higherprice;

    if (priceRange === "low" && (low > 20 || high > 20)) return false;
    if (priceRange === "mid" && (low < 20 || high > 50)) return false;
    if (priceRange === "high" && high < 50) return false;

    return true;
  });
};
