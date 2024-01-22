import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <section className="header-container">
      <div className="header-wrapper">
        <div className="navbar-container">
          <div className="menu-container">
            <img src="src/assets/images/HamburgIcon.svg" alt="hambur" />
          </div>
          <div className="logo-container">
            <img src="src/assets/images/logo.svg" alt="logo" />
          </div>
          <div className="navbar-buttons-container">
            <div className="epicure-text-title">EPICURE</div>
            <div className="restaurants-navbar-button">Restaurants</div>
            <div className="chefs-navbar-button">Chefs</div>
          </div>
        </div>
        <div className="icons-container">
          <div className="search-button">
            <img src="src/assets/images/SearchIcon.svg" alt="search-icon" />
          </div>
          <div className="signIn-button">
            <img src="src/assets/images/SignInIcon.svg" alt="signIn-icon" />
          </div>
          <div className="bag-button">
            <img src="src/assets/images/BagIcon.svg" alt="bag-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
