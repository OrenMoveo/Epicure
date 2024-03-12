import { FC } from "react";
import { AppDispatch, RootState } from "../../../reduxToolkit/store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRestaurants } from "../../../reduxToolkit/thunks/restaurantThunk";
import { useEffect, useState } from "react";
import RestaurantCard from "../../../components/RestaurantCard/RestaurantCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useOutletContext } from "react-router-dom";
import { setAllRestaurants } from "../../../reduxToolkit/slices/restaurantSlice";
import { Restaurant } from "../../../types/types";
import { delay, motion } from "framer-motion";

const AllRestaurants: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { allRestaurants, ratingFilter } = useSelector((state: RootState) => state.restaurant);
  const [renderRestaurant, setRenderRestaurant] = useState<Restaurant[]>();
  const [page, setPage] = useState(1);

  const restaurantCardWidth = 335;
  const classN: string = useOutletContext();

  useEffect(() => {
    if (ratingFilter.length > 0) {
      setRenderRestaurant(allRestaurants.filter((restaurant) => ratingFilter.includes(restaurant.rating)));
    } else {
      setRenderRestaurant(allRestaurants);
    }
  }, [ratingFilter, allRestaurants]);

  useEffect(() => {
    dispatch(setAllRestaurants([]));
  }, []);

  useEffect(() => {
    dispatch(fetchAllRestaurants(page.toString()));
  }, [dispatch, page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <InfiniteScroll dataLength={renderRestaurant ? renderRestaurant.length : 0} next={fetchMoreData} hasMore={true} loader={""}>
      <motion.ul className={classN} transition={{ staggerChildren: 0.05 }}>
        {renderRestaurant?.map((restaurant, index) => (
          <motion.li
            key={restaurant._id}
            variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <RestaurantCard restaurant={restaurant} cardWidth={{ width: `${restaurantCardWidth}px` }} />
          </motion.li>
        ))}
      </motion.ul>
    </InfiniteScroll>
  );
};
export default AllRestaurants;
