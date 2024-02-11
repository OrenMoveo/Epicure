import styles from "./ChooseQuantity.module.scss";
import minusIcon from "../../assets/images/minusIcon.svg";
import plusIcon from "../../assets/images/plusIcon.svg";
import { useState } from "react";

const ChooseQuantity = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecreaseQuantity = (prevQuantity: number) => {
    if (prevQuantity === 1) {
      return;
    }
    setQuantity(prevQuantity - 1);
  };

  const handleIncreaseQuantity = (prevQuantity: number) => {
    setQuantity(prevQuantity + 1);
  };

  return (
    <div className={styles.dishQuantityContainer}>
      <div className={styles.chooseQuantityTitle}>Quantity</div>
      <div className={styles.quantityValueContainer}>
        <button
          className={styles.minusBtn}
          onClick={() => handleDecreaseQuantity(quantity)}
        >
          <img src={minusIcon} alt="minusIcon" />
        </button>
        <p className={styles.quantityTextContainer}>{quantity}</p>
        <button
          className={styles.plusBtn}
          onClick={() => handleIncreaseQuantity(quantity)}
        >
          <img src={plusIcon} alt="plusIcon" />
        </button>
      </div>
    </div>
  );
};

export default ChooseQuantity;
