import { FC } from "react";
import { AppDispatch, RootState } from "../../../reduxToolkit/store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchOpenNowRestaurants } from "../../../reduxToolkit/thunks/restaurantThunk";
import { useEffect, useState } from "react";
import RestaurantCard from "../../../components/RestaurantCard/RestaurantCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useOutletContext } from "react-router-dom";
import { setOpenNowRestaurants } from "../../../reduxToolkit/slices/restaurantSlice";
import { Restaurant } from "../../../types/types";

const OpenNowRestaurants: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { openNowRestaurants, ratingFilter } = useSelector((state: RootState) => state.restaurant);
  const [renderRestaurant, setRenderRestaurant] = useState<Restaurant[]>();
  const [page, setPage] = useState(1);
  const restaurantCardWidth = 335;
  const classN: string = useOutletContext();

  useEffect(() => {
    if (ratingFilter.length > 0) {
      setRenderRestaurant(openNowRestaurants.filter((restaurant) => ratingFilter.includes(restaurant.rating)));
    } else {
      setRenderRestaurant(openNowRestaurants);
    }
  }, [ratingFilter, openNowRestaurants]);

  

  useEffect(() => {
    dispatch(setOpenNowRestaurants([]));
  }, []);

  useEffect(() => {
    dispatch(fetchOpenNowRestaurants(page.toString()));
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
export default OpenNowRestaurants;
