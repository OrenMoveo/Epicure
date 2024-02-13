import styles from "./DishCard.module.scss";
import ILSIcon from "../../assets/images/ILSIcon.svg";
import { Dish } from "../../types/types";
import React, { FC } from "react";
import { useModalContext } from "../../context/ModalContext/ModalContext";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
interface DishCardProps {
  dish: Dish;
  shouldDisplayFoodIcon?: boolean;
  cardWith?: React.CSSProperties;
  dishImageSize?: React.CSSProperties;
  dishContentLayoutStyling?: React.CSSProperties;
  shouldDisplayRightSideLine?: boolean;
  shouldDisplayLeftSideLine?: boolean;
  dishPriceStyling?: React.CSSProperties;
  lineStyling?: React.CSSProperties;
  dishPriceContainerStyling?: React.CSSProperties;
  dishPriceTextStyling?: React.CSSProperties;
  dishDescriptionStyling?: React.CSSProperties;
  dishTitleStyling?: React.CSSProperties;
  currencyIconSize?: React.CSSProperties;
  priceTextContainerStyling?: React.CSSProperties;
  dishContentContainerStyling?: React.CSSProperties;
}

const DishCard: FC<DishCardProps> = (props) => {
  const { updateDish, openDishModal } = useModalContext();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMobileOrTable = isMobile || isTablet;
  const handleModalClick = () => {
    openDishModal();
    updateDish(props.dish);
    if (isMobileOrTable) window.scrollTo(0, 0);
  };

  return (
    <button className={styles.dishCardContainer} style={props.cardWith} onClick={() => handleModalClick()}>
      <div className={styles.dishImageContainer} style={props.dishImageSize}>
        <img src={props.dish.pictureUrl} alt={props.dish.name} />
      </div>
      <div className={styles.dishContentLayout} style={props.dishContentLayoutStyling}>
        <div className={styles.dishContentContainer} style={props.dishContentContainerStyling}>
          <p className={styles.dishTitle} style={props.dishTitleStyling}>
            {props.dish.name}
          </p>
          <div className={styles.dishDescription} style={props.dishDescriptionStyling}>
            {props.dish.description}
          </div>
          {props.shouldDisplayFoodIcon && (
            <div className={styles.foodIconContainer}>
              <img src={props.dish.foodIcon} alt="food icon" />
            </div>
          )}
          <div className={styles.dishPriceContainer} style={props.dishPriceContainerStyling}>
            {props.shouldDisplayLeftSideLine && <div className={styles.line} style={props.lineStyling}></div>}
            <div className={styles.dishPriceTextContainer} style={props.priceTextContainerStyling}>
              <div className={styles.currencyIconContainer}>
                <img src={ILSIcon} alt="currencyIcon" style={props.currencyIconSize} />
              </div>
              <p className={styles.dishPriceAmount} style={props.dishPriceTextStyling}>
                {props.dish.price}
              </p>
            </div>
            {props.shouldDisplayRightSideLine && <div className={styles.line} style={props.lineStyling}></div>}
          </div>
        </div>
      </div>
    </button>
  );
};

export default DishCard;
