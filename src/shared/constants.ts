import styles from "../styles/constants.module.scss";

export const appRoutes = {
  base: "/",
  restaurants: {
    base: "/restaurants",
    popularRestaurantsData: "/popular-restaurants-data",
    getRestaurantRoute: (keyId: string | undefined) => `/restaurants/restaurant/${keyId}`,
    newRestaurants: "new",
    openNowRestaurants: "open-now",
    mostPopularRestaurants: "most-popular",
    allRestaurants: "",
  },
  chefs: {
    base: "/chefs",
    chefOfTheWeekData: "/chef-of-the-week-data",
    newChefs: "new",
    mostViewedChefs: "most-viewed",
    allChefs: "",
  },
  dishes: {
    base: "/dishes",
    signatureDishesData: "/signature-dishes-data",
  },
  serverUrl: "http://localhost:3000",
  user: {
    base: "/user",
    signUp: "/user/sign-up",
    login: "/user/login",
  },
};

export const sliceNames = {
  restaurantSlice: "restaurant",
  chefSlice: "chef",
  dishSlice: "dish",
  shoppingBagSlice: "shoppingBag",
};

export const UIConstants = {
  sizes: {
    mobileWidth: Number(styles.mobileMaxWidth.slice(0, -2)),
    tabletWidth: Number(styles.tabletMaxWidth.slice(0, -2)),
    smallDesktopWidth: Number(styles.smallDesktopMaxWidth.slice(0, -2)),
    appMaxWidth: Number(styles.appMaxWidth.slice(0, -2)),
  },
  fonts: {
    primary: {
      family: styles.appPrimaryFontFamily,
      weight: styles.appPrimaryFontWeight,
      textAlign: styles.appPrimaryTextAlign,
    },
  },
  layoutWidths: {
    appPrimaryWidth: styles.appPrimaryWidth,
    mobileViewWidth: styles.mobileViewWidth,
  },
};
