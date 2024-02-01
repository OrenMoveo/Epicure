import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./ChefOfTheWeekSection.module.scss";
import ChefsRestaurantCard from "../ChefsRestaurantCard/ChefsRestaurantCard";
import { Chef } from "../../types/types";
import data from "../../data/data.json";
import useGetScreenWidth from "../../hooks/useGetWidthScreen";
import { UIConstants } from "../../shared/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import goToIcon from "../../assets/images/goToIcon.svg";

export const ChefOfTheWeekSection = () => {
  const chefs: Chef[] = data.data.chefs;
  const chefOfTheWeek: Chef | undefined = chefs.find(
    (chef) => chef.name === "Yossi Shitrit"
  );
  const screenWidth: number = useGetScreenWidth();
  const isMobile: boolean = screenWidth <= UIConstants.sizes.mobileWidth;
  const isTablet: boolean =
    UIConstants.sizes.mobileWidth < screenWidth &&
    screenWidth <= UIConstants.sizes.tabletWidth;
  return (
    <section className={styles.chefOfTheWeekSection}>
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
        <p className={styles.chefOfTheWeekAboutParagraph}>
          {chefOfTheWeek?.description}
        </p>
      </div>
      <div className={styles.chefOfTheWeekRestaurantContainer}>
        <div className={styles.chefOfTheWeekRestaurantsTitle}>
          <SectionTitle title={"YOSSI'S RESTAURANTS"} />
        </div>
        {isMobile || isTablet ? (
          <div className={styles.carouselContainer}>
            <Swiper
              className={styles["swiper"]}
              spaceBetween={24}
              slidesPerView={"auto"}
              initialSlide={0}
            >
              {chefOfTheWeek &&
                chefOfTheWeek.restaurants.map((restaurant, keyId) => (
                  <SwiperSlide key={keyId} className={styles["swiper-slide"]}>
                    <ChefsRestaurantCard restaurant={restaurant} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        ) : (
          <div className={styles.desktopChefOfTheWeekRestaurantsContainer}>
            {chefOfTheWeek &&
              chefOfTheWeek.restaurants
                .slice(0, 3)
                .map((restaurant, keyId) => (
                  <ChefsRestaurantCard key={keyId} restaurant={restaurant} />
                ))}
          </div>
        )}
        {(isMobile || isTablet) && (
          <button
            className={styles.allRestaurantsGotoContainer}
            name="all-restaurant-goto-button"
          >
            <p className={styles.allRestaurantsGotoText}>All Restaurants</p>
            <img src={goToIcon} alt="go-to-icon" />
          </button>
        )}
      </div>
    </section>
  );
};
