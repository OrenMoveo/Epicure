import React from "react";
import { Dish, Restaurant } from "../../types/types";
// import styles from "./Card.module.scss";

interface CardProps {
  pictureUrl: string;
  title?: string;
  description?: string;
  isHorizontal?: boolean;
  summary?: string;
  rating?: number;
}
function Card({
  pictureUrl,
  title,
  description,
  isHorizontal,
  summary,
  rating = 3,
}: CardProps) {
  console.log(pictureUrl);

  return (
    <div className="card-container">
      <div className="card-main-img">
        <img src={pictureUrl} alt={title} />
      </div>
      <div className="card-content-container">
        {title && <h4 className="card-title">{title}</h4>}
        {description && <div className="card-description">{description}</div>}
        {summary && <div className="card-summary">{summary}</div>}
        {rating && (
          <div className="card-rating">
            {/* TODO: Implement */}
            {/* <Rating rating /> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
