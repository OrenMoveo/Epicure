import React from "react";
import "./RestaurantCard.scss";
import { Restaurant } from "../../types/types";
import { useMediaQuery } from "react-responsive";
interface RestaurantCardProps {
  restaurant: Restaurant;
}

function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const isMobile: boolean = useMediaQuery({
    query: "(max-width: 450px)",
  });
  const ratingImageSrcString: string = `/src/assets/images/ratings/rating${restaurant.rating}.svg`;

  return (
    <div className="card-container">
      <div className="card-image-container">
        <img src={restaurant.pictureUrl} alt={restaurant.name} />
      </div>
      <div className="card-content-container">
        <p className="restaurant-name">{restaurant.name}</p>
        <p className="restaurant-chef-name">{restaurant.chef}</p>
        {!isMobile && (
          <div className="restaurant-rating-container">
            <img
              src={ratingImageSrcString}
              alt="rating"
              className="rating-img"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default RestaurantCard;
