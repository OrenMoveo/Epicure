import styles from "./Home.module.scss";
import Hero from "./Hero/Hero";
import AboutSection from "./AboutSection/AboutSection";
import { ChefOfTheWeekSection } from "../../components/ChefOfTheWeekSection/ChefOfTheWeekSection";
import Legend from "./Legend/Legend";
import PopularRestaurant from "./PopularRestaurants/PopularRestaurant";
import SignatureDishes from "./SignatureDishes/SignatureDishes";
import { useEffect } from "react";
import axios from "axios";

function Home() {
  useEffect(() => {
    const sendFirstMsg = async () => {
      try {
        const response = await axios.get("http://localhost:3000/");
        console.log("Response from the server:", response.data);
      } catch (error) {
        console.error("Error fetching data from the server:", error.message);
      }
    };

    sendFirstMsg();
  }, []);

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
