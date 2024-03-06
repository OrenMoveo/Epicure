import { AppDispatch, RootState } from "../../../reduxToolkit/store/store";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MostPopularRestaurants.module.scss";
import RestaurantCard from "../../../components/RestaurantCard/RestaurantCard";
import { fetchPopularRestaurants } from "../../../reduxToolkit/thunks/restaurantThunk";
import { useEffect } from "react";

const MostPopularRestaurants = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { popularRestaurants } = useSelector((state: RootState) => state.restaurant);
  useEffect(() => {
    dispatch(fetchPopularRestaurants());
  }, [dispatch]);
  const restaurantCardWidth = 335;

  return (
    <div className={styles.MostPopularRestaurantsLayout}>
      <div className={styles.restaurantsCardsContainer}>
        {popularRestaurants?.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant._id} cardWidth={{ width: `${restaurantCardWidth}px` }} />
        ))}
      </div>
    </div>
  );
};

export default MostPopularRestaurants;
