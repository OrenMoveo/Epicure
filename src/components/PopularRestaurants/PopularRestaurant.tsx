import styles from "./PopularRestaurant.module.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import goToIcon from "../../assets/images/goToIcon.svg";
import data from "../../data/data.json";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { Restaurant } from "../../types/types";
import useIsTablet from "../../hooks/useIsTablet";
import useIsMobile from "../../hooks/useIsMobile";

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
                  <SwiperSlide className={styles["swiper-slide"]}>
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
                .map((restaurant, keyId) => (
                  <RestaurantCard key={keyId} restaurant={restaurant} />
                ))}
          </div>
        )}

        <button
          className={styles.gotoAllRestaurantsBtn}
          name="all-restaurant-goto-button"
        >
          <p className={styles.gotoAllRestaurantsText}>All Restaurants</p>
          <img src={goToIcon} alt="go-to-icon" />
        </button>
      </div>
    </section>
  );
};

export default PopularRestaurant;
