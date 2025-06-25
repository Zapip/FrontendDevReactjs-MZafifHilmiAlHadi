import { Link } from "react-router-dom";
import RatingIcon from "./icons/Rating";
import formatPrice from "../utils/currencyFormat";

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
      <RatingIcon rating={data.rating} size={24} />
      <section className="card-details">
        <section className="card-info">
          <p>{data.categories[0]}</p>•
          <p>
            {formatPrice(data.lowerprice)}K-{formatPrice(data.higherprice)}K
          </p>
        </section>
        <p className={data.isOpen ? "status bg-open" : "status bg-closed"}>
          <span className={data.isOpen ? "open" : "closed"}></span>
          {data.isOpen ? "OPEN NOW" : "CLOSED"}
        </p>
      </section>

      <Link className="link" to={`/restaurant/${data.id}`}>
        Learn More
      </Link>
    </section>
  );
}

export default RestaurantCard;
