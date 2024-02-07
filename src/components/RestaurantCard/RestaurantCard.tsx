import styles from "./RestaurantCard.module.scss";
import { Restaurant } from "../../types/types";
import useGetScreenWidth from "../../hooks/useGetWidthScreen";
import { UIConstants, appRoutes } from "../../shared/constants";
import oneStarRating from "../../assets/images/ratings/rating1.svg";
import twoStarRating from "../../assets/images/ratings/rating2.svg";
import threeStarRating from "../../assets/images/ratings/rating3.svg";
import fourStarRating from "../../assets/images/ratings/rating4.svg";
import fiveStarRating from "../../assets/images/ratings/rating5.svg";
import { FC } from "react";
import { Link } from "react-router-dom";
interface RestaurantCardProps {
  restaurant: Restaurant;
  className?: string;
  cardWidth?: React.CSSProperties;
}

const RestaurantCard: FC<RestaurantCardProps> = (props) => {
  const screenWidth = useGetScreenWidth();
  const isTablet = screenWidth < UIConstants.sizes.tabletWidth;
  const ratingsMap = new Map<number, string>();
  ratingsMap.set(1, oneStarRating);
  ratingsMap.set(2, twoStarRating);
  ratingsMap.set(3, threeStarRating);
  ratingsMap.set(4, fourStarRating);
  ratingsMap.set(5, fiveStarRating);

  return (
    <Link
      to={appRoutes.getRestaurantRoute(props.restaurant.keyId)}
      state={{ restaurant: props.restaurant }}
    >
      <button
        className={styles.restaurantCardContainer}
        style={props.cardWidth}
      >
        <img src={props.restaurant.pictureUrl} alt={props.restaurant.name} />
        <div className={styles.restaurantCardContentLayout}>
          <div className={styles.restaurantCardContentContainer}>
            <p className={styles.restaurantName}>{props.restaurant.name}</p>
            <p className={styles.restaurantChefName}>{props.restaurant.chef}</p>
            {!isTablet && (
              <div className={styles.restaurantRatingContainer}>
                <img
                  src={ratingsMap.get(props.restaurant.rating)}
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
