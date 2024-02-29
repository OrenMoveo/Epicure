import { createAsyncThunk } from "@reduxjs/toolkit";
import { HomePageState } from "../slices/homePageSlice";
import { getPopularRestaurant } from "../../apiService/restaurantApiService";
import { getSignatureDishes } from "../../apiService/dishApiService";
import { getChefOfTheWeek } from "../../apiService/chefApiService";

export const fetchHomePageData = createAsyncThunk("homePage/fetchData", async (): Promise<HomePageState> => {
  const popularRestaurants = await getPopularRestaurant();
  const signatureDishes = await getSignatureDishes();
  const chefOfTheWeek = await getChefOfTheWeek();

  return {
    popularRestaurants,
    signatureDishes,
    chefOfTheWeek,
  };
});
