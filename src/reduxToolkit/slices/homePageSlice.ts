import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chef, Dish, Restaurant } from "../../types/types";
import { sliceNames } from "../../shared/constants";
import { fetchHomePageData } from "../thunks/homePageThunk";

export interface HomePageState {
  popularRestaurants: Restaurant[];
  signatureDishes: Dish[];
  chefOfTheWeek: Chef;
}

const initialState: HomePageState = {
  popularRestaurants: [],
  signatureDishes: [],
  chefOfTheWeek: {
    _id: "",
    name: "",
    pictureUrl: "",
    restaurants: [],
    newChef: false,
    views: 0,
    mostViewed: false,
    chefOfTheWeek: false,
    description: "",
  },
};

const homePageSlice = createSlice({
  name: sliceNames.homePageSlice,
  initialState: initialState,
  reducers: {
    setPopularRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.popularRestaurants = action.payload;
    },

    setSignatureDishes: (state, action: PayloadAction<Dish[]>) => {
      state.signatureDishes = action.payload;
    },

    setChefOfTheWeek: (state, action: PayloadAction<Chef>) => {
      state.chefOfTheWeek = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomePageData.fulfilled, (state, action) => {
      state.popularRestaurants = action.payload.popularRestaurants;
      state.signatureDishes = action.payload.signatureDishes;
      state.chefOfTheWeek = action.payload.chefOfTheWeek;
    });
  },
});

export const { setPopularRestaurants, setSignatureDishes, setChefOfTheWeek } = homePageSlice.actions;

export default homePageSlice.reducer;
