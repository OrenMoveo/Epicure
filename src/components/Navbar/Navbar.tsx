import React from "react";
import "./Navbar.scss";
import hamburgerIcon from "../../assets/images/HamburgerIcon.svg";
import logoIcon from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/SearchIcon.svg";
import signInIcon from "../../assets/images/SignInIcon.svg";
import bagIcon from "../../assets/images/BagIcon.svg";
function Navbar() {
  return (
    <section className="header-container">
      <div className="header-wrapper">
        <div className="navbar-container">
          <div className="menu-container">
            <img src={hamburgerIcon} alt="hambur" />
          </div>
          <div className="logo-container">
            <img src={logoIcon} alt="logo" />
          </div>
          <div className="navbar-buttons-container">
            <div className="epicure-text-title">EPICURE</div>
            <div className="restaurants-navbar-button">Restaurants</div>
            <div className="chefs-navbar-button">Chefs</div>
          </div>
        </div>
        <div className="icons-container">
          <div className="search-button">
            <img src={searchIcon} alt="search-icon" />
          </div>
          <div className="signIn-button">
            <img src={signInIcon} alt="signIn-icon" />
          </div>
          <div className="bag-button">
            <img src={bagIcon} alt="bag-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
