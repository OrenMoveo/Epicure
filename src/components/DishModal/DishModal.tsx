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
import AppButton from "../AppButton/AppButton";
import { generateUniqueKey } from "../../shared/utils";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../reduxToolkit/store/store";
import { updateNewOrderDish, updateShoppingBag } from "../../reduxToolkit/slices/shoppingBagSlice";
import { motion } from "framer-motion";

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
  const dispatch = useDispatch<AppDispatch>();
  const { order } = useSelector((state: RootState) => state.shoppingBag);

  const handleClickModal = () => {
    if (order.restaurantName === dish.restaurant.name || order.restaurantName === "") {
      dispatch(updateShoppingBag({ dish, options: options, quantity, keyId: generateUniqueKey({ dish, options: options }) }));
      closeDishModal();
    } else {
      dispatch(updateNewOrderDish({ dish, options: options, quantity, keyId: generateUniqueKey({ dish, options: options }) }));
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

  return modalContainerRef.current
    ? createPortal(
        <div className={styles.modalOverlay} onClick={() => closeModalDesktop()}>
          <motion.div
            className={styles.DishModalLayout}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
          >
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
          </motion.div>
        </div>,
        modalContainerRef.current
      )
    : null;
};

export default DishModal;
