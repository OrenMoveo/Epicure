import { useState, useRef } from "react";
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
  const buttonRefs: React.MutableRefObject<HTMLButtonElement | null>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [ratingFilterApplied, setRatingFilterApplied] = useState(false);
  const [priceRangeFilterApplied, setPriceRangeFilterApplied] = useState(false);
  const [rating, setRating] = useState(3);
  const [priceRange, setPriceRange] = useState([0, 330]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>(restaurantsData);
  const [activeFilterButton, setActiveFilterButton] = useState<number>(0);

  const ALL_INDEX = 0;
  const NEW_INDEX = 1;
  const MOST_POPULAR_INDEX = 2;
  const OPEN_NOW_INDEX = 3;
  const MAP_VIEW_INDEX = 4;

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
    return restaurant.new === true;
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
      case NEW_INDEX:
        setRestaurants(
          restaurants.filter((restaurant) => newRestaurantPredicate(restaurant))
        );

        break;
      case OPEN_NOW_INDEX:
        setRestaurants(
          restaurants.filter((restaurant) => openNowPredicate(restaurant))
        );
        break;
      case MOST_POPULAR_INDEX:
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
              ref={buttonRefs[ALL_INDEX]}
              className={`${styles.filterButton} ${
                activeFilterButton === ALL_INDEX ? styles.activeButton : ""
              }`}
              onClick={handleClick(ALL_INDEX)}
            >
              All
            </button>
            <button
              ref={buttonRefs[NEW_INDEX]}
              className={`${styles.filterButton} ${
                activeFilterButton === NEW_INDEX ? styles.activeButton : ""
              }`}
              onClick={handleClick(NEW_INDEX)}
            >
              New
            </button>
            <button
              ref={buttonRefs[MOST_POPULAR_INDEX]}
              className={`${styles.filterButton} ${
                activeFilterButton === MOST_POPULAR_INDEX
                  ? styles.activeButton
                  : ""
              }`}
              onClick={handleClick(MOST_POPULAR_INDEX)}
            >
              Most Popular
            </button>
            <button
              ref={buttonRefs[OPEN_NOW_INDEX]}
              className={`${styles.filterButton} ${
                activeFilterButton === OPEN_NOW_INDEX ? styles.activeButton : ""
              }`}
              onClick={handleClick(OPEN_NOW_INDEX)}
            >
              Open Now
            </button>
            {!isMobileOrTable && (
              <button
                className={`${styles.filterButton} ${
                  activeFilterButton === MAP_VIEW_INDEX
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
