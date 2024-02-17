import styles from "./DeleteOrder.module.scss";

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
          <button className={styles.}></button>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrder;
