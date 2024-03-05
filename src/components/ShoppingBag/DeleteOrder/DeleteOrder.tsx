import AppButton from "../../AppButton/AppButton";
import styles from "./DeleteOrder.module.scss";
import { useModalContext } from "../../../context/ModalContext";
import { TextSymbols } from "../../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reduxToolkit/store/store";
import { resetAndUpdateBag } from "../../../reduxToolkit/slices/shoppingBagSlice";

const DeleteOrder = () => {
  const { closeDeleteOrderModal, closeDishModal, closeModal } = useModalContext();

  const dispatch = useDispatch();
  const newOrderDish = useSelector((state: RootState) => state.shoppingBag.newOrderDish);

  const handleDelete = () => {
    dispatch(resetAndUpdateBag(newOrderDish));
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
        <img src={TextSymbols.questionMark} alt="question-mark" />
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
