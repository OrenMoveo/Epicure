import { FC } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
import styles from "./ShoppingBag.module.scss";
import { useShoppingBagContext } from "../../context/ShoppingBagContext";
import largeShoppingBagIcon from "../../assets/images/largeShoppingBagIcon.svg";
import currencyILSIcon from "../../assets/images/ILSIcon.svg";
import ShoppingBagDishCard from "../ShoppingBagDishCard/ShoppingBagDishCard";

const ShoppingBag: FC = () => {
  const { updateShoppingBagSum, shoppingBagSum, order, updateShoppingBag, isEmptyShoppingBag, dishQuantities } = useShoppingBagContext();

  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMobileOrTablet = isMobile || isTablet;

  return (
    <div className={styles.shoppingBagLayout}>
      <div className={styles.shoppingBagContent}>
        <div className={styles.shoppingBagContentContainer}>
          {isEmptyShoppingBag ? (
            <div className={styles.emptyShoppingBag}>
              <img src={largeShoppingBagIcon} alt="empty-shoppingBag" />
              <div className={styles.emptyShoppingBagText}>YOUR BAG IS EMPTY</div>
            </div>
          ) : (
            <div className={styles.nonEmptyShoppingBag}>
              <div className={styles.orderContainer}>
                <div className={styles.shoppingBagTitle}>{isMobileOrTablet ? "MY ORDER" : "YOUR ORDER"}</div>
                <div className={styles.restaurantName}>{order.restaurantName}</div>
                <div className={styles.orderDishes}>
                  {order.dishes.map((dishWithOptions) => (
                    <ShoppingBagDishCard dishWithOptions={dishWithOptions} key={dishWithOptions.dish.keyId} quantity={dishQuantities[dishWithOptions.dish.keyId] || 1} />
                  ))}
                </div>
              </div>
              <div className={styles.sumPaymentContainer}>
                {!isMobileOrTablet && <div className={styles.line}></div>}
                {isMobileOrTablet ? "TOTAL - " : ""}
                <div className={styles.sumPaymentText}>
                  <div className={styles.currencyIconContainer}>
                    <img src={currencyILSIcon} alt="currency-ils-con" />
                  </div>
                  {shoppingBagSum}
                </div>
                {!isMobileOrTablet && <div className={styles.line}></div>}
              </div>
              {isMobileOrTablet ? (
                ""
              ) : (
                <div className={styles.addACommentContainer}>
                  Add A Comment
                  <textarea className={styles.textArea} placeholder="Special requests, allergies, detary restrictions, etc." />
                </div>
              )}
              <button className={styles.checkoutBtn}>CHECKOUT</button>
              {!isMobileOrTablet && <button className={styles.orderHistoryBtn}>ORDER HISTORY</button>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;
