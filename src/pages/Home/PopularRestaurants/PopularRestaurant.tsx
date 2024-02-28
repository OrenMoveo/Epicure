import styles from "./PopularRestaurant.module.scss";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import RestaurantCard from "../../../components/RestaurantCard/RestaurantCard";
import { Restaurant } from "../../../types/types";
import useIsTablet from "../../../hooks/useIsTablet";
import useIsMobile from "../../../hooks/useIsMobile";
import GoToAllRestaurantsButton from "../../../components/GoToAllRestaurantsButton/GoToAllRestaurantsButton";
import { useEffect, useState } from "react";
import { fetchPopularRestaurants } from "../../../apiService/restaurantApiService";

const PopularRestaurant = () => {
  const isMobile = useIsMobile();
  const isTablet: boolean = useIsTablet();

  const [popularRestaurants, setPopularRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPopularRestaurants();
        setPopularRestaurants(data);
      } catch (error) {
        console.log("Error trying fetch popular restaurants frontend", error.message);
        throw error;
      }
    };
    fetchData();
  }, []);

  return (
    <section className={styles.popularRestaurantLayout}>
      <div className={styles.popularRestaurantTitle}>
        <SectionTitle title={"POPULAR RESTAURANT IN EPICURE:"} />
      </div>
      <div className={styles.popularRestaurantContainer}>
        {isMobile || isTablet ? (
          <div className={styles.carouselContainer}>
            <Swiper className={styles["swiper"]} spaceBetween={24} slidesPerView={"auto"} initialSlide={0}>
              {popularRestaurants &&
                popularRestaurants.map((restaurant) => (
                  <SwiperSlide key={restaurant._id} className={styles["swiper-slide"]}>
                    <RestaurantCard restaurant={restaurant} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        ) : (
          <div className={styles.desktopPopularRestaurantContainer}>
            {popularRestaurants && popularRestaurants.slice(0, 3).map((restaurant) => <RestaurantCard key={restaurant._id} restaurant={restaurant} />)}
          </div>
        )}
        <div className={styles.GoToAllRestaurantsBtnContainer}>
          <GoToAllRestaurantsButton />
        </div>
      </div>
    </section>
  );
};

export default PopularRestaurant;
