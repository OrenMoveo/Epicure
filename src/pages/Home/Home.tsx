import styles from "./Home.module.scss";
import Hero from "../../components/Hero/Hero";
import AboutSection from "../../components/AboutSection/AboutSection";
import { ChefOfTheWeekSection } from "../../components/ChefOfTheWeekSection/ChefOfTheWeekSection";
import Legend from "../../components/Legend/Legend";
import PopularRestaurant from "../../components/PopularRestaurants/PopularRestaurant";

import SignatureDishes from "../../components/SignatureDishes/SignatureDishes";

function Home() {
  return (
    <div className={styles.homepageLayout}>
      <div className={styles.bodyContainer}>
        <Hero />
        <PopularRestaurant />
        <SignatureDishes />
        <Legend />
        <ChefOfTheWeekSection />
        <AboutSection />
      </div>
    </div>
  );
}

export default Home;
