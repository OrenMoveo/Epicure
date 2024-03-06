import RestaurantCard from "../../../components/RestaurantCard/RestaurantCard";
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

  return allRestaurants?.map((restaurant) => <RestaurantCard restaurant={restaurant} key={restaurant._id} cardWidth={{ width: `${restaurantCardWidth}px` }} />);
};

export default AllRestaurants;
