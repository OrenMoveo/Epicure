import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./ChefOfTheWeekSection.module.scss";
import ChefsRestaurantCard from "../ChefsRestaurantCard/ChefsRestaurantCard";
import { Chef } from "../../types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
import GoToAllRestaurantsButton from "../GoToAllRestaurantsButton/GoToAllRestaurantsButton";
import { useEffect, useState } from "react";
import { getChefOfTheWeek } from "../../apiService/chefApiService";

export const ChefOfTheWeekSection = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const isMobileOrTablet = isMobile || isTablet;

  const [chefOfTheWeek, setChefOfTheWeek] = useState<Chef>();
  const firstName = chefOfTheWeek?.name?.split(" ")[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getChefOfTheWeek();
        setChefOfTheWeek(data);
      } catch (error) {
        console.error();
      }
    };
    fetchData();
  }, [chefOfTheWeek, setChefOfTheWeek]);

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
          <SectionTitle title={isMobileOrTablet ? `${firstName?.toUpperCase()}'S RESTAURANTS` : `${firstName}'s Restaurants`} />
        </div>
        {isMobileOrTablet ? (
          <div className={styles.carouselContainer}>
            <Swiper className={styles["swiper"]} spaceBetween={24} slidesPerView={"auto"} initialSlide={0}>
              {chefOfTheWeek &&
                chefOfTheWeek.restaurants.map((restaurant) => (
                  <SwiperSlide key={restaurant._id} className={styles["swiper-slide"]}>
                    <ChefsRestaurantCard restaurant={restaurant} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        ) : (
          <div className={styles.desktopChefOfTheWeekRestaurantsContainer}>
            {chefOfTheWeek && chefOfTheWeek.restaurants.slice(0, 3).map((restaurant) => <ChefsRestaurantCard key={restaurant._id} restaurant={restaurant} />)}
          </div>
        )}
        {isMobileOrTablet && <GoToAllRestaurantsButton />}
      </div>
    </section>
  );
};
