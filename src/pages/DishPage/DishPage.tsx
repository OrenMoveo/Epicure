import { useLocation } from "react-router-dom";
import styles from "./DishPage.module.scss";
import { Dish } from "../../types/types";

const DishPage = () => {
  const location = useLocation();
  const { dish } = location.state as { dish: Dish };

  return (
    <div className={styles.DishPageLayout}>
      <div className={styles.heroContainer}>
        <img src={dish.pictureUrl} alt={dish.name} />
      </div>
      <section className={styles.dishContentSection}>
        <div className={styles.dishContentContainer}>
          <div className={styles.dishDescriptionContainer}></div>
          <div className={styles.dishChooseASideContainer}></div>
          <div className={styles.dishChangesContainer}></div>
          <div className={styles.dishQuantityContainer}></div>
          <button className={styles.addToBagBtn}>Add To Bag</button>
        </div>
      </section>
    </div>
  );
};

export default DishPage;
