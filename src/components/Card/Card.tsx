import React from "react";
import { Dish, Restaurant } from "../../types/types";
import "./Card.scss";
interface CardProps {
  cardType: string;
  pictureUrl: string;
  title: string;
  content: string;
  isHorizontal: boolean;
}
function Card({
  content,
  pictureUrl,
  title,
  cardType,
  isHorizontal,
}: CardProps) {
  console.log(pictureUrl);

  return (
    <div className="card">
      <div className="card-img">
        <img src={pictureUrl} alt={title + " " + cardType} />
      </div>
      <div
        className={
          cardType === "restaurant"
            ? "restaurant-card-container"
            : "dish-card-container"
        }
      >
        {/* <div className="card-content-wrapper"> */}
        <h4 className="card-title">{title}</h4>
        {cardType === "restaurant" ? (
          <p className="restaurant-card-content">{content}</p>
        ) : (
          <div className="dish-card-content">{content}</div>
        )}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Card;
