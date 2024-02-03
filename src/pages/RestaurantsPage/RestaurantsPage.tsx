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
  const restaurants: Restaurant[] = data.restaurants;
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const isMobileOrTable = isMobile || isTablet;

  return (
    <section className={styles.RestaurantsPageSection}>
      <div className={styles.restaurantsPageLayout}>
        <div className={styles.restaurantsPageContentContainer}>
          {isMobileOrTable && (
            <div className={styles.restaurantPageTitleContainer}>
              <SectionTitle title={"RESTAURANTS"} />
            </div>
          )}
          {isMobileOrTable ? (
            <div className={styles.dropDownsFiltersContainer}>Filters</div>
          ) : (
            <div className={styles.dropDownsFiltersContainer}>
              <div>Price Range</div>
              <Dropdown />
              <div>Distance</div>
              <div>Rating</div>
            </div>
          )}
          <div className={styles.restaurantsCardsContainer}>
            {restaurants.map((restaurant) => (
              <RestaurantCard restaurant={restaurant} key={restaurant.keyId} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantsPage;
