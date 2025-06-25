import StarFilled from "./StarFilled";
import StarOutline from "./StarOutline";

const StarHalf = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <defs>
      <clipPath id="half">
        <rect x="0" y="0" width="12" height="24" />
      </clipPath>
    </defs>
    <StarOutline size={size} />
    <g clipPath="url(#half)">
      <StarFilled size={size} />
    </g>
  </svg>
);
export default StarHalf;
