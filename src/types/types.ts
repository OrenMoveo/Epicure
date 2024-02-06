export interface Restaurant {
  name: string;
  chef: string;
  pictureUrl: string;
  openNow: boolean;
  location: string; // not sure
  rating: number;
  priceRange: number[];
  mostPopular: boolean;
  keyId: string;
  new: boolean;
  restaurantDishes: Dish[];
}

export interface Chef {
  name: string;
  pictureUrl: string;
  restaurants: Restaurant[];
  new: boolean;
  views: number;
  mostViewed: boolean;
  description: string;
  keyId: string;
}

export interface Dish {
  name: string;
  pictureUrl: string;
  description: string;
  price: number;
  signatureDish: boolean;
  foodIcon: string;
  keyId: string;
  mealType: "breakfast" | "lunch" | "dinner";
}
