import React from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import "./ChefOfTheWeekSection.scss";

export const ChefOfTheWeekSection = () => {
  return (
    <section className="chef-of-the-week-section">
      <div className="chef-of-the-week-content-container">
        <div className="chef-of-the-week-title-container">
          <SectionTitle title={"CHEF OF THE WEEK:"} />
        </div>
        <div className="chef-of-the-week-description-container">
          <div className="chef-of-the-week-image-container">
            <img
              src="/src/assets/images/Chefs/yossiShitrit.png"
              alt="yossiShitrit"
            />
            <div className="overlay-text-container">Yossi Shitrit</div>
          </div>
          <p className="chef-of-the-week-about-paragraph">
            Chef Yossi Shitrit has been living and breathing his culinary dreams
            for more than two decades, including running the kitchen in his
            first restaurant, the fondly-remembered Violet, located in Moshav
            Udim. Shitrit's creativity and culinary acumen born of long
            experience are expressed in the every detail of each and every dish.
          </p>
        </div>
        <div className="chef-of-the-week-restaurants-container">
          <div className="chef-of-the-week-restaurants-title">
            <SectionTitle title={"YOSSI'S RESTAURANTS"} />
          </div>
          <div className="restaurant-carousel-container">
            Carousel
            {/* <RestaurantsCards /> */}
          </div>
          <div className="go-forward-all-restaurants-button-container">
            All Restaurants
            {/* <goForwardButton /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
