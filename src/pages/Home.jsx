import RestaurantList from "../components/RestaurantList";
import FilterNavigation from "../components/FilterNavigation";

const Home = () => {
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
          <FilterNavigation />
        </article>
        <article className="container">
          <h1>All Restaurants</h1>
          <RestaurantList />
        </article>
      </main>
    </>
  );
};
export default Home;
