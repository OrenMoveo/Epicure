import { FC } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
import styles from "./Cart.module.scss";
import { useCartContext } from "../../context/CartContext";
import DishCard from "../DishCard/DishCard";
import largeBagIcon from "../../assets/images/largeBagIcon.svg";
import currencyILSIcon from "../../assets/images/ILSIcon.svg";
import { mobileStyles } from "./DishCardCartStyling";
interface CartProps {
  shouldDisplayRightSideLine?: boolean;
  shouldDisplayLeftSideLine?: boolean;
}

const Cart: FC<CartProps> = ({ shouldDisplayLeftSideLine, shouldDisplayRightSideLine }) => {
  const { updateCartSum, cartSum, order, updateCart, isEmptyCart, dishQuantities } = useCartContext();

  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMobileOrTablet = isMobile || isTablet;

  return (
    <div className={styles.cartLayout}>
      <div className={styles.cartContent}>
        <div className={styles.cartContentContainer}>
          {isEmptyCart ? (
            <div className={styles.emptyCart}>
              <img src={largeBagIcon} alt="empty-cart" />
              <div className={styles.emptyCartText}>YOUR BAG IS EMPTY</div>
            </div>
          ) : (
            <div className={styles.nonEmptyCart}>
              <div className={styles.cartTitle}>{isMobileOrTablet ? "MY ORDER" : "YOUR ORDER"}</div>
              <div className={styles.restaurantName}>{order.restaurantName}</div>
              <div className={styles.orderDishes}>
                {order.dishes.map((dish) => (
                  <DishCard
                    dish={dish}
                    key={dish.keyId}
                    cardContainerStyling={mobileStyles.cardContainerStyling}
                    dishImageSize={mobileStyles.dishImageSize}
                    dishContentLayoutStyling={mobileStyles.dishContentLayout}
                    dishContentContainerStyling={mobileStyles.dishContentContainer}
                    quantity={dishQuantities[dish.keyId] || 1}
                  />
                ))}
              </div>
              <div className={styles.sumPaymentContainer}>
                {shouldDisplayLeftSideLine && <div className={styles.line}></div>}
                {isMobileOrTablet ? "TOTAL - " : ""}
                <img src={currencyILSIcon} alt="currency-ils-con" />
                <div className={styles.sumPaymentText}>{cartSum}</div>
                {shouldDisplayRightSideLine && <div className={styles.line}></div>}
              </div>
              {isMobileOrTablet ? (
                ""
              ) : (
                <div className={styles.checkoutContainer}>
                  Add A Comment
                  <textarea className={styles.textArea} placeholder="Special requests, allergies, detary restrictions, etc." />
                </div>
              )}
              <button className={styles.checkoutBtn}>CHECKOUT</button>
              {isMobileOrTablet ? "" : <button className={styles.orderHistory}>ORDER HISTORY</button>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
