import { FC } from "react";
import { AppDispatch, RootState } from "../../../reduxToolkit/store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchOpenNowRestaurants } from "../../../reduxToolkit/thunks/restaurantThunk";
import { useEffect, useState, useRef } from "react";
import RestaurantCard from "../../../components/RestaurantCard/RestaurantCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useOutletContext } from "react-router-dom";
import { setOpenNowRestaurants } from "../../../reduxToolkit/slices/restaurantSlice";
import useIsMobile from "../../../hooks/useIsMobile";
import useIsTablet from "../../../hooks/useIsTablet";
import { Restaurant } from "../../../types/types";

const OpenNowRestaurants: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { openNowRestaurants, ratingFilter } = useSelector((state: RootState) => state.restaurant);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [renderRestaurant, setRenderRestaurant] = useState<Restaurant[]>();

  const [classN, ratingPredicate] = useOutletContext();

  useEffect(() => {
    if (ratingFilter !== 0) {
      setRenderRestaurant(openNowRestaurants.filter((restaurant) => ratingPredicate(restaurant, ratingFilter)));
    } else {
      setRenderRestaurant(openNowRestaurants);
    }
  }, [ratingFilter, openNowRestaurants]);

  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const isMobileOrTablet = isMobile || isTablet;

  const [page, setPage] = useState(1);

  const marginError = 10;
  const handleScroll = () => {
    if (containerRef.current) {
      if (Math.abs(containerRef.current.scrollTop - (containerRef.current.scrollHeight - containerRef.current.clientHeight)) <= marginError) {
        fetchMoreData();
        containerRef.current.scrollTo({
          top: containerRef.current.scrollTop + 150,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    dispatch(setOpenNowRestaurants([]));
  }, []);

  useEffect(() => {
    dispatch(fetchOpenNowRestaurants(page.toString()));
  }, [dispatch, page]);

  const restaurantCardWidth = 335;

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return !isMobileOrTablet ? (
    <div className={classN} ref={containerRef} onScroll={handleScroll}>
      {renderRestaurant?.map((restaurant) => (
        <RestaurantCard restaurant={restaurant} key={restaurant._id} cardWidth={{ width: `${restaurantCardWidth}px` }} />
      ))}
    </div>
  ) : (
    <InfiniteScroll dataLength={renderRestaurant.length} next={fetchMoreData} hasMore={true} loader={""} className="">
      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        {renderRestaurant?.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant._id} cardWidth={{ width: `${restaurantCardWidth}px` }} />
        ))}
      </div>
    </InfiniteScroll>
  );
};
export default OpenNowRestaurants;
