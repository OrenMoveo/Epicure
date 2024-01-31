import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";

import Footer from "../../components/Footer/Footer";
import AboutSection from "../../components/AboutSection/AboutSection";
import { ChefOfTheWeekSection } from "../../components/ChefOfTheWeekSection/ChefOfTheWeekSection";
import Legend from "../../components/Legend/Legend";
import PopularRestaurant from "../../components/PopularRestaurants/PopularRestaurant";

import SignatureDishes from "../../components/SignatureDishes/SignatureDishes";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularRestaurant />
      <SignatureDishes />
      <Legend />
      <ChefOfTheWeekSection />
      <AboutSection />
      <Footer />
    </>
  );
}

export default Home;
