import styles from "./NewRestaurants.module.scss";
import { AppDispatch, RootState } from "../../../reduxToolkit/store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewRestaurants } from "../../../reduxToolkit/thunks/restaurantThunk";
import { useEffect } from "react";
import RestaurantCard from "../../../components/RestaurantCard/RestaurantCard";

const NewRestaurants = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { newRestaurants } = useSelector((state: RootState) => state.restaurant);
  useEffect(() => {
    dispatch(fetchNewRestaurants());
  }, [dispatch]);
  const restaurantCardWidth = 335;

  return (
    <div className={styles.NewRestaurantsLayout}>
      <div className={styles.MostPopularRestaurantsLayout}>
        <div className={styles.restaurantsCardsContainer}>
          {newRestaurants?.map((restaurant) => (
            <RestaurantCard restaurant={restaurant} key={restaurant._id} cardWidth={{ width: `${restaurantCardWidth}px` }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewRestaurants;