import { configureStore } from "@reduxjs/toolkit";
import homePageReducer from "../slices/homePageSlice";
import shoppingBagReducer from "../slices/shoppingBagSlice";
import restaurantsPageReducer from "../slices/restaurantsPageSlice";
import chefsPageReducer from "../slices/chefsPageSlice";

const store = configureStore({
  reducer: {
    homePage: homePageReducer,
    shoppingBag: shoppingBagReducer,
    restaurantsPage: restaurantsPageReducer,
    chefsPage: chefsPageReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
