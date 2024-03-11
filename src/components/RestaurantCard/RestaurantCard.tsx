import styles from "./RestaurantCard.module.scss";
import { Restaurant } from "../../types/types";
import useGetScreenWidth from "../../hooks/useGetWidthScreen";
import { UIConstants, appRoutes } from "../../shared/constants";
import { Ratings } from "../../assets/images";
import { FC } from "react";
import { Link } from "react-router-dom";
interface RestaurantCardProps {
  restaurant: Restaurant;
  cardWidth?: React.CSSProperties;
}

const RestaurantCard: FC<RestaurantCardProps> = (props) => {
  const screenWidth = useGetScreenWidth();
  const isTablet = screenWidth < UIConstants.sizes.tabletWidth;
  const ratingsMap = new Map<number, string>();
  ratingsMap.set(1, Ratings.rating1);
  ratingsMap.set(2, Ratings.rating2);
  ratingsMap.set(3, Ratings.rating3);
  ratingsMap.set(4, Ratings.rating4);
  ratingsMap.set(5, Ratings.rating5);

  return (
    <Link to={appRoutes.restaurants.getRestaurantRoute(props.restaurant._id)}>
      <button className={styles.restaurantCardContainer} style={props.cardWidth}>
        <div className={styles.restaurantCardImageContainer}>
          <img src={props.restaurant.pictureUrl} alt={props.restaurant.name} />
        </div>
        <div className={styles.restaurantCardContentLayout}>
          <div className={styles.restaurantCardContentContainer}>
            <p className={styles.restaurantName}>{props.restaurant.name}</p>
            <p className={styles.restaurantChefName}>{props.restaurant.chef.name}</p>
            {!isTablet && (
              <div className={styles.restaurantRatingContainer}>
                <img src={ratingsMap.get(props.restaurant.rating)} alt="rating" className="rating-img" />
              </div>
            )}
          </div>
        </div>
      </button>
    </Link>
  );
};

export default RestaurantCard;
