import { createAsyncThunk } from "@reduxjs/toolkit";
import { DishState } from "../slices/dishSlice";
import { getSignatureDishes } from "../../apiService/dishApiService";

export const fetchDishData = createAsyncThunk("dish/fetchData", async (): Promise<DishState> => {
  const signatureDishes = await getSignatureDishes();

  return {
    signatureDishes,
  };
});
