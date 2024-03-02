import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Restaurant } from "../../types/types";
import { sliceNames } from "../../shared/constants";

export interface RestaurantsPageState {
  allRestaurants: Restaurant[];
  newRestaurants: Restaurant[];
  mostPopularRestaurants: Restaurant[];
  openNowRestaurants: Restaurant[];
}

const initialState: RestaurantsPageState = {
  allRestaurants: [],
  newRestaurants: [],
  mostPopularRestaurants: [],
  openNowRestaurants: [],
};

const restaurantsPageSlice = createSlice({
  name: sliceNames.restaurantsPageSlice,
  initialState: initialState,
  reducers: {
    setAllRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.allRestaurants = action.payload;
    },
    setNewRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.newRestaurants = action.payload;
    },
    setMostPopularRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.mostPopularRestaurants = action.payload;
    },
    setOpenNowRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.openNowRestaurants = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setAllRestaurants, setNewRestaurants, setMostPopularRestaurants, setOpenNowRestaurants } = restaurantsPageSlice.actions;

export default restaurantsPageSlice.reducer;
