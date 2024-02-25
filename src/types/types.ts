export interface Restaurant {
  name: string;
  chef: string;
  pictureUrl: string;
  openNow: boolean;
  location: string; // not sure
  rating: number;
  mostPopular: boolean;
  newRestaurant: boolean;
  restaurantDishes: Dish[];
  priceRange: number[];
  keyId: string;
}

export interface Chef {
  name: string;
  pictureUrl: string;
  restaurants: Restaurant[];
  newChef: boolean;
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
  mealType: string;
  restaurant: string;
}

export interface Order {
  restaurantName: string;
  dishes: DishWithOptions[];
}

export interface DishWithOptions {
  dish: Dish;
  quantity: number;
  options: string[];
  keyId: string;
}
