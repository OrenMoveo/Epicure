import styles from "./RestaurantCard.module.scss";
import { Restaurant } from "../../types/types";
import useGetScreenWidth from "../../hooks/useGetWidthScreen";
import { UIConstants } from "../../shared/constants";
import oneStarRating from "../../assets/images/ratings/rating1.svg";
import twoStarRating from "../../assets/images/ratings/rating2.svg";
import threeStarRating from "../../assets/images/ratings/rating3.svg";
import fourStarRating from "../../assets/images/ratings/rating4.svg";
import fiveStarRating from "../../assets/images/ratings/rating5.svg";

interface RestaurantCardProps {
  restaurant: Restaurant;
  className?: string;
}

const RestaurantCard = ({ restaurant, className }: RestaurantCardProps) => {
  const screenWidth = useGetScreenWidth();
  const isTablet = screenWidth < UIConstants.sizes.tabletWidth;
  const ratingsMap = new Map<number, string>();
  ratingsMap.set(1, oneStarRating);
  ratingsMap.set(2, twoStarRating);
  ratingsMap.set(3, threeStarRating);
  ratingsMap.set(4, fourStarRating);
  ratingsMap.set(5, fiveStarRating);

  return (
    <button className={`${styles.restaurantCardContainer} ${className ?? ""}`}>
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
                src={ratingsMap.get(restaurant.rating)}
                alt="rating"
                className="rating-img"
              />
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default RestaurantCard;
