import styles from "./Navbar.module.scss";
import hamburgerIcon from "../../assets/images/HamburgerIcon.svg";
import logoIcon from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/SearchIcon.svg";
import signInIcon from "../../assets/images/SignInIcon.svg";
import bagIcon from "../../assets/images/BagIcon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { appRoutes } from "../../shared/constants";
import { useState } from "react";
import MenuPopover from "../MenuPopover/MenuPopover";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((menuOpen) => !menuOpen);
  };
  const navigate = useNavigate();
  const handleHomePageNavigation = () => {
    navigate("/");
  };

  return (
    <section className={styles.headerSectionLayout}>
      <div className={styles.HeaderContainer}>
        <div className={styles.navbarContainer}>
          <button className={styles.menuContainer} onClick={() => toggleMenu()}>
            <img src={hamburgerIcon} alt="hamburger-icon" />
          </button>
          <NavLink to={appRoutes.base} className={styles.logoContainer}>
            <img src={logoIcon} alt="logo" />
          </NavLink>
          <div className={styles.navbarButtonsContainer}>
            <button
              className={styles.epicureTextTitle}
              onClick={handleHomePageNavigation}
            >
              EPICURE
            </button>
            <NavLink
              to={appRoutes.restaurants}
              className={({ isActive }) =>
                isActive ? styles.active : styles.inActive
              }
            >
              Restaurants
            </NavLink>
            <NavLink
              to={appRoutes.chefs}
              className={({ isActive }) =>
                isActive ? styles.active : styles.inActive
              }
            >
              Chefs
            </NavLink>
          </div>
        </div>
        <div className={styles.headerIconsContainer}>
          <button className={styles.searchBtn}>
            <img src={searchIcon} alt="search-icon" />
          </button>
          <button className={styles.signInBtn}>
            <img src={signInIcon} alt="signIn-icon" />
          </button>
          <button className={styles.bagBtn}>
            <img src={bagIcon} alt="bag-icon" />
          </button>
        </div>
      </div>
      {isMenuOpen ? <MenuPopover toggleMenu={toggleMenu} /> : ""}
    </section>
  );
}

export default Navbar;
