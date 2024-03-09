import styles from "./ChefsRestaurantCard.module.scss";
import { Restaurant } from "../../types/types";
import { Link } from "react-router-dom";
import { FC } from "react";
import { appRoutes } from "../../shared/constants";
interface ChefsRestaurantCardProps {
  restaurant: Restaurant ;
}

const ChefsRestaurantCard :FC<ChefsRestaurantCardProps>= ({ restaurant }) => {
  return (
    <Link to={appRoutes.restaurants.getRestaurantRoute(restaurant._id)}>
    <button className={styles.cardContainer}>
      <div className={styles.cardImageContainer}>
        <img src={restaurant.pictureUrl} alt={restaurant.name} />
      </div>
      <div className={styles.restaurantContentLayout}>
        <div className={styles.restaurantContentContainer}>
          <p className={styles.restaurantTitle}>{restaurant.name}</p>
        </div>
      </div>
    </button>
    </Link>
  );
};

export default ChefsRestaurantCard;
