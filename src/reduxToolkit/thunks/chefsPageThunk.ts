import { createAsyncThunk } from "@reduxjs/toolkit";
import { ChefsPageState } from "../slices/chefsPageSlice";
import { getAllChefs } from "../../apiService/chefApiService";

export const fetchChefsPageData = createAsyncThunk("chefsPage/fetchData", async (): Promise<ChefsPageState> => {
  const allChefs = await getAllChefs();

  return {
    allChefs,
  };
});
