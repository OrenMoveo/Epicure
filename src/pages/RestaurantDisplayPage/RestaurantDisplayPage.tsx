import { Restaurant } from "../../types/types";
import styles from "./RestaurantDisplayPage.module.scss";
import { useLocation } from "react-router-dom";

const RestaurantDisplayPage = () => {
  const location = useLocation();

  const { restaurant } = location.state as { restaurant: Restaurant };

  return (
    <div className={styles.RestaurantDisplayPageLayout}>
      <div className={styles.heroContainer}>
        <img src={restaurant.pictureUrl} alt="restaurant-img" />
      </div>
    </div>
  );
};

export default RestaurantDisplayPage;
