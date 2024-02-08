import styles from "./Navbar.module.scss";
import hamburgerIcon from "../../assets/images/HamburgerIcon.svg";
import logoIcon from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/SearchIcon.svg";
import signInIcon from "../../assets/images/SignInIcon.svg";
import bagIcon from "../../assets/images/BagIcon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { appRoutes } from "../../shared/constants";
import { FC } from "react";
import { useLocation } from "react-router-dom";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
import blackXIcon from "../../assets/images/blackXIcon.svg";

const Navbar: FC = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMobileOrTable = isMobile || isTablet;
  const ONE_PAGE_BACK = -1;
  const navigate = useNavigate();
  const handleHomePageNavigation = () => {
    navigate("/");
  };

  const location = useLocation();
  const currentPathName = location.pathname.toLowerCase();
  const pathNameArray = currentPathName.split("/");
  const isDish = pathNameArray.includes("dish");

  return (
    <section className={styles.headerSectionLayout}>
      <div className={styles.HeaderContainer}>
        <div className={styles.navbarContainer}>
          <button className={styles.menuContainer}>
            {(isMobile || isTablet) && isDish && (
              <img
                src={blackXIcon}
                alt="blackXIcon"
                onClick={() => navigate(ONE_PAGE_BACK)}
              />
            )}
            {!isDish && <img src={hamburgerIcon} alt="hamburger-icon" />}
          </button>
          <NavLink to="/" className={styles.logoContainer}>
            {(!isDish || !isMobileOrTable) && <img src={logoIcon} alt="logo" />}
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
        {(!isDish || !isMobileOrTable) && (
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
        )}
      </div>
    </section>
  );
};

export default Navbar;
