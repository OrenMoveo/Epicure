import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import RestaurantCarousel from "../../components/RestaurantCarousel/RestaurantCarousel";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RestaurantCarousel />
      <Footer />
    </>
  );
}

export default Home;
