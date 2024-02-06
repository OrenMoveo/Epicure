import styles from "./RestaurantCard.module.scss";
import { Restaurant } from "../../types/types";
import useGetScreenWidth from "../../hooks/useGetWidthScreen";
import { UIConstants } from "../../shared/constants";
import { Link } from "react-router-dom";
interface RestaurantCardProps {
  restaurant: Restaurant;
  className?: string;
}

const RestaurantCard = ({ restaurant, className }: RestaurantCardProps) => {
  const screenWidth = useGetScreenWidth();
  const isTablet = screenWidth < UIConstants.sizes.tabletWidth;
  const ratingImageSrcString: string = `/src/assets/images/ratings/rating${restaurant.rating}.svg`;

  return (
    <Link
      to={`/restaurant/${restaurant.keyId}`}
      state={{ restaurant: restaurant }}
    >
      <button
        className={`${styles.restaurantCardContainer} ${
          className ? styles[className] : ""
        }`}
      >
        <div className={styles.restaurantCardImageContainer}>
          <img src={restaurant.pictureUrl} alt={restaurant.name} />
        </div>
        <div className={styles.restaurantCardContentLayout}>
          <div className={styles.restaurantCardContentContainer}>
            <p className={styles.restaurantName}>{restaurant.name}</p>
            <p className={styles.restaurantChefName}>{restaurant.chef}</p>
            {!isTablet && (
              <div className={styles.restaurantRatingContainer}>
                <img
                  src={ratingImageSrcString}
                  alt="rating"
                  className="rating-img"
                />
              </div>
            )}
          </div>
        </div>
      </button>
    </Link>
  );
};

export default RestaurantCard;
