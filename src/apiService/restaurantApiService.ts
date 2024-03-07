import axios, { AxiosError } from "axios";
import { appRoutes } from "../shared/constants";

export const getAllRestaurants = async (page: string) => {
  try {
    const response = await axios.get(`${appRoutes.serverUrl}${appRoutes.restaurants.base}/${page}`);
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
    const response = await axios.get(`${appRoutes.serverUrl}${appRoutes.restaurants.base}/${restaurantId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching single restaurant:", error);
    throw error;
  }
};

export const getPopularRestaurants = async (page: string) => {
  try {
    const response = await axios.get(`${appRoutes.serverUrl}${appRoutes.restaurants.base}${appRoutes.restaurants.popularRestaurantsData}/${page}`);
    return response.data;
  } catch (error) {
    console.error("Error trying to get popular restaurants data", error.message);
    throw error;
  }
};

export const getOpenNowRestaurants = async (page: string) => {
  try {
    const response = await axios.get(`${appRoutes.serverUrl}${appRoutes.restaurants.base}/${appRoutes.restaurants.openNowRestaurants}/${page}`);
    return response.data;
  } catch (error) {
    console.error("Error trying to get open now restaurants data", error.message);
    throw error;
  }
};

export const getNewRestaurants = async (page: string) => {
  try {
    const response = await axios.get(`${appRoutes.serverUrl}${appRoutes.restaurants.base}/${appRoutes.restaurants.newRestaurants}/${page}`);
    return response.data;
  } catch (error) {
    console.error("Error trying to get  new restaurants data", error.message);
    throw error;
  }
};
