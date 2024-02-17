import AppButton from "../../AppButton/AppButton";
import styles from "./DeleteOrder.module.scss";
import questionMark from "../../../assets/images/questionMark.svg";

const DeleteOrder = () => {
  return (
    <div className={styles.deleteOrderLayout}>
      <div className={styles.deleteOrderContainer}>
        <img src={questionMark} alt="question-mark" />
        <div className={styles.deleteOrderContent}>
          <div className={styles.deleteOrderTitle}>DELETE ORDER?</div>
          <div className={styles.deleteOrderMessage}>
            You can order from only one restaurant per order. Going out to another restaurant will erase all the items you put in the cart
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <AppButton handleClick={() => {}} buttonContent="DELETE" isBlack={true} />
          <AppButton handleClick={() => {}} buttonContent="BACK TO ORDER" />
        </div>
      </div>
    </div>
  );
};

export default DeleteOrder;
