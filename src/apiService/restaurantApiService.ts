import axios, { AxiosError } from "axios";
import { appRoutes } from "../shared/constants";

export const getAllRestaurants = async () => {
  try {
    const response = await axios.get(`${appRoutes.serverUrl}${appRoutes.restaurants}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error("Error fetching data:", axiosError.message);
      throw axiosError;
    } else {
      console.error("Unknown error:", error);
      throw error;
    }
  }
};

export const getRestaurantById = async (restaurantId: string) => {
  try {
    const response = await axios.get(`${appRoutes.serverUrl}${appRoutes.restaurants}/${restaurantId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching single restaurant:", error);
    throw error;
  }
};

export const getPopularRestaurant = async () => {
  try {
    const response = await axios.get(`${appRoutes.serverUrl}${appRoutes.restaurants}${appRoutes.popularRestaurantsData}`);
    return response.data;
  } catch (error) {
    console.error("Error trying to get popular restaurants data", error.message);
    throw error;
  }
};
