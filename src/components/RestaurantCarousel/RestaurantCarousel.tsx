import React from "react";
import "./RestaurantCarousel.scss";
import data from "../../data/data.json";
import { Restaurant } from "../../types/types";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { useMediaQuery } from "react-responsive";

const RestaurantCarousel = () => {
  const restaurants: Restaurant[] = data.data.restaurants;
  return (
    <div className="restaurant-carousel-container">
      <div className="restaurant-carousel-title">
        <SectionTitle title={"POPULAR RESTAURANT IN EPICURE:"} />
      </div>
      <div className="restaurant-carousel-content">
        {restaurants.map((restaurant, keyId) => (
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
