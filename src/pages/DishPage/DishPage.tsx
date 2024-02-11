import { useLocation } from "react-router-dom";
import styles from "./DishPage.module.scss";
import { Dish } from "../../types/types";
import DishCard from "../../components/DishCard/DishCard";
import ChooseSideDishes from "../../components/ChooseSideDishes/ChooseSideDishes";
import ChooseDishChanges from "../../components/ChooseDishChanges/ChooseDishChanges";
import ChooseQuantity from "../../components/ChooseQuantity/ChooseQuantity";

const DishPage = () => {
  const location = useLocation();
  const { dish } = location.state as { dish: Dish };

  const mobileDishModalStyles = {
    cardImage: { display: "none" },
    cardWith: { width: "100%" },
    cardContentContainer: {
      backgroundColor: "white",
      height: "auto",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    cardTitle: {
      paddingBottom: "6px",
      lineHeight: "26px",
    },
    cardDescription: { lineHeight: "18px", width: "318px" },
    shouldDisplayFoodIcon: false,
    dishPriceContainer: { display: "none" },
  };
  return (
    <div className={styles.DishPageLayout}>
      <div className={styles.heroContainer}>
        <img src={dish.pictureUrl} alt={dish.name} />
      </div>
      <section className={styles.dishContentSection}>
        <div className={styles.dishContentLayout}>
          <div className={styles.dishContentContainer}>
            <div className={styles.dishInformationContainer}>
              <DishCard
                dish={dish}
                key={dish.keyId}
                dishImageSize={mobileDishModalStyles.cardImage}
                cardWith={mobileDishModalStyles.cardWith}
                dishContentContainerStyling={
                  mobileDishModalStyles.cardContentContainer
                }
                dishTitleStyling={mobileDishModalStyles.cardTitle}
                dishDescriptionStyling={mobileDishModalStyles.cardDescription}
                shouldDisplayFoodIcon={
                  mobileDishModalStyles.shouldDisplayFoodIcon
                }
                dishPriceContainerStyling={
                  mobileDishModalStyles.dishPriceContainer
                }
              />
            </div>
            <ChooseSideDishes />
            <ChooseDishChanges />
            <ChooseQuantity />
            <button className={styles.addToBagBtn}>ADD TO BAG</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DishPage;
