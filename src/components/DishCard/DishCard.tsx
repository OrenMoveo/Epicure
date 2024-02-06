import styles from "./DishCard.module.scss";
import ILSIcon from "../../assets/images/ILSIcon.svg";
import { Dish } from "../../types/types";
interface DishCardProps {
  dish: Dish;
  className?: string;
}
const DishCard = ({ dish, className }: DishCardProps) => {
  return (
    <button
      className={`${styles.dishCardContainer} ${
        className ? styles[className] : ""
      }`}
    >
      <div className={styles.imageContainer}>
        <img src={dish.pictureUrl} alt={dish.name} />
      </div>
      <div className={styles.dishContentLayout}>
        <div className={styles.dishContentContainer}>
          <p className={styles.dishTitle}>{dish.name}</p>
          <div className={styles.dishDescription}>{dish.description}</div>
          <div className={styles.foodIconContainer}>
            <img src={dish.foodIcon} alt="food icon" />
          </div>
          <div className={styles.dishPriceContainer}>
            <div className={styles.line}></div>
            <div className={styles.dishPriceTextContainer}>
              <div className={styles.currencyIconContainer}>
                <img src={ILSIcon} alt="currencyIcon" />
              </div>
              <p className={styles.dishPriceAmount}>{dish.price}</p>
            </div>
            <div className={styles.line}></div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default DishCard;
