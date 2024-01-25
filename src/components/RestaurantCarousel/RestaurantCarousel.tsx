import React from "react";
import data from "../../data/data.json";
import { Restaurant } from "../../types/types";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
const RestaurantCarousel = () => {
  const restaurants: Restaurant[] = data.data.restaurants;
  return <RestaurantCard restaurant={restaurants[0]} />;
};

export default RestaurantCarousel;
