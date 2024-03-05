import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Restaurant } from "../../types/types";
import { sliceNames } from "../../shared/constants";
import { fetchRestaurantData } from "../thunks/restaurantThunk";

export interface RestaurantState {
  allRestaurants: Restaurant[];
  popularRestaurants: Restaurant[];
}

const initialState: RestaurantState = {
  allRestaurants: [],
  popularRestaurants: [],
};

const restaurantSlice = createSlice({
  name: sliceNames.restaurantSlice,
  initialState: initialState,
  reducers: {
    setAllRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.allRestaurants = action.payload;
    },
    setPopularRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.popularRestaurants = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurantData.fulfilled, (state, action) => {
      state.allRestaurants = action.payload.allRestaurants;
      state.popularRestaurants = action.payload.popularRestaurants;
    });
  },
});

export const { setAllRestaurants, setPopularRestaurants } = restaurantSlice.actions;

export default restaurantSlice.reducer;
