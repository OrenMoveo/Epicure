import { createAsyncThunk } from "@reduxjs/toolkit";
import { RestaurantsPageState } from "../slices/restaurantsPageSlice";
import { getAllRestaurants } from "../../apiService/restaurantApiService";

export const fetchRestaurantsPageData = createAsyncThunk("restaurantsPage/fetchData", async (): Promise<RestaurantsPageState> => {
  const allRestaurants = await getAllRestaurants();

  return {
    allRestaurants,
  };
});
