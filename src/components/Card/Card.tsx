import React from "react";
import { Dish, Restaurant } from "../../types/types";
// import styles from "./Card.module.scss";

interface CardProps {
  cardType: string;
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
    // <div className={styles.card}>
    <div className="card">
      <div className="main-img">
        <img src={pictureUrl} alt={title} />
      </div>
      <div className="content-container">
        {title && <h4 className="title">{title}</h4>}
        {description && <div className="description">{description}</div>}
        {summary && <div className="summary">{summary}</div>}
        {rating && (
          <div className="rating">
            {/* TODO: Implement */}
            {/* <Rating rating /> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
