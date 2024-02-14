import styles from "./DishCounterCircle.module.scss";
import { useCartContext } from "../../context/CartContext";

const DishCounterCircle = () => {
  const { getTotalQuantity } = useCartContext();
  const totalQuantity = getTotalQuantity();
  return (
    <div className={styles.dishCounter}>
      <div className={styles.circle}>{totalQuantity}</div>
    </div>
  );
};

export default DishCounterCircle;
