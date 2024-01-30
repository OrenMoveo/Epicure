import styles from "./PopularRestaurant.module.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useGetScreenWidth from "../../hooks/useScreenWidth";
import { UIConstants } from "../../shared/constants";
import goToIcon from "../../assets/images/goToIcon.svg";
import data from "../../data/data.json";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { Restaurant } from "../../types/types";
const PopularRestaurant = () => {
  const screenWidth: number = useGetScreenWidth();
  const isTablet: boolean = screenWidth > UIConstants.sizes.mobileWidth;
  const restaurants: Restaurant[] = data.data.restaurants;
  return (
    <section className={styles.popularRestaurantLayout}>
      <div className={styles.popularRestaurantTitle}>
        <SectionTitle title={"POPULAR RESTAURANT IN EPICURE:"} />
      </div>
      <div className={styles.popularRestaurantContainer}>
        {!isTablet && (
          <div className={styles.mobileCarouselContainer}>
            <Swiper spaceBetween={24} slidesPerView={2} initialSlide={0}>
              {restaurants.map((restaurant, keyId) => (
                <SwiperSlide>
                  <RestaurantCard key={keyId} restaurant={restaurant} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        {isTablet && (
          <div className={styles.desktopPopularRestaurantContainer}></div>
        )}

        <button
          className={styles.allRestaurantsGotoContainer}
          name="all-restaurant-goto-button"
        >
          <p className="allRestaurantsGotoText">All Restaurants</p>
          <img src={goToIcon} alt="go-to-icon" />
        </button>
      </div>
    </section>
  );
};

export default PopularRestaurant;
