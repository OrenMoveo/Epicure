import styles from "./DishCounterCircle.module.scss";
import { useCartContext } from "../../context/CartContext";

const DishCounterCircle = () => {
  const { order } = useCartContext();

  return (
    <div className={styles.dishCounter}>
      <div className={styles.circle}>{order.dishes.length}</div>
    </div>
  );
};

export default DishCounterCircle;
