import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chef } from "../../types/types";
import { sliceNames } from "../../shared/constants";
import { fetchAllChefs, fetchChefOfTheWeek, fetchMostViewedChefs, fetchNewChefs } from "../thunks/chefThunk";

export interface ChefState {
  allChefs: Chef[];
  chefOfTheWeek: Chef;
  newChefs: Chef[];
  mostViewedChefs: Chef[];
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
  newChefs: [],
  mostViewedChefs: [],
};

const chefSlice = createSlice({
  name: sliceNames.chefSlice,
  initialState,
  reducers: {
    setAllChefs: (state, action: PayloadAction<Chef[]>) => {
      state.allChefs = action.payload;
    },
    setNewChefs: (state, action: PayloadAction<Chef[]>) => {
      state.newChefs = action.payload;
    },
    setMostViewedChefs: (state, action: PayloadAction<Chef[]>) => {
      state.mostViewedChefs = action.payload;
    },
    setChefOfTheWeek: (state, action: PayloadAction<Chef>) => {
      state.chefOfTheWeek = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllChefs.fulfilled, (state, action) => {
      state.allChefs = action.payload;
    });
    builder.addCase(fetchChefOfTheWeek.fulfilled, (state, action) => {
      state.chefOfTheWeek = action.payload;
    });
    builder.addCase(fetchNewChefs.fulfilled, (state, action) => {
      state.newChefs = action.payload;
    });
    builder.addCase(fetchMostViewedChefs.fulfilled, (state, action) => {
      state.mostViewedChefs = action.payload;
    });
  },
});

export const { setAllChefs, setChefOfTheWeek } = chefSlice.actions;

export default chefSlice.reducer;
