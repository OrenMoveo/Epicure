import { FC } from "react";
import { AppDispatch, RootState } from "../../../reduxToolkit/store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewRestaurants } from "../../../reduxToolkit/thunks/restaurantThunk";
import { useEffect, useState } from "react";
import RestaurantCard from "../../../components/RestaurantCard/RestaurantCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useOutletContext } from "react-router-dom";
import { setNewRestaurants } from "../../../reduxToolkit/slices/restaurantSlice";
import { Restaurant } from "../../../types/types";

const NewRestaurants: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const restaurantCardWidth = 335;

  const { newRestaurants, ratingFilter } = useSelector((state: RootState) => state.restaurant);
  const [page, setPage] = useState(1);
  const [renderRestaurant, setRenderRestaurant] = useState<Restaurant[]>();

  const classN: string = useOutletContext();

  useEffect(() => {
    if (ratingFilter.length > 0) {
      setRenderRestaurant(newRestaurants.filter((restaurant) => ratingFilter.includes(restaurant.rating)));
    } else {
      setRenderRestaurant(newRestaurants);
    }
  }, [ratingFilter, newRestaurants]);

  useEffect(() => {
    dispatch(setNewRestaurants([]));
  }, []);

  useEffect(() => {
    dispatch(fetchNewRestaurants(page.toString()));
  }, [dispatch, page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <InfiniteScroll dataLength={renderRestaurant ? renderRestaurant.length : 0} next={fetchMoreData} hasMore={true} loader={""}>
      <div className={classN}>
        {renderRestaurant?.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant._id} cardWidth={{ width: `${restaurantCardWidth}px` }} />
        ))}
      </div>
    </InfiniteScroll>
  );
};
export default NewRestaurants;
