import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Restaurant } from "../../types/types";
import { sliceNames } from "../../shared/constants";
import { fetchAllRestaurants, fetchNewRestaurants, fetchOpenNowRestaurants, fetchPopularRestaurants } from "../thunks/restaurantThunk";

export interface RestaurantState {
  allRestaurants: Restaurant[];
  popularRestaurants: Restaurant[];
  newRestaurants: Restaurant[];
  openNowRestaurants: Restaurant[];
}

const initialState: RestaurantState = {
  allRestaurants: [],
  popularRestaurants: [],
  newRestaurants: [],
  openNowRestaurants: [],
};

const restaurantSlice = createSlice({
  name: sliceNames.restaurantSlice,
  initialState: initialState,
  reducers: {
    setAllRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.allRestaurants = action.payload;
    },
    setNewRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.newRestaurants = action.payload;
    },
    setOpenNowRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.openNowRestaurants = action.payload;
    },
    setPopularRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.popularRestaurants = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllRestaurants.fulfilled, (state, action) => {
      state.allRestaurants = action.payload;
    });
    builder.addCase(fetchNewRestaurants.fulfilled, (state, action) => {
      state.newRestaurants = action.payload;
    });
    builder.addCase(fetchOpenNowRestaurants.fulfilled, (state, action) => {
      state.openNowRestaurants = action.payload;
    });
    builder.addCase(fetchPopularRestaurants.fulfilled, (state, action) => {
      state.popularRestaurants = action.payload;
    });
  },
});

export const { setAllRestaurants, setPopularRestaurants, setNewRestaurants, setOpenNowRestaurants } = restaurantSlice.actions;

export default restaurantSlice.reducer;
