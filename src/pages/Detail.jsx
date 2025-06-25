import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import formatPrice from "../utils/currencyFormat";
import RatingIcon from "../components/icons/Rating";

const Detail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const restaurantData = await api.getRestaurantById(id);
        const reviewData = await api.getReviews(id);
        setReviews(reviewData);
        setRestaurant(restaurantData);
      } catch (error) {
        console.error("Error loading detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetailData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!restaurant) return <p>Restaurant not found.</p>;

  return (
    <main className="container detail">
      <article className="detail-restaurant">
        <h1>{restaurant.name}</h1>
        <p>{restaurant.description}</p>
        <section className="detail-info">
          <span className="detail-location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin-icon lucide-map-pin"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p>{restaurant.location}</p>
          </span>
          <section className="detail-price">
            <RatingIcon rating={restaurant.rating} size={24} />
            <h3>
              {formatPrice(restaurant.lowerprice)}K-
              {formatPrice(restaurant.higherprice)}K
            </h3>
          </section>
          <p
            className={
              restaurant.isOpen ? "status bg-open" : "status bg-closed"
            }
          >
            <span className={restaurant.isOpen ? "open" : "closed"}></span>
            {restaurant.isOpen ? "OPEN NOW" : "CLOSED"}
          </p>
        </section>

        {restaurant.photos?.length > 0 && (
          <section
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            {restaurant.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`${restaurant.name} ${index + 1}`}
                style={{ width: "250px", borderRadius: "8px" }}
              />
            ))}
          </section>
        )}
      </article>

      <article className="detail-reviews">
        <h2>Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {reviews.map((review) => (
              <li
                key={review.id}
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src={review.avatar}
                  alt={review.name}
                  width="60"
                  height="60"
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <h3>{review.name}</h3>
                  <RatingIcon rating={review.rating} size={24} />
                  <p>{review.text}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </article>
    </main>
  );
};

export default Detail;
