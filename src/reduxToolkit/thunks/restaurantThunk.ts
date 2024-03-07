import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAllRestaurants, getPopularRestaurants, getNewRestaurants, getOpenNowRestaurants } from "../../apiService/restaurantApiService";
import { Restaurant } from "../../types/types";

export const fetchAllRestaurants = createAsyncThunk("restaurant/fetchAll", async (page: string): Promise<Restaurant[]> => {
  return await getAllRestaurants(page);
});
export const fetchPopularRestaurants = createAsyncThunk("restaurant/fetchPopular", async (page: string): Promise<Restaurant[]> => {
  return await getPopularRestaurants(page);
});
export const fetchNewRestaurants = createAsyncThunk("restaurant/fetchNew", async (page: string): Promise<Restaurant[]> => {
  return await getNewRestaurants(page);
});
export const fetchOpenNowRestaurants = createAsyncThunk("restaurant/fetchOpenNow", async (page: string): Promise<Restaurant[]> => {
  return await getOpenNowRestaurants(page);
});
