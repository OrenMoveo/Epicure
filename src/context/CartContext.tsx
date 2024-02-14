import React, { createContext, useState, useContext } from "react";
import { Order, Dish } from "../types/types";

interface CartContextType {
  cartSum: number;
  updateCartSum: (dishPrice: number) => void;
  order: Order;
  updateCart: (dish: Dish, quantity: number) => void;
  isEmptyCart: boolean;
}

const CartContext = createContext<CartContextType>({
  cartSum: 0,
  updateCartSum: (dishPrice: number) => {},
  order: { restaurantName: "", dishes: [] },
  updateCart: (dish: Dish, quantity: number) => {},
  isEmptyCart: true,
});

export const useCartContext = () => useContext<CartContextType>(CartContext);

export const CartProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [cartSum, setCartSum] = useState(0);
  const [order, setOrder] = useState<Order>({ restaurantName: "", dishes: [] });

  const isEmptyCart = order.dishes.length == 0;

  const updateCartSum = (dishPrice: number) => {
    setCartSum((prevSum) => prevSum + dishPrice);
  };

  const updateCart = (dish: Dish, quantity: number) => {
    const dishesArray: Dish[] = Array.from({ length: quantity }, () => dish);
    if (order.restaurantName == dish.restaurant) {
      const currDishes = order.dishes;
      setOrder({ restaurantName: dish.restaurant, dishes: [...currDishes, ...dishesArray] });
    } else {
      setOrder({ restaurantName: dish.restaurant, dishes: [...dishesArray] });
    }
  };

  const value = { updateCartSum, cartSum, updateCart, order, isEmptyCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
