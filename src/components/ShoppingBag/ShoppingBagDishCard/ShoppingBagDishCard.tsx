import { FC } from "react";
import { DishWithOptions } from "../../../types/types";
import styles from "./ShoppingBagDishCard.module.scss";
import useIsMobile from "../../../hooks/useIsMobile";
import useIsTablet from "../../../hooks/useIsTablet";
import { Icons } from "../../../assets/images";

interface ShoppingBagDishCardProps {
  dishWithOptions: DishWithOptions;
}
const ShoppingBagDishCard: FC<ShoppingBagDishCardProps> = ({ dishWithOptions }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMobileOrTablet = isMobile || isTablet;
  const totalPrice = dishWithOptions.quantity * dishWithOptions.dish.price;

  return (
    <div className={styles.ShoppingBagDishCardLayout}>
      <div className={styles.dishImageContainer}>
        <img src={dishWithOptions.dish.pictureUrl} alt={dishWithOptions.dish.name} />
      </div>
      <div className={styles.cardContentLayout}>
        <div className={styles.cardContentContainer}>
          <div className={styles.cardTitle}>
            <div className={styles.quantityContainer}>{isMobileOrTablet ? `${dishWithOptions.quantity}x` : dishWithOptions.quantity}</div>
            <div className={styles.dishName}>
              {dishWithOptions.dish.name}
              {!isMobileOrTablet && (
                <div className={styles.priceInTitleContainer}>
                  <div className={styles.currencyIconContainer}>
                    <img src={Icons.goldIlsIcon} alt="currency-icon" />
                  </div>
                  <div className={styles.priceTextContainer}>{parseFloat(dishWithOptions.dish.price.toString()).toFixed(2)}</div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.optionsContainer}>
            {dishWithOptions.options.map((option, index) => (
              <div className={styles.optionsWrapper} key={index}>
                {index > 0 && " | "}
                {index > 0 && <span>&nbsp;</span>}
                <span className={styles.singleOption}>{option}</span>
                {index < dishWithOptions.options.length - 1 && <span>&nbsp;</span>}
              </div>
            ))}
          </div>
          <div className={styles.totalPriceContainer}>
            <div className={styles.currencyIconContainer}>
              <img src={Icons.ilsIcon} alt="currencyIcon" />
            </div>
            {totalPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBagDishCard;
