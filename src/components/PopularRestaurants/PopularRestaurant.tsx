import styles from "./PopularRestaurant.module.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "../../data/data.json";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { Restaurant } from "../../types/types";
import useIsTablet from "../../hooks/useIsTablet";
import useIsMobile from "../../hooks/useIsMobile";
import GoToAllRestaurantsButton from "../GoToAllRestaurantsButton/GoToAllRestaurantsButton";

const PopularRestaurant = () => {
  const isMobile = useIsMobile();
  const isTablet: boolean = useIsTablet();

  const restaurants: Restaurant[] = data.data.restaurants;

  return (
    <section className={styles.popularRestaurantLayout}>
      <div className={styles.popularRestaurantTitle}>
        <SectionTitle title={"POPULAR RESTAURANT IN EPICURE:"} />
      </div>
      <div className={styles.popularRestaurantContainer}>
        {isMobile || isTablet ? (
          <div className={styles.carouselContainer}>
            <Swiper
              className={styles["swiper"]}
              spaceBetween={24}
              slidesPerView={"auto"}
              initialSlide={0}
            >
              {restaurants &&
                restaurants.map((restaurant) => (
                  <SwiperSlide
                    key={restaurant.keyId}
                    className={styles["swiper-slide"]}
                  >
                    <RestaurantCard restaurant={restaurant} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        ) : (
          <div className={styles.desktopPopularRestaurantContainer}>
            {restaurants &&
              restaurants
                .slice(0, 3)
                .map((restaurant) => (
                  <RestaurantCard
                    key={restaurant.keyId}
                    restaurant={restaurant}
                  />
                ))}
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
