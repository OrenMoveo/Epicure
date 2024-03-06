import { useEffect } from "react";
import { AppDispatch, RootState } from "../../../reduxToolkit/store/store";
import { useDispatch, useSelector } from "react-redux";

import { fetchOpenNowRestaurants } from "../../../reduxToolkit/thunks/restaurantThunk";
import RestaurantCard from "../../../components/RestaurantCard/RestaurantCard";

const OpenNowRestaurants = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { openNowRestaurants } = useSelector((state: RootState) => state.restaurant);
  useEffect(() => {
    dispatch(fetchOpenNowRestaurants());
  }, [dispatch]);
  const restaurantCardWidth = 335;

  return openNowRestaurants?.map((restaurant) => <RestaurantCard restaurant={restaurant} key={restaurant._id} cardWidth={{ width: `${restaurantCardWidth}px` }} />);
};

export default OpenNowRestaurants;
