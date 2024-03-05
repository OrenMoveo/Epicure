import { configureStore } from "@reduxjs/toolkit";
import shoppingBagReducer from "../slices/shoppingBagSlice";
import restaurantReducer from "../slices/restaurantSlice";
import chefReducer from "../slices/chefSlice";
import dishReducer from "../slices/dishSlice";

const store = configureStore({
  reducer: {
    chef: chefReducer,
    restaurant: restaurantReducer,
    dish: dishReducer,
    shoppingBag: shoppingBagReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
