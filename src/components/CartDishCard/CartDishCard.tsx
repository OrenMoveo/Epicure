import { FC } from "react";
import { DishWithOptions } from "../../types/types";
import styles from "./CartDishCard.module.scss";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
import ILSIcon from "../../assets/images/ILSIcon.svg";

interface CartDishCardProps {
  dishWithOptions: DishWithOptions;
  quantity: number;
}
const CartDishCard: FC<CartDishCardProps> = ({ dishWithOptions, quantity }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMobileOrTablet = isMobile || isTablet;
  const totalPrice = quantity * dishWithOptions.dish.price;

  return (
    <div className={styles.CartDishCardLayout}>
      <div className={styles.dishImageContainer}>
        <img src={dishWithOptions.dish.pictureUrl} alt={dishWithOptions.dish.name} />
      </div>
      <div className={styles.cardContentLayout}>
        <div className={styles.cardContentContainer}>
          <div className={styles.cardTitle}>
            <div className={styles.quantityContainer}>{isMobileOrTablet ? `${quantity}x` : quantity}</div>
            <div className={styles.dishName}>
              {dishWithOptions.dish.name}
              {!isMobileOrTablet && (
                <div className={styles.priceInTitleContainer}>
                  <div className={styles.currencyIconContainer}>
                    <img src={ILSIcon} alt="currencyIcon" />
                  </div>
                  {dishWithOptions.dish.price}
                </div>
              )}
            </div>
          </div>
          <div className={styles.optionsContainer}>
            {dishWithOptions.options.map((option, index) => (
              <div className={styles.optionsWrapper} key={index}>
                {index > 0 && " | "}
                {index > 0 && <span>&nbsp;</span>}
                <span className={styles.singleOption}>{option.name}</span>
                {index < dishWithOptions.options.length - 1 && <span>&nbsp;</span>}
              </div>
            ))}
          </div>
          <div className={styles.totalPriceContainer}>
            <div className={styles.currencyIconContainer}>
              <img src={ILSIcon} alt="currencyIcon" />
            </div>
            {totalPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDishCard;
