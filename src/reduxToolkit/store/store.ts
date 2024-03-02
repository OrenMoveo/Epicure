import { configureStore } from "@reduxjs/toolkit";
import homePageReducer from "../slices/homePageSlice";
import shoppingBagReducer from "../slices/shoppingBagSlice";

const store = configureStore({
  reducer: {
    homePage: homePageReducer,
    shoppingBag: shoppingBagReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
