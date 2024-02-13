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
import whiteXIcon from "../../assets/images/whiteXIcon.svg";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
import Footer from "../Footer/Footer";

interface DishModalProps {
  dish: Dish;
}

const DishModal: FC<DishModalProps> = ({ dish }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMobileOrTablet = isMobile || isTablet;

  const { setIsModalActive } = useModalContext();
  const closeModal = () => {
    setIsModalActive(false);
  };

  const closeModalDesktop = () => {
    if (isMobileOrTablet) {
      return;
    }
    setIsModalActive(false);
  };
  const mobileStyles = {
    cardImage: { display: "none" },
    cardWith: { width: "100%" },
    cardContentLayout: {
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

  const desktopStyles = {
    cardImage: { display: "none" },
    cardWith: { width: "100%" },
    cardContentContainer: {
      gap: "14px",
      paddingTop: "0",
    },
    cardContentLayout: {
      backgroundColor: "white",
      width: "232px",
      height: "unset",
      justifyContent: "center",
      alignItems: "center",
    },
    cardTitle: {
      width: "unset",
      fontSize: "32px",
      fontWeight: "400",
      lineHeight: "26px",
      letterSpacing: "2.6700000762939453px",
      order: "-2",
    },
    cardDescription: {
      width: "unset",
      height: "unset",
      gap: "14px",
      fontSize: "13px",
      lineHeight: "18px",
      letterSpacing: "1.9700000286102295px",
      order: "-1",
      paddingBottom: "0",
    },
    dishPriceContainer: { order: "1", gap: "12px" },
    dishPriceTextStyling: {
      fontSize: "24px",
      fontWeight: "400",
      lineHeight: "30px",
      letterSpacing: "1.0299999713897705px",
    },
    lineStyling: { width: "83.5px" },
  };
  return createPortal(
    <div className={styles.modalOverlay} onClick={() => closeModalDesktop()}>
      <div className={styles.DishModalLayout} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <button className={styles.btnContainer} onClick={() => closeModal()}>
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
                    cardWith={mobileStyles.cardWith}
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
                    cardWith={desktopStyles.cardWith}
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
                <ChooseDishChanges />
                <ChooseQuantity />
              </div>
              <button className={styles.addToBagBtn}>ADD TO BAG</button>
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
