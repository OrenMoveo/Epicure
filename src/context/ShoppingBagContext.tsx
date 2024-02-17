import React, { createContext, useState, useContext } from "react";
import { Order, DishWithOptions } from "../types/types";

interface ShoppingBagContextType {
  shoppingBagSum: number;
  order: Order;
  updateShoppingBag: (dish: DishWithOptions, quantity: number) => void;
  isEmptyShoppingBag: boolean;
  dishQuantities: Record<string, number>;
  getTotalQuantity: () => number;
}

const ShoppingBagContext = createContext<ShoppingBagContextType>({
  shoppingBagSum: 0,
  order: { restaurantName: "", dishes: [] },
  updateShoppingBag: (dish: DishWithOptions, quantity: number) => {},
  isEmptyShoppingBag: true,
  dishQuantities: {},
  getTotalQuantity: () => 0,
});

export const useShoppingBagContext = () => useContext<ShoppingBagContextType>(ShoppingBagContext);

export const ShoppingBagProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [shoppingBagSum, setShoppingBagSum] = useState(0);
  const [order, setOrder] = useState<Order>({ restaurantName: "", dishes: [] });

  const [dishQuantities, setDishQuantities] = useState<Record<string, number>>({});

  const isEmptyShoppingBag = order.dishes.length == 0;

  const updateShoppingBagSum = (dishPrice: number) => {
    setShoppingBagSum((prevSum) => prevSum + dishPrice);
  };

  const updateShoppingBag = (extendedDish: DishWithOptions, quantity: number) => {
    const dishId = extendedDish.dish.keyId;

    const newQuantity = (dishQuantities[dishId] || 0) + quantity;
    setDishQuantities({ ...dishQuantities, [dishId]: newQuantity });

    if (!order.dishes.some((d) => d.dish.keyId === dishId)) {
      if (order.restaurantName === extendedDish.dish.restaurant || order.restaurantName === "") {
        setOrder((prevOrder) => ({
          restaurantName: extendedDish.dish.restaurant,
          dishes: [...prevOrder.dishes, extendedDish],
        }));
      } else {
        setDishQuantities({ [dishId]: quantity });
        setOrder({ restaurantName: extendedDish.dish.restaurant, dishes: [extendedDish] });
      }
    }
    const dishPrice = extendedDish.dish.price * quantity;
    updateShoppingBagSum(dishPrice);
  };

  const getTotalQuantity = () => {
    return Object.values(dishQuantities).reduce((total, quantity) => total + quantity, 0);
  };
  const value = { shoppingBagSum, updateShoppingBag, order, isEmptyShoppingBag, dishQuantities, getTotalQuantity };

  return <ShoppingBagContext.Provider value={value}>{children}</ShoppingBagContext.Provider>;
};
