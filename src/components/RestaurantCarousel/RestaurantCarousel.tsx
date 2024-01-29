import "./RestaurantCarousel.scss";
import data from "../../data/data.json";
import { Restaurant } from "../../types/types";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import useGetScreenWidth from "../../hooks/useScreenWidth";
import { UIConstants } from "../../shared/constants";

const RestaurantCarousel = () => {
  const screenWidth = useGetScreenWidth();
  const isTablet = screenWidth < UIConstants.sizes.tabletWidth;
  const restaurants: Restaurant[] = data.data.restaurants;
  return (
    <div className="restaurant-carousel-container">
      <div className="restaurant-carousel-title">
        <SectionTitle title={"POPULAR RESTAURANT IN EPICURE:"} />
      </div>
      <div className="restaurant-carousel-content">
        {!isTablet
          ? restaurants.map((restaurant, keyId) => (
              <div className="restaurant-card-item-container" key={keyId}>
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))
          : restaurants.slice(0, 3).map((restaurant, keyId) => (
              <div className="restaurant-card-item-container" key={keyId}>
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))}
      </div>
      <div className="all-restaurants-goto-container">
        <button className="all-restaurants-button">
          All Restaurants
          <img src="/src/assets/images/goToIcon.svg" alt="goToIcon" />
        </button>
      </div>
    </div>
  );
};
export default RestaurantCarousel;
