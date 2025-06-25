import StarFilled from "./StarFilled";
import StarHalf from "./StarHalf";
import StarOutline from "./StarOutline";

const RatingIcon = ({ rating, size }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <section className="rating">
      {[...Array(fullStars)].map((_, i) => (
        <StarFilled key={`full-${i}`} size={size} />
      ))}

      {hasHalfStar && <StarHalf key="half" size={size} />}

      {[...Array(emptyStars)].map((_, i) => (
        <StarOutline key={`empty-${i}`} size={size} />
      ))}
    </section>
  );
};

export default RatingIcon;
