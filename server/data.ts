interface Restaurant {
  name: string;
  pictureUrl: string;
  openNow: boolean;
  chef: string | Chef;
  dishes: Dish[];
  signatureDishes: Dish[];
  location: string;
  rating: number;
  priceRange: number[];
}

interface Chef {
  name: string;
  pictureUrl: string;
  restaurants: Restaurant[];
  new: boolean;
  //choose one of views or mostViewed
  views: number;
  mostViewed: boolean;
  description: string;
}

interface Dish {
  name: string;
  pictureUrl: string;
  ingredients: string;
  price: number;
  signatureDish: boolean;

  //not sure but optional
  changes: string[];
  chooseASide: string[];
  qauntity: number;
}

interface Bag {
  restaurantInfo: Restaurant;
  dishes: Dish[];
  totalPayment: number;
}

interface AboutSection {
  aboutUsDescription: string;
  logo: string;
}

interface Menu {
  menuItems: string[];
  //onSelect: Function to 'All Restaurants' or 'Chefs';
}

interface Card {
  cardType: Restaurant | Dish;
  imageUrl: string;
  title: string;
  content: string;
  isHorizontal: boolean;
}

interface DishCard {
  imgUrl: string;
  dishName: string;
  dishContent: string;
  isHorizontal: boolean;
}

interface RestaurantCard {
  imgUrl: string;
  dishName: string;
  dishContent: string;
}

interface ChefOfTheWeek {
  chef: Chef;
}

interface RestaurantPage {
  restaurant: Restaurant;
}

interface DishPage {
  dish: Dish;
}
