import { Dish } from "../../types/types";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./SignatureDishes.module.scss";
import data from "../../data/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import goToIcon from "../../assets/images/goToIcon.svg";
import DishCard from "../DishCard/DishCard";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
import GoToAllRestaurantsButton from "../GoToAllRestaurantsButton/GoToAllRestaurantsButton";

const SignatureDishes = () => {
  const isMobile = useIsMobile();
  const isTablet: boolean = useIsTablet();

  const signatureDishes: Dish[] = data.data.dishes;

  return (
    <section className={styles.signatureDishesLayout}>
      <div className={styles.signatureDishesTitle}>
        <SectionTitle title={"SIGNATURE DISHES OF:"} />
      </div>
      <div className={styles.signatureDishesContainer}>
        {isMobile || isTablet ? (
          <div className={styles.carouselContainer}>
            <Swiper
              className={styles["swiper"]}
              spaceBetween={24}
              slidesPerView={"auto"}
              initialSlide={0}
            >
              {signatureDishes &&
                signatureDishes.map((dish) => (
                  <SwiperSlide
                    key={dish.keyId}
                    className={styles["swiper-slide"]}
                  >
                    <DishCard dish={dish} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        ) : (
          <div className={styles.desktopSignatureDishesContainer}>
            {signatureDishes &&
              signatureDishes
                .slice(0, 3)
                .map((dish) => <DishCard key={dish.keyId} dish={dish} />)}
          </div>
        )}

        {isMobile || (isTablet && <GoToAllRestaurantsButton />)}
      </div>
    </section>
  );
};

export default SignatureDishes;
