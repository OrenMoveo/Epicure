import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import AboutSection from "../../components/AboutSection/AboutSection";
import { ChefOfTheWeekSection } from "../../components/ChefOfTheWeekSection/ChefOfTheWeekSection";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ChefOfTheWeekSection />
      <AboutSection />
      <Footer />
    </>
  );
}

export default Home;
