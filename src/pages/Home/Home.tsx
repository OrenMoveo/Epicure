import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import AboutSection from "../../components/AboutSection/AboutSection";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <Footer />
    </>
  );
}

export default Home;
