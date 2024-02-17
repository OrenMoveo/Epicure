import { useState, useEffect } from "react";
import data from "../data/data.json";
import { Restaurant } from "../types/types";
import { defaultRestaurant } from "../shared/defaults";

const useFetchRestaurant = (keyId: string | undefined) => {
  const defaultRest: Restaurant = defaultRestaurant;
  const [restaurant, setRestaurant] = useState(defaultRest);
  console.log("Fetching restaurant for keyId:", keyId);

  useEffect(() => {
    if (keyId) {
      const restaurantData = data.data.restaurants.find((r) => r.keyId === keyId);
      console.log(restaurantData);

      if (restaurantData) {
        setRestaurant(restaurantData);
      } else {
        console.error(`Restaurant with keyId ${keyId} not found`);
      }
    }
  }, [keyId]);

  return restaurant;
};

export default useFetchRestaurant;
