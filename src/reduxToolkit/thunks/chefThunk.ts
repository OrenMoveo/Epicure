import { createAsyncThunk } from "@reduxjs/toolkit";
import { ChefState } from "../slices/chefSlice";
import { getAllChefs, getChefOfTheWeek } from "../../apiService/chefApiService";

export const fetchChefData = createAsyncThunk("chef/fetchData", async (): Promise<ChefState> => {
  const allChefs = await getAllChefs();
  const chefOfTheWeek = await getChefOfTheWeek();

  return {
    allChefs,
    chefOfTheWeek,
  };
});
