import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllChefs, getChefOfTheWeek, getNewChefs, getMostViewedChefs } from "../../apiService/chefApiService";
import { Chef } from "../../types/types";

export const fetchAllChefs = createAsyncThunk("chef/fetchAllChefs", async (page: string): Promise<Chef[]> => {
  return await getAllChefs(page);
});

export const fetchChefOfTheWeek = createAsyncThunk("chef/fetchChefOfTheWeek", async (): Promise<Chef> => {
  return await getChefOfTheWeek();
});

export const fetchNewChefs = createAsyncThunk("chef/fetchNewChefs", async (page: string): Promise<Chef[]> => {
  return await getNewChefs(page);
});

export const fetchMostViewedChefs = createAsyncThunk("chef/fetchMostViewedChefs", async (page: string): Promise<Chef[]> => {
  return await getMostViewedChefs(page);
});
