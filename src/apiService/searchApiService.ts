import axios from "axios";
import { appRoutes } from "../shared/constants";

export const searchedData = async (searchTerm: string) => {
  try {
    const response = await axios.get(`${appRoutes.serverUrl}${appRoutes.search.byTerm}${searchTerm}`);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
