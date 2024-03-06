import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllChefs, getChefOfTheWeek, getNewChefs, getMostViewedChefs } from "../../apiService/chefApiService";
import { Chef } from "../../types/types";

export const fetchAllChefs = createAsyncThunk("chef/fetchAllChefs", async (): Promise<Chef[]> => {
  return await getAllChefs();
});

export const fetchChefOfTheWeek = createAsyncThunk("chef/fetchChefOfTheWeek", async (): Promise<Chef> => {
  return await getChefOfTheWeek();
});

export const fetchNewChefs = createAsyncThunk("chef/fetchNewChefs", async (): Promise<Chef[]> => {
  return await getNewChefs();
});

export const fetchMostViewedChefs = createAsyncThunk("chef/fetchMostViewedChefs", async (): Promise<Chef[]> => {
  return await getMostViewedChefs();
});
