import { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
import { Restaurant } from "../../types/types";
import styles from "./RestaurantsPage.module.scss";
import { AppDispatch, RootState } from "../../reduxToolkit/store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantData } from "../../reduxToolkit/thunks/restaurantThunk";

const RestaurantsPage = () => {
  const [ratingFilterApplied, setRatingFilterApplied] = useState(false);
  const [priceRangeFilterApplied, setPriceRangeFilterApplied] = useState(false);
  const [rating, setRating] = useState(3);
  const [priceRange, setPriceRange] = useState([0, 330]);
  const [activeFilterButton, setActiveFilterButton] = useState<number>(0);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>();

  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const isMobileOrTable = isMobile || isTablet;
  const restaurantCardWidth = 335;

  const dispatch = useDispatch<AppDispatch>();
  const { allRestaurants } = useSelector((state: RootState) => state.restaurantsPage);

  useEffect(() => {
    dispatch(fetchRestaurantData());
  }, [dispatch]);

  useEffect(() => {
    setFilteredRestaurants(allRestaurants);
  }, [allRestaurants]);

  enum IndexType {
    ALL_RESTAURANTS = 0,
    NEW_RESTAURANTS = 1,
    MOST_POPULAR_RESTAURANTS = 2,
    OPEN_NOW_RESTAURANTS = 3,
    MAP_VIEW = 4,
  }

  const ratingPredicate = (restaurant: Restaurant, rating: number): boolean => {
    return restaurant.rating === rating;
  };

  const priceRangePredicate = (restaurant: Restaurant, priceRange: number[]): boolean => {
    return priceRange[0] <= restaurant.priceRange[0] && restaurant.priceRange[1] <= priceRange[1];
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

  const handleClick = (filterButtonIndex: number) => {
    setActiveFilterButton(filterButtonIndex);
    filterRestaurants(filterButtonIndex);
  };

  const filterRestaurants = (filterButtonIndex: number) => {
    switch (filterButtonIndex) {
      case IndexType.NEW_RESTAURANTS:
        setFilteredRestaurants(allRestaurants.filter((restaurant) => newRestaurantPredicate(restaurant)));
        break;
      case IndexType.OPEN_NOW_RESTAURANTS:
        setFilteredRestaurants(allRestaurants.filter((restaurant) => openNowPredicate(restaurant)));
        break;
      case IndexType.MOST_POPULAR_RESTAURANTS:
        setFilteredRestaurants(allRestaurants.filter((restaurant) => mostPopularPredicate(restaurant)));
        break;
      default:
        setFilteredRestaurants(allRestaurants);
        break;
    }

    if (ratingFilterApplied) {
      setFilteredRestaurants((prevRestaurants) => prevRestaurants?.filter((restaurant) => ratingPredicate(restaurant, restaurant.rating)));
    }
    if (priceRangeFilterApplied) {
      setFilteredRestaurants((prevRestaurants) => prevRestaurants?.filter((restaurant) => priceRangePredicate(restaurant, restaurant.priceRange)));
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
              className={`${styles.filterButton} ${activeFilterButton === IndexType.ALL_RESTAURANTS ? styles.activeButton : ""}`}
              onClick={() => handleClick(IndexType.ALL_RESTAURANTS)}
            >
              All
            </button>
            <button
              className={`${styles.filterButton} ${activeFilterButton === IndexType.NEW_RESTAURANTS ? styles.activeButton : ""}`}
              onClick={() => handleClick(IndexType.NEW_RESTAURANTS)}
            >
              New
            </button>
            <button
              className={`${styles.filterButton} ${activeFilterButton === IndexType.MOST_POPULAR_RESTAURANTS ? styles.activeButton : ""}`}
              onClick={() => handleClick(IndexType.MOST_POPULAR_RESTAURANTS)}
            >
              Most Popular
            </button>
            <button
              className={`${styles.filterButton} ${activeFilterButton === IndexType.OPEN_NOW_RESTAURANTS ? styles.activeButton : ""}`}
              onClick={() => handleClick(IndexType.OPEN_NOW_RESTAURANTS)}
            >
              Open Now
            </button>
            {!isMobileOrTable && <button className={`${styles.filterButton} ${activeFilterButton === IndexType.MAP_VIEW ? styles.activeButton : ""}`}>Map View</button>}
          </div>

          {!isMobileOrTable && (
            <div className={styles.dropDownsFiltersContainer}>
              <Dropdown filterTitle={"Distance"} distance={true} />
              <Dropdown filterTitle={"Price Range"} priceRange={true} />
              <Dropdown filterTitle={"Rating"} rating={true} />
            </div>
          )}

          <div className={styles.restaurantsCardsContainer}>
            {filteredRestaurants?.map((restaurant) => (
              <RestaurantCard restaurant={restaurant} key={restaurant._id} cardWidth={{ width: `${restaurantCardWidth}px` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantsPage;
