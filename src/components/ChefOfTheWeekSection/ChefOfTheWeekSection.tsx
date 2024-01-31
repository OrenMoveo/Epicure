import { SectionTitle } from "../SectionTitle/SectionTitle";
import yossiShitritChef from "../../assets/images/Chefs/yossiShitrit.png";
import styles from "./ChefOfTheWeekSection.module.scss";
import ChefsRestaurantCard from "../ChefsRestaurantCard/ChefsRestaurantCard";
import { Chef } from "../../types/types";
import data from "../../data/data.json";
export const ChefOfTheWeekSection = () => {
  const chefs: Chef[] = data.data.chefs;
  const chefOfTheWeek: Chef | undefined = chefs.find(
    (chef) => chef.name === "Yossi Shitrit"
  );
  return (
    <section className={styles["chef-of-the-week-section"]}>
      <div className={styles["chef-of-the-week-content-container"]}>
        <div className={styles["chef-of-the-week-title-container"]}>
          <SectionTitle title={"CHEF OF THE WEEK:"} />
        </div>
        <div className={styles["chef-of-the-week-description-container"]}>
          <div className={styles["chef-of-the-week-image-container"]}>
            <img src={yossiShitritChef} alt="yossiShitrit" />
            <div className={styles["overlay-text-container"]}>
              Yossi Shitrit
            </div>
          </div>
          <p className={styles["chef-of-the-week-about-paragraph"]}>
            Chef Yossi Shitrit has been living and breathing his culinary dreams
            for more than two decades, including running the kitchen in his
            first restaurant, the fondly-remembered Violet, located in Moshav
            Udim. Shitrit's creativity and culinary acumen born of long
            experience are expressed in the every detail of each and every dish.
          </p>
        </div>
        <div className={styles["chef-of-the-week-restaurants-container"]}>
          <div className={styles["chef-of-the-week-restaurants-title"]}>
            <SectionTitle title={"YOSSI'S RESTAURANTS"} />
          </div>
          <div className={styles["restaurant-carousel-container"]}>
            <ChefsRestaurantCard restaurant={chefOfTheWeek?.restaurants[0]} />

            <div
              className={styles["go-forward-all-restaurants-button-container"]}
            >
              All Restaurants
            </div>
            {/* <goForwardButton /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
