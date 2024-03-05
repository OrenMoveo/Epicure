import axios from "axios";
import { appRoutes } from "../shared/constants";

export const getSignatureDishes = async () => {
  try {
    const response = await axios.get(`${appRoutes.serverUrl}${appRoutes.dishes.base}${appRoutes.dishes.signatureDishesData}`);
    return response.data;
  } catch (error) {
    console.error("Error trying to get signature dishes data", error.message);
    throw error;
  }
};
