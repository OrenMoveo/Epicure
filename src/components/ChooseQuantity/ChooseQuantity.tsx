import styles from "./ChooseQuantity.module.scss";
import minusIcon from "../../assets/images/minusIcon.svg";
import plusIcon from "../../assets/images/plusIcon.svg";
import { FC } from "react";

interface ChooseQuantityProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const ChooseQuantity: FC<ChooseQuantityProps> = ({ quantity, setQuantity }) => {
  const MIN_ORDER = 1;
  const SINGLE_DISH = 1;

  const handleDecreaseQuantity = (prevQuantity: number) => {
    if (prevQuantity === MIN_ORDER) {
      return;
    }
    setQuantity(prevQuantity - SINGLE_DISH);
  };

  const handleIncreaseQuantity = (prevQuantity: number) => {
    setQuantity(prevQuantity + SINGLE_DISH);
  };

  return (
    <div className={styles.dishQuantityContainer}>
      <div className={styles.chooseQuantityTitle}>Quantity</div>
      <div className={styles.quantityValueContainer}>
        <button className={styles.minusBtn} onClick={() => handleDecreaseQuantity(quantity)}>
          <img src={minusIcon} alt="minus-icon" />
        </button>
        <p className={styles.quantityTextContainer}>{quantity}</p>
        <button className={styles.plusBtn} onClick={() => handleIncreaseQuantity(quantity)}>
          <img src={plusIcon} alt="plus-icon" />
        </button>
      </div>
    </div>
  );
};

export default ChooseQuantity;
