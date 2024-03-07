import axios from "axios";
import { appRoutes } from "../shared/constants";

export const getChefOfTheWeek = async () => {
  try {
    const response = await axios.get(`${appRoutes.serverUrl}${appRoutes.chefs.base}${appRoutes.chefs.chefOfTheWeekData}`);
    return response.data;
  } catch (error) {
    console.error("Error trying to get chef of the week data", error.message);
    throw error;
  }
};

export const getAllChefs = async (page: string) => {
  try {
    const response = await axios.get(`${appRoutes.serverUrl}${appRoutes.chefs.base}/${page}`);
    return response.data;
  } catch (error) {
    console.error("Error trying to get all chefs data", error.message);
    throw error;
  }
};

export const getNewChefs = async (page: string) => {
  try {
    const response = await axios.get(`${appRoutes.serverUrl}${appRoutes.chefs.base}/${appRoutes.chefs.newChefs}/${page}`);
    return response.data;
  } catch (error) {
    console.error("Error trying to get all chefs data", error.message);
    throw error;
  }
};

export const getMostViewedChefs = async (page: string) => {
  try {
    const response = await axios.get(`${appRoutes.serverUrl}${appRoutes.chefs.base}/${appRoutes.chefs.mostViewedChefs}/${page}`);
    return response.data;
  } catch (error) {
    console.error("Error trying to get all chefs data", error.message);
    throw error;
  }
};
