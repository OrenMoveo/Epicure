import React from "react";
import "./RestaurantCarousel.scss";
import data from "../../data/data.json";
import { Restaurant } from "../../types/types";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { SectionTitle } from "../SectionTitle/SectionTitle";
const RestaurantCarousel = () => {
  const restaurants: Restaurant[] = data.data.restaurants;
  return (
    <div className="restaurant-carousel-container">
      <div className="restaurant-carousel-title">
        <SectionTitle title={"POPULAR RESTAURANT IN EPICURE:"} />
      </div>
      <div className="restaurant-carousel-content">
        <RestaurantCard restaurant={restaurants[0]} />
      </div>
    </div>
  );
};

export default RestaurantCarousel;
