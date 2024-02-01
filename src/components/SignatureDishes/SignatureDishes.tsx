import { Dish } from "../../types/types";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./SignatureDishes.module.scss";
import data from "../../data/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import goToIcon from "../../assets/images/goToIcon.svg";
import DishCard from "../DishCard/DishCard";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";

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
                signatureDishes.map((dish, keyId) => (
                  <SwiperSlide key={keyId} className={styles["swiper-slide"]}>
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
                .map((dish, keyId) => <DishCard key={keyId} dish={dish} />)}
          </div>
        )}

        {isMobile ||
          (isTablet && (
            <button
              className={styles.gotoAllRestaurantsBtn}
              name="all-restaurant-goto-button"
            >
              <p className={styles.gotoAllRestaurantsText}>All Restaurants</p>
              <img src={goToIcon} alt="go-to-icon" />
            </button>
          ))}
      </div>
    </section>
  );
};

export default SignatureDishes;
