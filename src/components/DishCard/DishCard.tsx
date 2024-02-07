import styles from "./DishCard.module.scss";
import ILSIcon from "../../assets/images/ILSIcon.svg";
import { Dish } from "../../types/types";
import { FC } from "react";
interface DishCardProps {
  dish: Dish;
  shouldDisplayFoodIcon?: boolean;
  cardWith?: React.CSSProperties;
}

const DishCard: FC<DishCardProps> = (props) => {
  return (
    <button className={styles.dishCardContainer} style={props.cardWith}>
      <img src={props.dish.pictureUrl} alt={props.dish.name} />
      <div className={styles.dishContentLayout}>
        <div className={styles.dishContentContainer}>
          <p className={styles.dishTitle}>{props.dish.name}</p>
          <div className={styles.dishDescription}>{props.dish.description}</div>
          <div className={styles.foodIconContainer}>
            <img src={props.dish.foodIcon} alt="food icon" />
          </div>
          <div className={styles.dishPriceContainer}>
            <div className={styles.line}></div>
            <div className={styles.dishPriceTextContainer}>
              <div className={styles.currencyIconContainer}>
                <img src={ILSIcon} alt="currencyIcon" />
              </div>
              <p className={styles.dishPriceAmount}>{props.dish.price}</p>
            </div>
            <div className={styles.line}></div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default DishCard;
