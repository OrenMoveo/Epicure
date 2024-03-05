import styles from "./DishCounterCircle.module.scss";
import { useSelector } from "react-redux";
import { selectTotalQuantity } from "../../reduxToolkit/slices/shoppingBagSlice";
import { RootState } from "../../reduxToolkit/store/store";

const DishCounterCircle = () => {
  const totalQuantity = useSelector((state: RootState) => selectTotalQuantity(state));
  return (
    <div className={styles.dishCounter}>
      <div className={styles.circle}>{totalQuantity}</div>
    </div>
  );
};

export default DishCounterCircle;
