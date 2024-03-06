import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAllRestaurants, getPopularRestaurants, getNewRestaurants, getOpenNowRestaurants } from "../../apiService/restaurantApiService";
import { Restaurant } from "../../types/types";

export const fetchAllRestaurants = createAsyncThunk("restaurant/fetchAll", async (): Promise<Restaurant[]> => {
  return await getAllRestaurants();
});
export const fetchPopularRestaurants = createAsyncThunk("restaurant/fetchPopular", async (): Promise<Restaurant[]> => {
  return await getPopularRestaurants();
});
export const fetchNewRestaurants = createAsyncThunk("restaurant/fetchNew", async (): Promise<Restaurant[]> => {
  return await getNewRestaurants();
});
export const fetchOpenNowRestaurants = createAsyncThunk("restaurant/fetchOpenNow", async (): Promise<Restaurant[]> => {
  return await getOpenNowRestaurants();
});
