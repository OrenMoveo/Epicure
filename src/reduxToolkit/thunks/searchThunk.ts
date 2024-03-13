import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchState } from "../slices/searchSlice";
import { searchedData } from "../../apiService/searchApiService";

export const fetchSearchedData = createAsyncThunk("search/byTerm", async (searchTerm: string): Promise<SearchState> => {
  return await searchedData(searchTerm);
});
