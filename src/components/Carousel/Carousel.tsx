import styles from "./Carousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "../../data/data.json";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { Restaurant } from "../../types/types";

import React from "react";

const Carousel = () => {
  const restaurants: Restaurant[] = data.data.restaurants;

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        className={styles["swiper"]}
        spaceBetween={24}
        slidesPerView={"auto"}
        initialSlide={0}
      >
        {restaurants.map((restaurant, keyId) => (
          <SwiperSlide className={styles["swiper-slide"]}>
            <RestaurantCard key={keyId} restaurant={restaurant} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
