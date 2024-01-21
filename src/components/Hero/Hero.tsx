import React from "react";
import "./Hero.scss";
function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-search-text-container">
        <div className="hero-text">
          Epicure works with the top chef restaurants in Tel Aviv
        </div>
        <div className="hero-search">
          <button className="search-button">
            <img src="/src/assets/images/SearchIcon.svg" alt="search-icon" />
          </button>
          <input
            className="search-input"
            placeholder="Search for restaurant cuisine, chef"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Hero;
