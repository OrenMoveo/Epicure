import Dropdown from "../../components/Dropdown/Dropdown";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
import { Restaurant } from "../../types/types";
import styles from "./RestaurantsPage.module.scss";
import { NavLink, Outlet } from "react-router-dom";
import { appRoutes } from "../../shared/constants";

const RestaurantsPage = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const isMobileOrTable = isMobile || isTablet;

  const filterButtons = [
    { label: "All", route: "" },
    { label: "New", route: appRoutes.restaurants.newRestaurants },
    { label: "Most Popular", route: appRoutes.restaurants.mostPopularRestaurants },
    { label: "Open Now", route: appRoutes.restaurants.openNowRestaurants },
  ];

  const ratingPredicate = (restaurant: Restaurant, rating: number): boolean => {
    return restaurant.rating === rating;
  };

  const priceRangePredicate = (restaurant: Restaurant, priceRange: number[]): boolean => {
    return priceRange[0] <= restaurant.priceRange[0] && restaurant.priceRange[1] <= priceRange[1];
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
            {filterButtons.map((button) => (
              <NavLink key={button.label} to={`${appRoutes.restaurants.base}/${button.route}`} className={({ isActive }) => (isActive ? styles.activeButton : styles.filterButton)}>
                {button.label}
              </NavLink>
            ))}
          </div>

          {!isMobileOrTable && (
            <div className={styles.dropDownsFiltersContainer}>
              <Dropdown filterTitle={"Distance"} distance={true} />
              <Dropdown filterTitle={"Price Range"} priceRange={true} />
              <Dropdown filterTitle={"Rating"} rating={true} />
            </div>
          )}
          <Outlet context={styles.restaurantsCardsContainer} />
        </div>
      </div>
    </section>
  );
};

export default RestaurantsPage;
