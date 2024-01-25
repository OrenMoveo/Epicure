import React from "react";
import Card from "../Card/Card";
import { Restaurant, Chef } from "../../types/types";
interface RestaurantCardProps {
  restaurant: Restaurant;
}

function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Card
      cardType={"restaurant"}
      description={restaurant.chef}
      pictureUrl={restaurant.pictureUrl}
      title={restaurant.name}
      isHorizontal={false}
    />
  );
}

export default RestaurantCard;
