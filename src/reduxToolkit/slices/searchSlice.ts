import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sliceNames } from "../../shared/constants";
import { Chef, Dish, Restaurant } from "../../types/types";
import { fetchSearchedData } from "../thunks/searchThunk";

export interface SearchState {
  searchedData: { restaurants: Restaurant[]; chefs: Chef[]; dishes: Dish[] };
  searchTerm: string;
}

const initialState: SearchState = {
  searchedData: { restaurants: [], chefs: [], dishes: [] },
  searchTerm: "",
};

const searchSlice = createSlice({
  name: sliceNames.searchSlice,
  initialState,
  reducers: {
    setSearchedData: (state, action: PayloadAction<SearchState>) => {
      state.searchedData.restaurants = action.payload.searchedData.restaurants;
      state.searchedData.chefs = action.payload.searchedData.chefs;
      state.searchedData.dishes = action.payload.searchedData.dishes;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchedData.fulfilled, (state, action) => {
      state.searchedData.restaurants = action.payload.restaurants;
      state.searchedData.chefs = action.payload.chefs;
      state.searchedData.dishes = action.payload.dishes;
    });
  },
});

export const { setSearchedData, setSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;
