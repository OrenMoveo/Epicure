import moment from "moment";
import { Restaurant } from "../types/types";

export const generateUniqueKey = (obj: any) => {
  return JSON.stringify(obj);
};

export const isRestaurantOpenNow = (restaurant: Restaurant): boolean => {
  const now = new Date();
  if (!restaurant) {
    return false;
  }

  const openTime = moment(restaurant.openingHours.openTime, "HH:mm").toDate();
  const closeTime = moment(restaurant.openingHours.closeTime, "HH:mm").toDate();

  return now >= openTime && now <= closeTime;
};
