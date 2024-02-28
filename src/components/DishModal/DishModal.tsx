import styles from "./DishModal.module.scss";
import { desktopStyles, mobileStyles } from "./DishCardStylesComposition";
import { Dish } from "../../types/types";
import DishCard from "../DishCard/DishCard";
import ChooseSideDishes from "../ChooseSideDishes/ChooseSideDishes";
import ChooseDishChanges from "../ChooseDishChanges/ChooseDishChanges";
import ChooseQuantity from "../ChooseQuantity/ChooseQuantity";
import { createPortal } from "react-dom";
import { FC, useRef, useState } from "react";
import { useModalContext } from "../../context/ModalContext";
import { Icons } from "../../assets/images";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
import Footer from "../Footer/Footer";
import { useShoppingBagContext } from "../../context/ShoppingBagContext";
import AppButton from "../AppButton/AppButton";
import { generateUniqueKey } from "../../shared/utils";

interface DishModalProps {
  dish: Dish;
}

const DishModal: FC<DishModalProps> = ({ dish }) => {
  const SINGLE_DISH = 1;
  const [quantity, setQuantity] = useState<number>(SINGLE_DISH);
  const [dishChanges, setDishChanges] = useState<string[]>([]);
  const [sideDishes, setsSideDishes] = useState<string[]>([]);

  const options = [...dishChanges, ...sideDishes];
  const modalContainerRef = useRef(document.getElementById("modal"));

  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMobileOrTablet = isMobile || isTablet;

  const { closeDishModal, openDeleteOrderModal, openModal } = useModalContext();
  const { order, updateNewOrderDish } = useShoppingBagContext();

  const handleClickModal = () => {
    if (order.restaurantName === dish.restaurant.name || order.restaurantName === "") {
      updateShoppingBag({ dish, options: options, quantity, keyId: generateUniqueKey({ dish, options: options, quantity }) });
      closeDishModal();
    } else {
      updateNewOrderDish({ dish, options: options, quantity, keyId: generateUniqueKey({ dish, options: options, quantity }) });
      openModal();
      openDeleteOrderModal();
    }
  };

  const closeModalDesktop = () => {
    if (isMobileOrTablet) {
      return;
    }
    closeDishModal();
  };

  const { updateShoppingBag } = useShoppingBagContext();

  return modalContainerRef.current
    ? createPortal(
        <div className={styles.modalOverlay} onClick={() => closeModalDesktop()}>
          <div className={styles.DishModalLayout} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <button className={styles.btnContainer} onClick={() => closeDishModal()}>
                {isMobileOrTablet ? <img src={Icons.blackXIcon} alt="black-x-icon" /> : <img src={Icons.whiteXIcon} alt="white-x-icon" />}
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
                        key={dish._id}
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
                        key={dish._id}
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
                    <ChooseSideDishes setSideDishes={setsSideDishes} />
                    <ChooseDishChanges setDishChanges={setDishChanges} />
                    <ChooseQuantity quantity={quantity} setQuantity={setQuantity} />
                  </div>
                  <AppButton handleClick={handleClickModal} isBlack={true} buttonContent="ADD TO BAG" />
                </div>
              </div>
            </section>
            {isMobileOrTablet && <Footer />}
          </div>
        </div>,
        modalContainerRef.current
      )
    : null;
};

export default DishModal;
