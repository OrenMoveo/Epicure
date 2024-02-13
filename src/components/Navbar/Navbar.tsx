import styles from "./Navbar.module.scss";
import hamburgerIcon from "../../assets/images/HamburgerIcon.svg";
import logoIcon from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/SearchIcon.svg";
import signInIcon from "../../assets/images/SignInIcon.svg";
import bagIcon from "../../assets/images/BagIcon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { UIConstants, appRoutes } from "../../shared/constants";
import { useState } from "react";
import MenuPopover from "../MenuPopover/MenuPopover";
import SearchPopover from "../SearchPopover/SearchPopover";
import useGetScreenWidth from "../../hooks/useGetWidthScreen";
import GenericPopover from "../GenericPopover/GenericPopover";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const screenWidth = useGetScreenWidth();

  const toggleMenu = () => {
    setIsMenuOpen((menuOpen) => !menuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen((searchOpen) => !searchOpen);
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
            <button className={styles.epicureTextTitle} onClick={handleHomePageNavigation}>
              EPICURE
            </button>
            <NavLink to={appRoutes.restaurants} className={({ isActive }) => (isActive ? styles.active : styles.inActive)}>
              Restaurants
            </NavLink>
            <NavLink to={appRoutes.chefs} className={({ isActive }) => (isActive ? styles.active : styles.inActive)}>
              Chefs
            </NavLink>
          </div>
        </div>
        <div className={styles.headerIconsContainer}>
          <div className={styles.searchContainer}>
            <button
              className={styles.searchBtn}
              onClick={() => {
                if (screenWidth > UIConstants.sizes.tabletWidth) {
                  return;
                }
                toggleSearch();
              }}
            >
              <img src={searchIcon} alt="search-icon" />
            </button>
          </div>
          <button className={styles.signInBtn}>
            <img src={signInIcon} alt="signIn-icon" />
          </button>
          <button className={styles.bagBtn}>
            <img src={bagIcon} alt="bag-icon" />
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <GenericPopover>
          <MenuPopover toggleMenu={toggleMenu} />
        </GenericPopover>
      ) : (
        ""
      )}
      {isSearchOpen ? (
        <GenericPopover>
          <SearchPopover toggleSearch={toggleSearch} />
        </GenericPopover>
      ) : (
        ""
      )}
    </section>
  );
};

export default Navbar;
