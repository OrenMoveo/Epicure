import { FC } from "react";
import { AppDispatch, RootState } from "../../../reduxToolkit/store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularRestaurants } from "../../../reduxToolkit/thunks/restaurantThunk";
import { useEffect, useState } from "react";
import RestaurantCard from "../../../components/RestaurantCard/RestaurantCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useOutletContext } from "react-router-dom";
import { setPopularRestaurants } from "../../../reduxToolkit/slices/restaurantSlice";
import { Restaurant } from "../../../types/types";

const MostPopularRestaurants: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { popularRestaurants, ratingFilter } = useSelector((state: RootState) => state.restaurant);
  const [renderRestaurant, setRenderRestaurant] = useState<Restaurant[]>();
  const [page, setPage] = useState(1);

  const classN: string = useOutletContext();

  useEffect(() => {
    if (ratingFilter.length > 0) {
      setRenderRestaurant(popularRestaurants.filter((restaurant) => ratingFilter.includes(restaurant.rating)));
    } else {
      setRenderRestaurant(popularRestaurants);
    }
  }, [ratingFilter, popularRestaurants]);

  useEffect(() => {
    dispatch(setPopularRestaurants([]));
  }, []);

  useEffect(() => {
    dispatch(fetchPopularRestaurants(page.toString()));
  }, [dispatch, page]);

  const restaurantCardWidth = 335;

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <InfiniteScroll dataLength={renderRestaurant ? renderRestaurant.length : 0} next={fetchMoreData} hasMore={true} loader={""}>
      <div className={classN}>
        {renderRestaurant?.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant._id} />
        ))}
      </div>
    </InfiniteScroll>
  );
};
export default MostPopularRestaurants;
