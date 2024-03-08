import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DishWithOptions, Order } from "../../types/types";
import { defaultDish } from "../../shared/defaults";
import { sliceNames } from "../../shared/constants";

interface ShoppingBagState {
  shoppingBagSum: number;
  order: Order;
  newOrderDish: DishWithOptions;
  dishQuantities: Record<string, number>;
  isEmptyShoppingBag: boolean;
  totalQuantity: number;
}

const initialState: ShoppingBagState = {
  shoppingBagSum: 0,
  order: { restaurantName: "", dishes: [] },
  newOrderDish: { dish: defaultDish, quantity: 0, options: [], keyId: "" },
  dishQuantities: {},
  isEmptyShoppingBag: true,
  totalQuantity: 0,
};

const shoppingBagSlice = createSlice({
  name: sliceNames.shoppingBagSlice,
  initialState,
  reducers: {
    updateShoppingBag: (state, action: PayloadAction<DishWithOptions>) => {
      const extendedDish = action.payload;
      const dishId = extendedDish.keyId;
      const newQuantity = (state.dishQuantities[dishId] || 0) + extendedDish.quantity;

      state.dishQuantities = { ...state.dishQuantities, [dishId]: newQuantity };
      state.order.restaurantName = extendedDish.dish.restaurant.name;

      if (state.order.dishes.some((d) => d.keyId === dishId)) {
        state.order.dishes = state.order.dishes.map((d) => (d.keyId === dishId ? { ...d, quantity: newQuantity } : d));
      } else {
        state.order.dishes = [...state.order.dishes, { ...extendedDish, quantity: newQuantity }];
      }

      const dishPrice = extendedDish.dish.price * extendedDish.quantity;
      state.shoppingBagSum += dishPrice;

      state.isEmptyShoppingBag = state.order.dishes.length == 0;
      state.totalQuantity = Object.values(state.dishQuantities).reduce((total, quantity) => total + quantity, 0);
    },

    resetAndUpdateBag: (state, action: PayloadAction<DishWithOptions>) => {
      const extendedDish = action.payload;
      const dishId = extendedDish.keyId;
      const totalPrice = extendedDish.quantity * extendedDish.dish.price;

      if (dishId) {
        state.dishQuantities = { [dishId]: extendedDish.quantity };
      }

      state.order = {
        restaurantName: extendedDish.dish.restaurant.name,
        dishes: [extendedDish],
      };

      state.shoppingBagSum = totalPrice;
      state.totalQuantity = Object.values(state.dishQuantities).reduce((total, quantity) => total + quantity, 0);
    },

    updateNewOrderDish: (state, action: PayloadAction<DishWithOptions>) => {
      state.newOrderDish = action.payload;
    },

    emptyShoppingBag: (state) => {
      state.shoppingBagSum = 0;
      state.order = { restaurantName: "", dishes: [] };
      state.dishQuantities = {};
      state.isEmptyShoppingBag = true;
      state.totalQuantity = 0;
    },
  },
});

export const selectIsEmptyShoppingBag = (state: { shoppingBag: ShoppingBagState }) => {
  return state.shoppingBag.isEmptyShoppingBag;
};

export const selectTotalQuantity = (state: { shoppingBag: ShoppingBagState }) => {
  return state.shoppingBag.totalQuantity;
};

export const { updateShoppingBag, resetAndUpdateBag, updateNewOrderDish, emptyShoppingBag } = shoppingBagSlice.actions;
export default shoppingBagSlice.reducer;
