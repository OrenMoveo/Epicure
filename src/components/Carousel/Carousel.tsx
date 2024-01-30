import styles from "./Carousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { Dish, Restaurant } from "../../types/types";

interface CarouselProps {
  restaurants?: Restaurant[];
  dishes?: Dish[];
}
const Carousel = ({ restaurants }: CarouselProps) => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        className={styles["swiper"]}
        spaceBetween={24}
        slidesPerView={"auto"}
        initialSlide={0}
      >
        {restaurants &&
          restaurants.map((restaurant, keyId) => (
            <SwiperSlide className={styles["swiper-slide"]}>
              <RestaurantCard key={keyId} restaurant={restaurant} />
            </SwiperSlide>
          ))}
        {/* {dishes && dishes.map((dish, keyId) => (
          <SwiperSlide className={styles["swiper-slide"]}>
            
            <DishCard key={keyId} dishes={dish} />
          </SwiperSlide>
        ))} */}
      </Swiper>
    </div>
  );
};

export default Carousel;
