import styles from "./Navbar.module.scss";
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
    <section className={styles.headerSectionLayout}>
      <div className={styles.HeaderContainer}>
        <div className={styles.navbarContainer}>
          <div className={styles.menuContainer}>
            <img src={hamburgerIcon} alt="hamburger-icon" />
          </div>
          <NavLink to="/" className={styles.logoContainer}>
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
              to="/restaurants"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inActive
              }
            >
              Restaurants
            </NavLink>
            <NavLink
              to="/chefs"
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
    </section>
  );
}

export default Navbar;
