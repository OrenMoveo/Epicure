import { FC } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
import styles from "./Cart.module.scss";
import { useCartContext } from "../../context/CartContext";
import DishCard from "../DishCard/DishCard";
import largeBagIcon from "../../assets/images/largeBagIcon.svg";
import currencyILSIcon from "../../assets/images/ILSIcon.svg";
import { mobileStyles } from "./DishCardCartStyling";
import CartDishCard from "../CartDishCard/CartDishCard";
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
              <div className={styles.orderContainer}>
                <div className={styles.cartTitle}>{isMobileOrTablet ? "MY ORDER" : "YOUR ORDER"}</div>
                <div className={styles.restaurantName}>{order.restaurantName}</div>
                <div className={styles.orderDishes}>
                  {order.dishes.map((dishWithOptions) => (
                    <CartDishCard dishWithOptions={dishWithOptions} key={dishWithOptions.dish.keyId} quantity={dishQuantities[dishWithOptions.dish.keyId] || 1} />
                  ))}
                </div>
              </div>
              <div className={styles.sumPaymentContainer}>
                {isMobileOrTablet ? "TOTAL - " : ""}
                <div className={styles.sumPaymentText}>
                  <div className={styles.currencyIconContainer}>
                    <img src={currencyILSIcon} alt="currency-ils-con" />
                  </div>
                  {cartSum}
                </div>
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
