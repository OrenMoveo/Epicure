import { configureStore } from "@reduxjs/toolkit";
import homePageReducer from "../slices/homePageSlice";

const store = configureStore({
  reducer: {
    homePage: homePageReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
