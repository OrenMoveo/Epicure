import { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { useFetch } from "../../hooks/useFetch";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
import { Restaurant } from "../../types/types";
import styles from "./RestaurantsPage.module.scss";
import { getRestaurants } from "../../apiService/restaurantApiService";

const RestaurantsPage = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const isMobileOrTable = isMobile || isTablet;
  const restaurantCardWidth = 335;

  const [ratingFilterApplied, setRatingFilterApplied] = useState(false);
  const [priceRangeFilterApplied, setPriceRangeFilterApplied] = useState(false);
  const [rating, setRating] = useState(3);
  const [priceRange, setPriceRange] = useState([0, 330]);
  const [restaurantsData, setRestaurantsData] = useState<Restaurant[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>(restaurantsData);
  const [activeFilterButton, setActiveFilterButton] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRestaurants();
        setRestaurantsData(data);
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

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
        setRestaurants(restaurantsData.filter((restaurant) => newRestaurantPredicate(restaurant)));
        break;
      case IndexType.OPEN_NOW_RESTAURANTS:
        setRestaurants(restaurantsData.filter((restaurant) => openNowPredicate(restaurant)));
        break;
      case IndexType.MOST_POPULAR_RESTAURANTS:
        setRestaurants(restaurantsData.filter((restaurant) => mostPopularPredicate(restaurant)));
        break;
      default:
        setRestaurants(restaurantsData);
        break;
    }

    if (ratingFilterApplied) {
      setRestaurants((prevRestaurants) => prevRestaurants.filter((restaurant) => ratingPredicate(restaurant, restaurant.rating)));
    }
    if (priceRangeFilterApplied) {
      setRestaurants((prevRestaurants) => prevRestaurants.filter((restaurant) => priceRangePredicate(restaurant, restaurant.priceRange)));
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
            {restaurants.map((restaurant) => (
              <RestaurantCard restaurant={restaurant} key={restaurant._id} cardWidth={{ width: `${restaurantCardWidth}px` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantsPage;
