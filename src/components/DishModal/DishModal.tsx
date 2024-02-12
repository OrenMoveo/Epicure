import styles from "./DishModal.module.scss";
import { Dish } from "../../types/types";
import DishCard from "../DishCard/DishCard";
import ChooseSideDishes from "../ChooseSideDishes/ChooseSideDishes";
import ChooseDishChanges from "../ChooseDishChanges/ChooseDishChanges";
import ChooseQuantity from "../ChooseQuantity/ChooseQuantity";
import { createPortal } from "react-dom";
import { FC } from "react";
import { useModalContext } from "../../context/ModalContext/ModalContext";
import blackXIcon from "../../assets/images/blackXIcon.svg";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
import Footer from "../Footer/Footer";

interface DishModalProps {
  dish: Dish;
}

const DishModal: FC<DishModalProps> = ({ dish }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMobileOrTable = isMobile || isTablet;

  const { setIsModalActive } = useModalContext();
  const closeModal = () => {
    setIsModalActive(false);
  };

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

  return createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.DishModalLayout}>
        <div className={styles.modalHeader}>
          <button className={styles.btnContainer} onClick={() => closeModal()}>
            <img src={blackXIcon} alt="black-x-icon" />
          </button>
        </div>
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
                  dishContentContainerStyling={mobileDishModalStyles.cardContentContainer}
                  dishTitleStyling={mobileDishModalStyles.cardTitle}
                  dishDescriptionStyling={mobileDishModalStyles.cardDescription}
                  shouldDisplayFoodIcon={mobileDishModalStyles.shouldDisplayFoodIcon}
                  dishPriceContainerStyling={mobileDishModalStyles.dishPriceContainer}
                />
              </div>
              <ChooseSideDishes />
              <ChooseDishChanges />
              <ChooseQuantity />
              <button className={styles.addToBagBtn}>ADD TO BAG</button>
            </div>
          </div>
        </section>
        {isMobileOrTable && <Footer />}
      </div>
    </div>,
    document.getElementById("modal")!
  );
};

export default DishModal;
