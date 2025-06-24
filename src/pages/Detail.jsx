import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { useEffect, useState } from "react";

const Detail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  // const [reviews, setReviews] = useState([]);

  useEffect(() => {
    try {
      api.getRestaurantById(id).then((data) => {
        setRestaurant(data);
        return api.getRiviews(id);
      });
    } catch (error) {
      console.error("Error fetching restaurant details:", error);
      return;
    }
  }, [id]);

  return (
    <div className="detail">
      <h1>{restaurant.name}</h1>
      <p>Rating: ⭐ {restaurant.rating}</p>

      {restaurant.photos?.[0] && (
        <img
          src={restaurant.photos[0]}
          alt={restaurant.name}
          style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }}
        />
      )}

      {/* <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {reviews.map((review) => (
            <li key={review.id} style={{ marginBottom: "1rem" }}>
              <img
                src={review.avatar}
                alt={review.reviewer}
                width="50"
                height="50"
                style={{ borderRadius: "50%", marginRight: "0.5rem" }}
              />
              <p>
                <strong>{review.reviewer}</strong> - ⭐ {review.rating}
              </p>
              <p>{review.text}</p>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default Detail;
