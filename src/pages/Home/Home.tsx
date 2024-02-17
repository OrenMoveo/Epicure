import styles from "./Home.module.scss";
import Hero from "./Hero/Hero";
import AboutSection from "./AboutSection/AboutSection";
import { ChefOfTheWeekSection } from "../../components/ChefOfTheWeekSection/ChefOfTheWeekSection";
import Legend from "./Legend/Legend";
import PopularRestaurant from "./PopularRestaurants/PopularRestaurant";
import SignatureDishes from "./SignatureDishes/SignatureDishes";
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
