import { Restaurant } from "../../types/types";
import styles from "./RestaurantDisplayPage.module.scss";
import { useLocation } from "react-router-dom";
import clockIcon from "../../assets/images/clockIcon.svg";
import { useState } from "react";
import DishCard from "../../components/DishCard/DishCard";
import useIsTablet from "../../hooks/useIsTablet";
import useIsMobile from "../../hooks/useIsMobile";

const RestaurantDisplayPage = () => {
  const pagePriceTextContainerGap = 2;
  const mobileDishCardWidth = 335;
  const mobileDishImageHeight = 211.9;
  const mobileDishContentContainerHeight = 168;
  const mobileLineWidth = 256;
  const mobilePriceContainerGap = 12;
  const desktopDishCardWidth = 272;
  const desktopDishImageHeight = 173.23;
  const desktopDishContentContainerHeight = 241;
  const desktopLineWidth = 82.5;
  const desktopPriceContainerGap = 12;
  const desktopDishContentContainerGap = 8;
  const desktopDishTitleStyling: React.CSSProperties = {
    width: "auto",
    fontSize: "24px",
    fontWeight: "400",
    lineHeight: "26px",
    letterSpacing: "2.6700000762939453px",
    textAlign: "center",
  };

  const desktopDishDescriptionStyling: React.CSSProperties = {
    width: "auto",
    fontSize: "20px",
    fontWeight: "200",
    lineHeight: "24px",
    letterSpacing: "1.9700000286102295px",
    textAlign: "center",
    padding: "0px 25px",
  };
  const desktopDishPriceStyling: React.CSSProperties = {
    width: "auto",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "30px",
    letterSpacing: "1.9700000286102295px",
    textAlign: "center",
  };

  const CurrencyIconSize: React.CSSProperties = {
    width: "9px",
    height: "19px",
  };
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  enum IndexType {
    BREAKFAST_INDEX = 0,
    LUNCH_INDEX = 1,
    DINNER_INDEX = 2,
  }

  const [activeFilterButton, setActiveFilterButton] = useState(IndexType.BREAKFAST_INDEX);
  const location = useLocation();
  const { restaurant } = location.state as { restaurant: Restaurant };

  const handleClick = (filterButtonIndex: number): void => {
    setActiveFilterButton(filterButtonIndex);
  };

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
                    cardWith={{ width: mobileDishCardWidth }}
                    dishImageSize={{
                      width: mobileDishCardWidth,
                      height: mobileDishImageHeight,
                    }}
                    dishContentLayoutStyling={{
                      height: mobileDishContentContainerHeight,
                    }}
                    shouldDisplayRightSideLine={true}
                    lineStyling={{ width: mobileLineWidth }}
                    dishPriceContainerStyling={{
                      gap: mobilePriceContainerGap,
                    }}
                    priceTextContainerStyling={{
                      gap: pagePriceTextContainerGap,
                    }}
                  />
                ) : (
                  <DishCard
                    key={dish.keyId}
                    dish={dish}
                    cardWith={{ width: desktopDishCardWidth }}
                    dishImageSize={{
                      width: desktopDishCardWidth,
                      height: desktopDishImageHeight,
                    }}
                    dishContentLayoutStyling={{
                      width: desktopDishCardWidth,
                      height: desktopDishContentContainerHeight,
                      gap: desktopDishContentContainerGap,
                    }}
                    shouldDisplayRightSideLine={true}
                    shouldDisplayLeftSideLine={true}
                    lineStyling={{ width: desktopLineWidth }}
                    dishPriceContainerStyling={{
                      gap: desktopPriceContainerGap,
                    }}
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
