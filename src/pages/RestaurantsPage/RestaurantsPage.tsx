import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { useFetch } from "../../hooks/useFetch";
import { Restaurant } from "../../types/types";
import styles from "./RestaurantsPage.module.scss";

const RestaurantsPage = () => {
  const data = useFetch();
  const restaurants: Restaurant[] = data.restaurants;

  return (
    <section className={styles.RestaurantsPageSection}>
      <div className={styles.restaurantsPageLayout}>
        <div className={styles.restaurantsPageContentContainer}>
          <div className={styles.restaurantPageTitleContainer}>
            <SectionTitle title={"RESTAURANTS"} />
          </div>
          <div className={styles.filtersContainer}>Filters</div>
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
