import React, { createContext, useState, useContext } from "react";
import { Order, DishWithOptions } from "../types/types";
import { defaultDish } from "../shared/defaults";
interface ShoppingBagContextType {
  shoppingBagSum: number;
  order: Order;
  updateShoppingBag: (dish: DishWithOptions) => void;
  isEmptyShoppingBag: boolean;
  dishQuantities: Record<string, number>;
  getTotalQuantity: () => number;
  newOrderDish: DishWithOptions;
  updateNewOrderDish: (dish: DishWithOptions) => void;
  resetAndUpdateBag: (extendedDish: DishWithOptions) => void;
}

const ShoppingBagContext = createContext<ShoppingBagContextType>({
  shoppingBagSum: 0,
  order: { restaurantName: "", dishes: [] },
  updateShoppingBag: (dish: DishWithOptions) => {},
  isEmptyShoppingBag: true,
  dishQuantities: {},
  getTotalQuantity: () => 0,
  newOrderDish: { dish: defaultDish, quantity: 0, options: [], keyId: "" },
  updateNewOrderDish: (dish: DishWithOptions) => {},
  resetAndUpdateBag: (extendedDish: DishWithOptions) => {},
});

export const useShoppingBagContext = () => useContext<ShoppingBagContextType>(ShoppingBagContext);

export const ShoppingBagProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [shoppingBagSum, setShoppingBagSum] = useState(0);
  const [order, setOrder] = useState<Order>({ restaurantName: "", dishes: [] });
  const [newOrderDish, setNewOrderDish] = useState<DishWithOptions>({ dish: defaultDish, quantity: 0, options: [], keyId: "" });
  const [dishQuantities, setDishQuantities] = useState<Record<string, number>>({});

  const isEmptyShoppingBag = order.dishes.length == 0;

  const updateShoppingBagSum = (dishPrice: number) => {
    setShoppingBagSum((prevSum) => prevSum + dishPrice);
  };

  const updateNewOrderDish = (dish: DishWithOptions) => {
    setNewOrderDish(dish);
  };

  const updateShoppingBag = (extendedDish: DishWithOptions) => {
    const dishId = extendedDish.keyId;
    const newQuantity = (dishQuantities[dishId] || 0) + extendedDish.quantity;
    setDishQuantities({ ...dishQuantities, [dishId]: newQuantity });

    if (order.dishes.some((d) => d.keyId === dishId)) {
      setOrder((prevOrder) => ({
        restaurantName: prevOrder.restaurantName,
        dishes: prevOrder.dishes.map((d) => (d.keyId === dishId ? { ...d, quantity: newQuantity } : d)),
      }));
    } else {
      setOrder((prevOrder) => ({
        restaurantName: extendedDish.dish.restaurant.name,
        dishes: [...prevOrder.dishes, { ...extendedDish, quantity: newQuantity }],
      }));
    }

    const dishPrice = extendedDish.dish.price * extendedDish.quantity;
    updateShoppingBagSum(dishPrice);
  };

  const resetAndUpdateBag = (extendedDish: DishWithOptions) => {
    const dishId = extendedDish.dish._id;
    const totalPrice = extendedDish.quantity * extendedDish.dish.price;
    if (dishId) {
      setDishQuantities({ [dishId]: extendedDish.quantity });
    }
    setOrder({ restaurantName: extendedDish.dish.restaurant.name, dishes: [extendedDish] });
    setShoppingBagSum(totalPrice);
  };

  const getTotalQuantity = () => {
    return Object.values(dishQuantities).reduce((total, quantity) => total + quantity, 0);
  };
  const value = { shoppingBagSum, updateShoppingBag, order, isEmptyShoppingBag, dishQuantities, getTotalQuantity, resetAndUpdateBag, updateNewOrderDish, newOrderDish };

  return <ShoppingBagContext.Provider value={value}>{children}</ShoppingBagContext.Provider>;
};
