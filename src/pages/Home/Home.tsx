import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import RestaurantCarousell from "../../components/RestaurantCarousell/RestaurantCarousell";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RestaurantCarousell />
      <Footer />
    </>
  );
}

export default Home;
