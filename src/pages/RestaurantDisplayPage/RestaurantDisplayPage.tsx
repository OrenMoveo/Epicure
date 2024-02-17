import styles from "./RestaurantDisplayPage.module.scss";
import { useParams } from "react-router-dom";
import clockIcon from "../../assets/images/clockIcon.svg";
import { useState } from "react";
import DishCard from "../../components/DishCard/DishCard";
import useIsTablet from "../../hooks/useIsTablet";
import useIsMobile from "../../hooks/useIsMobile";
import { CurrencyIconSize, desktopDishDescriptionStyling, desktopDishPriceStyling, desktopDishTitleStyling, desktopStyling, mobileStyling } from "./DishCardStyling";
import useFetchRestaurant from "../../hooks/useFetchRestaurant";

const RestaurantDisplayPage = () => {
  const { keyId } = useParams();
  const restaurant = useFetchRestaurant(keyId);

  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  enum IndexType {
    BREAKFAST_INDEX = 0,
    LUNCH_INDEX = 1,
    DINNER_INDEX = 2,
  }

  const [activeFilterButton, setActiveFilterButton] = useState(IndexType.BREAKFAST_INDEX);

  const handleClick = (filterButtonIndex: number): void => {
    setActiveFilterButton(filterButtonIndex);
  };

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.RestaurantDisplayPageLayout}>
      <div className={styles.heroContainer}>
        <img src={restaurant.pictureUrl} alt={restaurant.name} />
      </div>
      <section className={styles.restaurantPageContentSection}>
        <div className={styles.restaurantPageContentLayout}>
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
                className={`${styles.filterButton} ${activeFilterButton === IndexType.BREAKFAST_INDEX ? styles.activeButton : ""}`}
                onClick={() => handleClick(IndexType.BREAKFAST_INDEX)}
              >
                Breakfast
              </button>
              <button
                className={`${styles.filterButton} ${activeFilterButton === IndexType.LUNCH_INDEX ? styles.activeButton : ""}`}
                onClick={() => handleClick(IndexType.LUNCH_INDEX)}
              >
                Lunch
              </button>
              <button
                className={`${styles.filterButton} ${activeFilterButton === IndexType.DINNER_INDEX ? styles.activeButton : ""}`}
                onClick={() => handleClick(IndexType.DINNER_INDEX)}
              >
                Dinner
              </button>
            </div>
            <div className={styles.dishesDisplayContainer}>
              {restaurant.restaurantDishes.map((dish) =>
                isMobile || isTablet ? (
                  <DishCard
                    key={dish.keyId}
                    dish={dish}
                    cardContainerStyling={mobileStyling.dishCardWidth}
                    dishImageSize={mobileStyling.dishImage}
                    dishContentLayoutStyling={mobileStyling.dishContentLayout}
                    shouldDisplayRightSideLine={true}
                    lineStyling={mobileStyling.lineWidth}
                    dishPriceContainerStyling={mobileStyling.priceContainerGap}
                    dishPriceTextStyling={mobileStyling.priceTextContainerStyling}
                    currencyIconSize={mobileStyling.currencyIconSize}
                  />
                ) : (
                  <DishCard
                    key={dish.keyId}
                    dish={dish}
                    cardContainerStyling={desktopStyling.dishCardWidth}
                    dishImageSize={desktopStyling.dishImage}
                    dishContentLayoutStyling={desktopStyling.dishContentLayout}
                    shouldDisplayRightSideLine={true}
                    shouldDisplayLeftSideLine={true}
                    lineStyling={desktopStyling.lineWidth}
                    dishPriceContainerStyling={desktopStyling.priceContainerGap}
                    dishTitleStyling={desktopDishTitleStyling}
                    dishDescriptionStyling={desktopDishDescriptionStyling}
                    dishPriceTextStyling={desktopDishPriceStyling}
                    currencyIconSize={CurrencyIconSize}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantDisplayPage;
