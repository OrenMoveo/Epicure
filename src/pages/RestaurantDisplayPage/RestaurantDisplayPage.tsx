import { Restaurant } from "../../types/types";
import styles from "./RestaurantDisplayPage.module.scss";
import { useLocation } from "react-router-dom";
import clockIcon from "../../assets/images/clockIcon.svg";
import { useState } from "react";
import DishCard from "../../components/DishCard/DishCard";

const RestaurantDisplayPage = () => {
  const BREAKFAST_INDEX = 0;
  const LUNCH_INDEX = 1;
  const DINNER_INDEX = 2;

  const [activeFilterButton, setActiveFilterButton] = useState(BREAKFAST_INDEX);
  const location = useLocation();
  const { restaurant } = location.state as { restaurant: Restaurant };

  const handleClick =
    (filterButtonIndex: number): React.MouseEventHandler<HTMLButtonElement> =>
    (event) => {
      event.preventDefault();
      setActiveFilterButton(filterButtonIndex);
    };

  return (
    <div className={styles.RestaurantDisplayPageLayout}>
      <div className={styles.heroContainer}>
        <img src={restaurant.pictureUrl} alt="restaurant-img" />
      </div>
      <section className={styles.restaurantPageContentSection}>
        <div className={styles.restaurantPageContentContainer}>
          <p className={styles.restaurantName}>{restaurant.name}</p>
          <p className={styles.restaurantChef}>{restaurant.chef}</p>
          <div className={styles.openNowContainer}>
            <div className={styles.clockIconContainer}>
              <img src={clockIcon} alt="clock-icon" />
            </div>
            <p className={styles.openNowText}>Open now</p>
          </div>
          <div className={styles.filtersContainer}>
            <button
              className={`${styles.filterButton} ${
                activeFilterButton === BREAKFAST_INDEX
                  ? styles.activeButton
                  : ""
              }`}
              onClick={handleClick(BREAKFAST_INDEX)}
            >
              Breakfast
            </button>
            <button
              className={`${styles.filterButton} ${
                activeFilterButton === LUNCH_INDEX ? styles.activeButton : ""
              }`}
              onClick={handleClick(LUNCH_INDEX)}
            >
              Lunch
            </button>
            <button
              className={`${styles.filterButton} ${
                activeFilterButton === DINNER_INDEX ? styles.activeButton : ""
              }`}
              onClick={handleClick(DINNER_INDEX)}
            >
              Dinner
            </button>
          </div>
          <div className={styles.dishesDisplayContainer}>
            {restaurant.restaurantDishes.map((dish) => (
              <DishCard
                key={dish.keyId}
                dish={dish}
                className={"restaurantDisplayDishCard"}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantDisplayPage;