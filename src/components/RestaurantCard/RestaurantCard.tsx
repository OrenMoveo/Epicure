import "./RestaurantCard.scss";
import { Restaurant } from "../../types/types";
import useGetScreenWidth from "../../hooks/useScreenWidth";
import { UIConstants } from "../../shared/constants";
interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const screenWidth = useGetScreenWidth();
  const isTablet = screenWidth < UIConstants.sizes.tabletWidth;
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
