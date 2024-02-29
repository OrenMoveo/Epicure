import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import styles from "./SignatureDishes.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import DishCard from "../../../components/DishCard/DishCard";
import useIsMobile from "../../../hooks/useIsMobile";
import useIsTablet from "../../../hooks/useIsTablet";
import GoToAllRestaurantsButton from "../../../components/GoToAllRestaurantsButton/GoToAllRestaurantsButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../reduxToolkit/store/store";

const SignatureDishes = () => {
  const { signatureDishes } = useSelector((state: RootState) => state.homePage);

  const mobileDishImageWidth = 245;
  const mobileDishImageHeight = 152;
  const desktopDishImageWidth = 380;
  const desktopDishImageHeight = 306;

  const isMobile = useIsMobile();
  const isTablet: boolean = useIsTablet();

  return (
    <section className={styles.signatureDishesLayout}>
      <div className={styles.signatureDishesTitle}>
        <SectionTitle title={"SIGNATURE DISHES OF:"} />
      </div>
      <div className={styles.signatureDishesContainer}>
        {isMobile || isTablet ? (
          <div className={styles.carouselContainer}>
            <Swiper className={styles["swiper"]} spaceBetween={24} slidesPerView={"auto"} initialSlide={0}>
              {signatureDishes &&
                signatureDishes.map((dish) => (
                  <SwiperSlide key={dish._id} className={styles["swiper-slide"]}>
                    <DishCard
                      dish={dish}
                      dishImageSize={{
                        width: `${mobileDishImageWidth}px`,
                        height: `${mobileDishImageHeight}px`,
                      }}
                      shouldDisplayFoodIcon={true}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        ) : (
          <div className={styles.desktopSignatureDishesContainer}>
            {signatureDishes &&
              signatureDishes.slice(0, 3).map((dish) => (
                <DishCard
                  key={dish._id}
                  dish={dish}
                  dishImageSize={{
                    width: `${desktopDishImageWidth}px`,
                    height: `${desktopDishImageHeight}px`,
                  }}
                  shouldDisplayFoodIcon={true}
                  shouldDisplayLeftSideLine={true}
                  shouldDisplayRightSideLine={true}
                />
              ))}
          </div>
        )}

        {isMobile || (isTablet && <GoToAllRestaurantsButton />)}
      </div>
    </section>
  );
};

export default SignatureDishes;
