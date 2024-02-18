import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./ChefOfTheWeekSection.module.scss";
import ChefsRestaurantCard from "../ChefsRestaurantCard/ChefsRestaurantCard";
import { Chef } from "../../types/types";
import data from "../../data/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
import GoToAllRestaurantsButton from "../GoToAllRestaurantsButton/GoToAllRestaurantsButton";

export const ChefOfTheWeekSection = () => {
  const isTablet: boolean = useIsTablet();
  const isMobile = useIsMobile();
  const isMobileOrTablet = isMobile || isTablet;

  const chefs: Chef[] = data.data.chefs;
  const chefOfTheWeek = chefs.find((chef) => chef.name === "Yossi Shitrit");

  return (
    <section className={styles.chefOfTheWeekSection}>
      <div className={styles.chefOfTheWeekContainer}>
        <div className={styles.chefOfTheWeekTitleContainer}>
          <SectionTitle title={"CHEF OF THE WEEK:"} />
        </div>
        <div className={styles.chefOfTheWeekDescriptionContainer}>
          <div
            className={styles.chefOfTheWeekImageContainer}
            style={{
              backgroundImage: `url(${chefOfTheWeek?.pictureUrl})`,
            }}
          >
            <div className={styles.overlayTextContainer}>
              <p className={styles.chefOfTheWeekName}> {chefOfTheWeek?.name}</p>
            </div>
          </div>
          <p className={styles.chefOfTheWeekAboutParagraph}>{chefOfTheWeek?.description}</p>
        </div>
      </div>
      <div className={styles.chefOfTheWeekRestaurantContainer}>
        <div className={styles.chefOfTheWeekRestaurantsTitle}>
          <SectionTitle title={isMobileOrTablet ? "YOSSI'S RESTAURANTS" : "Yossi's Restaurants"} />
        </div>
        {isMobileOrTablet ? (
          <div className={styles.carouselContainer}>
            <Swiper className={styles["swiper"]} spaceBetween={24} slidesPerView={"auto"} initialSlide={0}>
              {chefOfTheWeek &&
                chefOfTheWeek.restaurants.map((restaurant) => (
                  <SwiperSlide key={restaurant.keyId} className={styles["swiper-slide"]}>
                    <ChefsRestaurantCard restaurant={restaurant} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        ) : (
          <div className={styles.desktopChefOfTheWeekRestaurantsContainer}>
            {chefOfTheWeek && chefOfTheWeek.restaurants.slice(0, 3).map((restaurant) => <ChefsRestaurantCard key={restaurant.keyId} restaurant={restaurant} />)}
          </div>
        )}
        {isMobileOrTablet && <GoToAllRestaurantsButton />}
      </div>
    </section>
  );
};
