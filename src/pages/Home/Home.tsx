import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import RestaurantCarousell from "../../components/RestaurantCarousell/RestaurantCarousell";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RestaurantCarousell />
    </>
  );
}

export default Home;
