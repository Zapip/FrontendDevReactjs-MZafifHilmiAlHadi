import { Link } from "react-router-dom";

function RestaurantCard({ data }) {
  return (
    <section className="card">
      <img
        src={
          data.photos[0] ||
          "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
        }
        alt={data.name}
        width="300"
        height="200"
      />
      <h3>{data.name}</h3>
      <p>Rating: {data.rating}</p>
      <section>
        <section className="card-info">
          <p>{data.categories}</p>
          <p>Harga: {data.price}</p>
        </section>
        <p className="status">
          <span className={data.isOpen ? "open" : "close"}></span>
          Status: {data.isOpen ? "OPEN NOW" : "CLOSED"}
        </p>
      </section>
      <Link className="link" to={`/restaurant/${data.id}`}>
        Learn More
      </Link>
    </section>
  );
}

export default RestaurantCard;
