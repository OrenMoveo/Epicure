import React from "react";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="menu-container">
        <img src="src/assets/images/HamburgIcon.svg" alt="hambur" />
      </div>
      <div className="logo-container">
        <img src="src/assets/images/logo.svg" alt="logo" />
      </div>
      <div className="search-signin-bag-container">
        <div className="search-button">
          <img src="src/assets/images/SearchIcon.svg" alt="search-icon" />
        </div>
        <div className="signin-button">
          <img src="src/assets/images/SignInIcon.svg" alt="signin-icon" />
        </div>
        <div className="bag-button">
          <img src="src/assets/images/BagIcon.svg" alt="bag-icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
