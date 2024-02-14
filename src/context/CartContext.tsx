import React, { createContext, useState, useContext } from "react";
import { Order, Dish } from "../types/types";

interface CartContextType {
  cartSum: number;
  updateCartSum: (dishPrice: number) => void;
  order: Order;
  updateCart: (dish: Dish, quantity: number) => void;
  isEmptyCart: boolean;
  dishQuantities: Record<string, number>;
}

const CartContext = createContext<CartContextType>({
  cartSum: 0,
  updateCartSum: (dishPrice: number) => {},
  order: { restaurantName: "", dishes: [] },
  updateCart: (dish: Dish, quantity: number) => {},
  isEmptyCart: true,
  dishQuantities: {},
});

export const useCartContext = () => useContext<CartContextType>(CartContext);

export const CartProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [cartSum, setCartSum] = useState(0);
  const [order, setOrder] = useState<Order>({ restaurantName: "", dishes: [] });

  const [dishQuantities, setDishQuantities] = useState<Record<string, number>>({});

  const isEmptyCart = order.dishes.length == 0;

  const updateCartSum = (dishPrice: number) => {
    setCartSum((prevSum) => prevSum + dishPrice);
  };

  const updateCart = (dish: Dish, quantity: number) => {
    const dishId = dish.keyId;

    const newQuantity = (dishQuantities[dishId] || 0) + quantity;
    setDishQuantities({ ...dishQuantities, [dishId]: newQuantity });

    if (!order.dishes.some((d) => d.keyId === dishId)) {
      if (order.restaurantName === dish.restaurant || order.restaurantName === "") {
        setOrder((prevOrder) => ({
          restaurantName: dish.restaurant,
          dishes: [...prevOrder.dishes, dish],
        }));
      } else {
        setDishQuantities({ [dishId]: quantity });
        setOrder({ restaurantName: dish.restaurant, dishes: [dish] });
      }
    }
  };

  const getTotalQuantity = () => {
    return Object.values(dishQuantities).reduce((total, quantity) => total + quantity, 0);
  };
  const value = { updateCartSum, cartSum, updateCart, order, isEmptyCart, dishQuantities, getTotalQuantity };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
