import "./Navbar.scss";
import hamburgerIcon from "../../assets/images/HamburgerIcon.svg";
import logoIcon from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/SearchIcon.svg";
import signInIcon from "../../assets/images/SignInIcon.svg";
import bagIcon from "../../assets/images/BagIcon.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleHomePageNavigation = () => {
    navigate("/");
  };

  const handleRestaurantsPageNavigation = () => {
    navigate("/restaurants");
  };

  return (
    <section className="header-container">
      <div className="header-wrapper">
        <div className="navbar-container">
          <div className="menu-container">
            <img src={hamburgerIcon} alt="hamburger-icon" />
          </div>
          <button className="logo-container" onClick={handleHomePageNavigation}>
            <img src={logoIcon} alt="logo" />
          </button>
          <div className="navbar-buttons-container">
            <button
              className="epicure-text-title"
              onClick={handleHomePageNavigation}
            >
              EPICURE
            </button>
            <button
              className="restaurants-navbar-button"
              onClick={handleRestaurantsPageNavigation}
            >
              Restaurants
            </button>
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
