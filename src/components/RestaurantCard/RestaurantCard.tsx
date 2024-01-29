import React from "react";
import "./RestaurantCard.scss";
import { Restaurant } from "../../types/types";
<<<<<<< Updated upstream
import useGetScreenWidth from "../../hooks/useGetWidthScreen";

=======
import { useMediaQuery } from "react-responsive";
import useGetScreenWidth from "../../hooks/useScreenWidth";
import { UIConstants } from "../../shared/constants";
>>>>>>> Stashed changes
interface RestaurantCardProps {
  restaurant: Restaurant;
}

<<<<<<< Updated upstream
function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const screenWidth = useGetScreenWidth();
  const isTablet = screenWidth < 820;
=======
const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  // const isTablet: boolean = useMediaQuery({
  //   query: "(max-width: 819px)",
  // });
  const screenWidth = useGetScreenWidth();
  const isTablet = screenWidth < UIConstants.sizes.tabletWidth;
>>>>>>> Stashed changes
  const ratingImageSrcString: string = `/src/assets/images/ratings/rating${restaurant.rating}.svg`;

  return (
    <div className="card-container">
      <div className="card-image-container">
        <img src={restaurant.pictureUrl} alt={restaurant.name} />
      </div>
      <div className="card-content-container">
        <p className="restaurant-name">{restaurant.name}</p>
        <p className="restaurant-chef-name">{restaurant.chef}</p>
        {!isTablet && (
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
};

export default RestaurantCard;
