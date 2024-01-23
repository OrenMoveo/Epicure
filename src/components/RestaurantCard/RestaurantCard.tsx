import React, { useState } from "react";
import Card from "../Card/Card";
import { Restaurant, Chef } from "../../types/types";
interface RestaurantCardProps {
  restaurant: Restaurant;
}
function RestaurantCard(restaurantProps: RestaurantCardProps) {
  const { restaurant } = restaurantProps;
  return (
    <Card
      cardType={"restaurant"}
      content={restaurant.chef}
      pictureUrl={restaurant.pictureUrl}
      title={restaurant.name}
      isHorizontal={false}
    />
  );
}

export default RestaurantCard;
