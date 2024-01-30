import styles from "./DishCard.module.scss";
import spicyIcon from "../../assets/images/spicyIcon.svg";
import { Dish } from "../../types/types";
interface DishCardProps {
  dish: Dish;
}
const DishCard = ({ dish }: DishCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={dish.pictureUrl} alt={dish.name} />
      </div>
      <div className={styles.dishContent}>
        <p className={styles.dishTitle}>{dish.name}</p>
        <div className={styles.dishDescription}>{dish.description}</div>
        <img src={spicyIcon} alt="spicyIcon" />
      </div>
      <div className={styles.dishPrice}>{dish.price}</div>
    </div>
  );
};

export default DishCard;
