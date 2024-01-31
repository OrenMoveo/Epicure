import React from "react";
import styles from "./ChefsRestaurantCard.module.scss";
import { Restaurant } from "../../types/types";
interface ChefsRestaurantCardProps {
  restaurant: Restaurant | undefined;
}
const ChefsRestaurantCard = ({ restaurant }: ChefsRestaurantCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImageContainer}>
        <img src={restaurant?.pictureUrl} alt={restaurant?.name} />
      </div>
      <div className={styles.restaurantContentLayout}>
        <div className={styles.restaurantContentContainer}>
          <p className={styles.restaurantTitle}>{restaurant?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ChefsRestaurantCard;
