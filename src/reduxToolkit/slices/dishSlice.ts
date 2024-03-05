import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dish } from "../../types/types";
import { sliceNames } from "../../shared/constants";
import { fetchDishData } from "../thunks/dishThunk";

export interface DishState {
  signatureDishes: Dish[];
}

const initialState: DishState = {
  signatureDishes: [],
};

const dishSlice = createSlice({
  name: sliceNames.dishSlice,
  initialState: initialState,
  reducers: {
    setSignatureDishes: (state, action: PayloadAction<Dish[]>) => {
      state.signatureDishes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDishData.fulfilled, (state, action) => {
      state.signatureDishes = action.payload.signatureDishes;
    });
  },
});

export const { setSignatureDishes } = dishSlice.actions;

export default dishSlice.reducer;
