import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import RestaurantCarousel from "../../components/RestaurantCarousel/RestaurantCarousel";
import Footer from "../../components/Footer/Footer";
import AboutSection from "../../components/AboutSection/AboutSection";
import { ChefOfTheWeekSection } from "../../components/ChefOfTheWeekSection/ChefOfTheWeekSection";
import Legend from "../../components/Legend/Legend";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RestaurantCarousel />
      <Legend />
      <ChefOfTheWeekSection />
      <AboutSection />
      <Footer />
    </>
  );
}

export default Home;
