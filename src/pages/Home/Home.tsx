import styles from "./Home.module.scss";
import Hero from "./Hero/Hero";
import AboutSection from "./AboutSection/AboutSection";
import { ChefOfTheWeekSection } from "../../components/ChefOfTheWeekSection/ChefOfTheWeekSection";
import Legend from "./Legend/Legend";
import PopularRestaurant from "./PopularRestaurants/PopularRestaurant";
import SignatureDishes from "./SignatureDishes/SignatureDishes";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../reduxToolkit/store/store";
import { useEffect } from "react";
import { fetchPopularRestaurants } from "../../reduxToolkit/thunks/restaurantThunk";
import { fetchDishData } from "../../reduxToolkit/thunks/dishThunk";
import { fetchChefOfTheWeek } from "../../reduxToolkit/thunks/chefThunk";
import { setPopularRestaurants } from "../../reduxToolkit/slices/restaurantSlice";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const firstPage = "1";
  useEffect(() => {
    dispatch(setPopularRestaurants([]));
  }, []);

  useEffect(() => {
    dispatch(fetchPopularRestaurants(firstPage));
    dispatch(fetchDishData());
    dispatch(fetchChefOfTheWeek());
  }, [dispatch]);

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
};

export default Home;
