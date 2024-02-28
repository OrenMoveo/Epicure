import axios, { AxiosError } from "axios";
import { appRoutes } from "../shared/constants";

const baseURL = "http://localhost:3000";

export const fetchRestaurants = async () => {
  try {
    const response = await axios.get(`${baseURL}${appRoutes.restaurants}`);
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

export const fetchSingleRestaurant = async (restaurantId: string) => {
  try {
    const response = await axios.get(`${baseURL}${appRoutes.restaurants}/${restaurantId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching single restaurant:", error);
    throw error;
  }
};
