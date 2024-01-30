import "./RestaurantCarousel.scss";
import data from "../../data/data.json";
import { Restaurant } from "../../types/types";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { SectionTitle } from "../SectionTitle/SectionTitle";

import useGetScreenWidth from "../../hooks/useScreenWidth";
import { UIConstants } from "../../shared/constants";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const RestaurantCarousel = () => {
  const screenWidth: number = useGetScreenWidth();
  const isMobile: boolean =
    0 < screenWidth && screenWidth <= UIConstants.sizes.mobileWidth;
  const isTablet: boolean =
    UIConstants.sizes.mobileWidth < screenWidth &&
    screenWidth <= UIConstants.sizes.tabletWidth;
  const isSmallDesktopScreen: boolean =
    UIConstants.sizes.tabletWidth < screenWidth &&
    screenWidth <= UIConstants.sizes.smallDesktopWidth;
  const isMediumDesktopScreen: boolean =
    screenWidth > UIConstants.sizes.smallDesktopWidth;
  const restaurants: Restaurant[] = data.data.restaurants;

  const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "8%",
    // autoplay: true,
  };
  return (
    <section className="popular-restaurant-section">
      <div className="popular-restaurant-title">
        <SectionTitle title={"POPULAR RESTAURANT IN EPICURE:"} />
      </div>
      <div className="carousel-container">
        {isMobile && (
          <Swiper
            spaceBetween={24}
            slidesPerView={1.4}
            breakpoints={{
              480: {
                spaceBetween: 24,
                slidesPerView: 3,
              },
            }}
          >
            {restaurants.slice(0, 3).map((restaurant, keyId) => (
              <SwiperSlide>
                <RestaurantCard key={keyId} restaurant={restaurant} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className="popular-restaurants-container">
        {!isMobile &&
          restaurants
            .slice(0, 3)
            .map((restaurant, keyId) => (
              <RestaurantCard key={keyId} restaurant={restaurant} />
            ))}
      </div>
      <div className="all-restaurants-goto-container">
        <button className="all-restaurants-button">
          All Restaurants
          <img src="/src/assets/images/goToIcon.svg" alt="goToIcon" />
        </button>
      </div>
    </section>
  );
};
export default RestaurantCarousel;
