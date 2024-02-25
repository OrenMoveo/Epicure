import AppButton from "../../AppButton/AppButton";
import styles from "./DeleteOrder.module.scss";
import questionMark from "../../../assets/images/questionMark.svg";
import { useShoppingBagContext } from "../../../context/ShoppingBagContext";
import { useModalContext } from "../../../context/ModalContext";

const DeleteOrder = () => {
  const { resetAndUpdateBag, newOrderDish } = useShoppingBagContext();
  const { closeDeleteOrderModal, closeDishModal, closeModal } = useModalContext();

  const handleDelete = () => {
    resetAndUpdateBag(newOrderDish);
    closeModal();
    closeDeleteOrderModal();
    closeDishModal();
  };

  const handleBackToOrder = () => {
    closeModal();
    closeDeleteOrderModal();
  };

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
          <AppButton handleClick={handleDelete} buttonContent="DELETE" isBlack={true} />
          <AppButton handleClick={handleBackToOrder} buttonContent="BACK TO ORDER" />
        </div>
      </div>
    </div>
  );
};

export default DeleteOrder;
