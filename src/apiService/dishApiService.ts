import axios from "axios";
import { appRoutes } from "../shared/constants";

export const fetchSignatureDishes = async () => {
  try {
    const response = await axios.get(`${appRoutes.serverUrl}${appRoutes.dishes}${appRoutes.signatureDishesData}`);
    return response.data;
  } catch (error) {
    console.error("Error trying to get signature dishes data", error.message);
    throw error;
  }
};