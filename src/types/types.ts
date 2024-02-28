export interface Restaurant {
  _id?: string;
  name: string;
  chef: Chef;
  pictureUrl: string;
  openNow: boolean;
  rating: number;
  mostPopular: boolean;
  newRestaurant: boolean;
  restaurantDishes: Dish[];
  priceRange: number[];
}

export interface Chef {
  _id?: string;
  name: string;
  pictureUrl: string;
  restaurants: Restaurant[];
  newChef: boolean;
  views: number;
  mostViewed: boolean;
  chefOfTheWeek: boolean;
  description: string;
}

export interface Dish {
  _id?: string;
  name: string;
  pictureUrl: string;
  description: string;
  price: number;
  signatureDish: boolean;
  foodIcon: string;
  mealType: string;
  restaurant: Restaurant;
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
