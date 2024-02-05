import "./Navbar.scss";
import hamburgerIcon from "../../assets/images/HamburgerIcon.svg";
import logoIcon from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/SearchIcon.svg";
import signInIcon from "../../assets/images/SignInIcon.svg";
import bagIcon from "../../assets/images/BagIcon.svg";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleHomePageNavigation = () => {
    navigate("/");
  };

  return (
    <section className="header-container">
      <div className="header-wrapper">
        <div className="navbar-container">
          <div className="menu-container">
            <img src={hamburgerIcon} alt="hamburger-icon" />
          </div>
          <NavLink to="/" className="logo-container">
            <img src={logoIcon} alt="logo" />
          </NavLink>
          <div className="navbar-buttons-container">
            <button
              className="epicure-text-title"
              onClick={handleHomePageNavigation}
            >
              EPICURE
            </button>
            <NavLink to="/restaurants" className="restaurants-navbar-button">
              Restaurants
            </NavLink>
            <NavLink to="/chefs" className="chefs-navbar-button">
              Chefs
            </NavLink>
          </div>
        </div>
        <div className="icons-container">
          <button className="search-button">
            <img src={searchIcon} alt="search-icon" />
          </button>
          <button className="signIn-button">
            <img src={signInIcon} alt="signIn-icon" />
          </button>
          <button className="bag-button">
            <img src={bagIcon} alt="bag-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
