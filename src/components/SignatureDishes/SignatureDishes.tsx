import useGetScreenWidth from "../../hooks/useGetWidthScreen";
import { UIConstants } from "../../shared/constants";
import { Dish } from "../../types/types";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./SignatureDishes.module.scss";
import data from '../../data/data.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import goToIcon from "../../assets/images/goToIcon.svg";

const SignatureDishes = () => {
    const screenWidth: number = useGetScreenWidth();
    const isMobile: boolean = screenWidth <= UIConstants.sizes.mobileWidth;
    const isTablet: boolean =
      UIConstants.sizes.mobileWidth < screenWidth &&
      screenWidth <= UIConstants.sizes.tabletWidth;
    const signatureDishes: Dish[] = data.data.dishes;
  return <section className={styles.signatureDishesLayout}>

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
              {signatureDishes &&
                signatureDishes.map((restaurant, keyId) => (
                  <SwiperSlide className={styles["swiper-slide"]}>
                    <DishCard key={keyId} restaurant={restaurant} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        ) : (
          <div className={styles.desktopPopularRestaurantContainer}>
            {signatureDishes &&
              signatureDishes
                .slice(0, 3)
                .map((restaurant, keyId) => (
                  <DishCard key={keyId} restaurant={restaurant} />
                ))}
          </div>
        )}

        <button
          className={styles.allRestaurantsGotoContainer}
          name="all-restaurant-goto-button"
        >
          <p className={styles.allRestaurantsGotoText}>All Restaurants</p>
          <img src={goToIcon} alt="go-to-icon" />
        </button>
      </div>
    </section>
  );
};

export default SignatureDishes;
