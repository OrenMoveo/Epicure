import { useEffect } from "react";
import { AppDispatch, RootState } from "../../../reduxToolkit/store/store";
import { useDispatch, useSelector } from "react-redux";
import styles from "./OpenNowRestaurants.module.scss";
import { fetchOpenNowRestaurants } from "../../../reduxToolkit/thunks/restaurantThunk";
import RestaurantCard from "../../../components/RestaurantCard/RestaurantCard";

const OpenNowRestaurants = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { openNowRestaurants } = useSelector((state: RootState) => state.restaurant);
  useEffect(() => {
    dispatch(fetchOpenNowRestaurants());
  }, [dispatch]);
  const restaurantCardWidth = 335;

  return (
    <div className={styles.OpenNowRestaurantsLayout}>
      <div className={styles.MostPopularRestaurantsLayout}>
        <div className={styles.restaurantsCardsContainer}>
          {openNowRestaurants?.map((restaurant) => (
            <RestaurantCard restaurant={restaurant} key={restaurant._id} cardWidth={{ width: `${restaurantCardWidth}px` }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenNowRestaurants;
