import styles from "./DishCounterCircle.module.scss";
import { useShoppingBagContext } from "../../context/ShoppingBagContext";

const DishCounterCircle = () => {
  const { getTotalQuantity } = useShoppingBagContext();
  const totalQuantity = getTotalQuantity();
  return (
    <div className={styles.dishCounter}>
      <div className={styles.circle}>{totalQuantity}</div>
    </div>
  );
};

export default DishCounterCircle;
