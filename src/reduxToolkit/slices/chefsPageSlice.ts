import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chef } from "../../types/types";
import { sliceNames } from "../../shared/constants";
import { fetchChefsPageData } from "../thunks/chefsPageThunk";

export interface ChefsPageState {
  allChefs: Chef[];
}

const initialState: ChefsPageState = {
  allChefs: [],
};

const chefsPageSlice = createSlice({
  name: sliceNames.chefsPageSlice,
  initialState,
  reducers: {
    setAllChefs: (state, action: PayloadAction<Chef[]>) => {
      state.allChefs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChefsPageData.fulfilled, (state, action) => {
      state.allChefs = action.payload.allChefs;
    });
  },
});

export const { setAllChefs } = chefsPageSlice.actions;

export default chefsPageSlice.reducer;
