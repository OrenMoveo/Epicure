import styles from "../styles/constants.module.scss";

export const appRoutes = {
  base: "/",
  restaurants: "/restaurants",
  chefs: "/chefs",
  dishes: "/dishes",
  getRestaurantRoute: (keyId: string | undefined) => `/restaurants/${keyId}`,
  popularRestaurantsData: "/popular-restaurants-data",
  signatureDishesData: "/signature-dishes-data",
  chefOfTheWeekData: "/chef-of-the-week-data",
  serverUrl: "http://localhost:3000",
};

export const sliceNames = {
  homePageSlice: "homePage",
  restaurantsPageSlice: "restaurantsPage",
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
