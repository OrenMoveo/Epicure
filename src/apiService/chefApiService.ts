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

export const getAllChefs = async () => {
  try {
    const response = await axios.get(`${appRoutes.serverUrl}${appRoutes.chefs.base}`);
    return response.data;
  } catch (error) {
    console.error("Error trying to get all chefs data", error.message);
    throw error;
  }
};

export const getNewChefs = async () => {
  try {
    const response = await axios.get(`${appRoutes.serverUrl}${appRoutes.chefs.base}/${appRoutes.chefs.newChefs}`);
    return response.data;
  } catch (error) {
    console.error("Error trying to get all chefs data", error.message);
    throw error;
  }
};

export const getMostViewedChefs = async () => {
  try {
    const response = await axios.get(`${appRoutes.serverUrl}${appRoutes.chefs.base}/${appRoutes.chefs.mostViewedChefs}`);
    return response.data;
  } catch (error) {
    console.error("Error trying to get all chefs data", error.message);
    throw error;
  }
};
