import { createAsyncThunk } from "@reduxjs/toolkit";
import { RestaurantState } from "../slices/restaurantSlice";
import { getAllRestaurants, getPopularRestaurant } from "../../apiService/restaurantApiService";

export const fetchRestaurantData = createAsyncThunk("restaurant/fetchData", async (): Promise<RestaurantState> => {
  const allRestaurants = await getAllRestaurants();
  const popularRestaurants = await getPopularRestaurant();

  return {
    allRestaurants,
    popularRestaurants,
  };
});
