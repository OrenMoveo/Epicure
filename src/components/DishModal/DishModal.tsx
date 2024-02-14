import styles from "./DishModal.module.scss";
import { desktopStyles, mobileStyles } from "./DishCardStylesComposition";
import { Dish, DishChangeStateInterface } from "../../types/types";
import DishCard from "../DishCard/DishCard";
import ChooseSideDishes from "../ChooseSideDishes/ChooseSideDishes";
import ChooseDishChanges from "../ChooseDishChanges/ChooseDishChanges";
import ChooseQuantity from "../ChooseQuantity/ChooseQuantity";
import { createPortal } from "react-dom";
import { FC, useState } from "react";
import { useModalContext } from "../../context/ModalContext";
import blackXIcon from "../../assets/images/blackXIcon.svg";
import whiteXIcon from "../../assets/images/whiteXIcon.svg";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
import Footer from "../Footer/Footer";
import { useShoppingBagContext } from "../../context/ShoppingBagContext";

interface DishModalProps {
  dish: Dish;
}

const DishModal: FC<DishModalProps> = ({ dish }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [dishChanges, setDishChanges] = useState<DishChangeStateInterface[]>([
    { name: "Without peanuts", isChecked: false },
    { name: "Less spicy", isChecked: false },
  ]);

  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMobileOrTablet = isMobile || isTablet;

  const { closeDishModal } = useModalContext();

  const closeModalDesktop = () => {
    if (isMobileOrTablet) {
      return;
    }
    closeDishModal();
  };

  const { updateShoppingBag } = useShoppingBagContext();

  return createPortal(
    <div className={styles.modalOverlay} onClick={() => closeModalDesktop()}>
      <div className={styles.DishModalLayout} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <button className={styles.btnContainer} onClick={() => closeDishModal()}>
            {isMobileOrTablet ? <img src={blackXIcon} alt="black-x-icon" /> : <img src={whiteXIcon} alt="white-x-icon" />}
          </button>
        </div>
        <div className={styles.heroContainer}>
          <img src={dish.pictureUrl} alt={dish.name} />
        </div>
        <section className={styles.dishContentSection}>
          <div className={styles.dishContentLayout}>
            <div className={styles.dishContentContainer}>
              <div className={styles.dishInformationContainer}>
                {isMobileOrTablet ? (
                  <DishCard
                    dish={dish}
                    key={dish.keyId}
                    dishImageSize={mobileStyles.cardImage}
                    cardContainerStyling={mobileStyles.cardWith}
                    dishContentLayoutStyling={mobileStyles.cardContentLayout}
                    dishTitleStyling={mobileStyles.cardTitle}
                    dishDescriptionStyling={mobileStyles.cardDescription}
                    shouldDisplayFoodIcon={mobileStyles.shouldDisplayFoodIcon}
                    dishPriceContainerStyling={mobileStyles.dishPriceContainer}
                  />
                ) : (
                  <DishCard
                    dish={dish}
                    key={dish.keyId}
                    dishImageSize={desktopStyles.cardImage}
                    cardContainerStyling={desktopStyles.cardWith}
                    dishContentLayoutStyling={desktopStyles.cardContentLayout}
                    dishTitleStyling={desktopStyles.cardTitle}
                    dishDescriptionStyling={desktopStyles.cardDescription}
                    shouldDisplayFoodIcon={true}
                    dishPriceContainerStyling={desktopStyles.dishPriceContainer}
                    dishContentContainerStyling={desktopStyles.cardContentContainer}
                    dishPriceTextStyling={desktopStyles.dishPriceTextStyling}
                    shouldDisplayLeftSideLine={true}
                    shouldDisplayRightSideLine={true}
                    lineStyling={desktopStyles.lineStyling}
                  />
                )}
              </div>
              <div className={styles.orderAddonsContainer}>
                <ChooseSideDishes />
                <ChooseDishChanges dishChanges={dishChanges} setDishChanges={setDishChanges} />
                <ChooseQuantity quantity={quantity} setQuantity={setQuantity} />
              </div>
              <button
                className={styles.addToBagBtn}
                onClick={() => {
                  updateShoppingBag({ dish, options: dishChanges }, quantity);
                  closeDishModal();
                }}
              >
                ADD TO BAG
              </button>
            </div>
          </div>
        </section>
        {isMobileOrTablet && <Footer />}
      </div>
    </div>,
    document.getElementById("modal")!
  );
};

export default DishModal;
