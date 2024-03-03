import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Restaurant } from "../../types/types";
import { sliceNames } from "../../shared/constants";
import { fetchRestaurantsPageData } from "../thunks/restaurantsPageThunk";

export interface RestaurantsPageState {
  allRestaurants: Restaurant[];
}

const initialState: RestaurantsPageState = {
  allRestaurants: [],
};

const restaurantsPageSlice = createSlice({
  name: sliceNames.restaurantsPageSlice,
  initialState: initialState,
  reducers: {
    setAllRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.allRestaurants = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurantsPageData.fulfilled, (state, action) => {
      state.allRestaurants = action.payload.allRestaurants;
    });
  },
});

export const { setAllRestaurants } = restaurantsPageSlice.actions;

export default restaurantsPageSlice.reducer;
