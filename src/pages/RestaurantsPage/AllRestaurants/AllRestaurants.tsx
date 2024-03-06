import RestaurantCard from "../../../components/RestaurantCard/RestaurantCard";
import styles from "./AllRestaurants.module.scss";
import { AppDispatch, RootState } from "../../../reduxToolkit/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllRestaurants } from "../../../reduxToolkit/thunks/restaurantThunk";

const AllRestaurants = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { allRestaurants } = useSelector((state: RootState) => state.restaurant);
  useEffect(() => {
    dispatch(fetchAllRestaurants());
  }, [dispatch]);
  const restaurantCardWidth = 335;

  return (
    <div className={styles.AllRestaurantsLayout}>
      <div className={styles.restaurantsCardsContainer}>
        {allRestaurants?.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant._id} cardWidth={{ width: `${restaurantCardWidth}px` }} />
        ))}
      </div>
    </div>
  );
};

export default AllRestaurants;
