import styles from "./Home.module.scss";
import Hero from "./Hero/Hero";
import AboutSection from "./AboutSection/AboutSection";
import { ChefOfTheWeekSection } from "../../components/ChefOfTheWeekSection/ChefOfTheWeekSection";
import Legend from "./Legend/Legend";
import PopularRestaurant from "./PopularRestaurants/PopularRestaurant";
import SignatureDishes from "./SignatureDishes/SignatureDishes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../reduxToolkit/store/store";
import { useEffect } from "react";
import { fetchHomePageData } from "../../reduxToolkit/thunks/homePageThunk";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { popularRestaurants, chefOfTheWeek, signatureDishes } = useSelector((state: RootState) => state.homePage);

  useEffect(() => {
    dispatch(fetchHomePageData());
  }, [dispatch, popularRestaurants, chefOfTheWeek, signatureDishes]);


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
