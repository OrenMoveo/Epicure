import { useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { useFetch } from "../../hooks/useFetch";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
import { Restaurant } from "../../types/types";
import styles from "./RestaurantsPage.module.scss";

const RestaurantsPage = () => {
  const data = useFetch();
  const restaurantsData: Restaurant[] = data.restaurants;
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const isMobileOrTable = isMobile || isTablet;

  const [ratingFilterApplied, setRatingFilterApplied] = useState(false);
  const [priceRangeFilterApplied, setPriceRangeFilterApplied] = useState(false);
  const [rating, setRating] = useState(3);
  const [priceRange, setPriceRange] = useState([0, 330]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>(restaurantsData);
  const [activeFilterButton, setActiveFilterButton] = useState<number>(0);

  enum IndexType {
    ALL = 0,
    NEW = 1,
    MOST_POPULAR = 2,
    OPEN_NOW = 3,
    MAP_VIEW = 4,
  }

  const ratingPredicate = (restaurant: Restaurant, rating: number): boolean => {
    return restaurant.rating === rating;
  };

  const priceRangePredicate = (
    restaurant: Restaurant,
    priceRange: number[]
  ): boolean => {
    return (
      priceRange[0] <= restaurant.priceRange[0] &&
      restaurant.priceRange[1] <= priceRange[1]
    );
  };

  const newRestaurantPredicate = (restaurant: Restaurant): boolean => {
    return restaurant.newRestaurant === true;
  };

  const openNowPredicate = (restaurant: Restaurant): boolean => {
    return restaurant.openNow === true;
  };

  const mostPopularPredicate = (restaurant: Restaurant): boolean => {
    return restaurant.mostPopular === true;
  };

  const handleClick =
    (filterButtonIndex: number): React.MouseEventHandler<HTMLButtonElement> =>
    (event) => {
      event.preventDefault();
      setActiveFilterButton(filterButtonIndex);
      filterRestaurants(restaurantsData, filterButtonIndex);
    };

  const filterRestaurants = (
    restaurants: Restaurant[],
    filterButtonIndex: number
  ) => {
    switch (filterButtonIndex) {
      case IndexType.NEW:
        setRestaurants(
          restaurants.filter((restaurant) => newRestaurantPredicate(restaurant))
        );

        break;
      case IndexType.OPEN_NOW:
        setRestaurants(
          restaurants.filter((restaurant) => openNowPredicate(restaurant))
        );
        break;
      case IndexType.MOST_POPULAR:
        setRestaurants(
          restaurants.filter((restaurant) => mostPopularPredicate(restaurant))
        );
        break;
      default:
        setRestaurants(restaurantsData);
        break;
    }

    if (ratingFilterApplied) {
      restaurants.filter((restaurant) => ratingPredicate(restaurant, rating));
    }
    if (priceRangeFilterApplied) {
      restaurants.filter((restaurant) =>
        priceRangePredicate(restaurant, priceRange)
      );
    }
  };

  return (
    <section className={styles.RestaurantsPageSection}>
      <div className={styles.restaurantsPageLayout}>
        <div className={styles.restaurantsPageContentContainer}>
          {isMobileOrTable && (
            <div className={styles.restaurantPageTitleContainer}>
              <SectionTitle title={"RESTAURANTS"} />
            </div>
          )}

          <div className={styles.filtersContainer}>
            <button
              className={`${styles.filterButton} ${
                activeFilterButton === IndexType.ALL ? styles.activeButton : ""
              }`}
              onClick={handleClick(IndexType.ALL)}
            >
              All
            </button>
            <button
              className={`${styles.filterButton} ${
                activeFilterButton === IndexType.NEW ? styles.activeButton : ""
              }`}
              onClick={handleClick(IndexType.NEW)}
            >
              New
            </button>
            <button
              className={`${styles.filterButton} ${
                activeFilterButton === IndexType.MAP_VIEW
                  ? styles.activeButton
                  : ""
              }`}
              onClick={handleClick(IndexType.MAP_VIEW)}
            >
              Most Popular
            </button>
            <button
              className={`${styles.filterButton} ${
                activeFilterButton === IndexType.OPEN_NOW
                  ? styles.activeButton
                  : ""
              }`}
              onClick={handleClick(IndexType.OPEN_NOW)}
            >
              Open Now
            </button>
            {!isMobileOrTable && (
              <button
                className={`${styles.filterButton} ${
                  activeFilterButton === IndexType.MAP_VIEW
                    ? styles.activeButton
                    : ""
                }`}
              >
                Map View
              </button>
            )}
          </div>

          {!isMobileOrTable && (
            <div className={styles.dropDownsFiltersContainer}>
              <Dropdown filterTitle={"Distance"} distance={true} />
              <Dropdown filterTitle={"Price Range"} priceRange={true} />
              <Dropdown filterTitle={"Rating"} rating={true} />
            </div>
          )}

          <div className={styles.restaurantsCardsContainer}>
            {restaurants.map((restaurant) => (
              <RestaurantCard
                restaurant={restaurant}
                key={restaurant.keyId}
                className={"restaurantsPageCard"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantsPage;
