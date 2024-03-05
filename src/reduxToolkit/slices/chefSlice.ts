import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chef } from "../../types/types";
import { sliceNames } from "../../shared/constants";
import { fetchChefData } from "../thunks/chefThunk";

export interface ChefState {
  allChefs: Chef[];
  chefOfTheWeek: Chef;
}

const initialState: ChefState = {
  allChefs: [],
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

const chefSlice = createSlice({
  name: sliceNames.chefSlice,
  initialState,
  reducers: {
    setAllChefs: (state, action: PayloadAction<Chef[]>) => {
      state.allChefs = action.payload;
    },
    setChefOfTheWeek: (state, action: PayloadAction<Chef>) => {
      state.chefOfTheWeek = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChefData.fulfilled, (state, action) => {
      state.allChefs = action.payload.allChefs;
      state.chefOfTheWeek = action.payload.chefOfTheWeek;
    });
  },
});

export const { setAllChefs, setChefOfTheWeek } = chefSlice.actions;

export default chefSlice.reducer;
