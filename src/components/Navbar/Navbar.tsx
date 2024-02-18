import styles from "./Navbar.module.scss";
import { useState } from "react";
import { Icons, Logos } from "../../assets/images";
import { NavLink, useNavigate } from "react-router-dom";
import { UIConstants, appRoutes } from "../../shared/constants";
import MenuPopover from "../MenuPopover/MenuPopover";
import SearchPopover from "../SearchPopover/SearchPopover";
import useGetScreenWidth from "../../hooks/useGetWidthScreen";
import GenericPopover from "../GenericPopover/GenericPopover";
import ShoppingBag from "../ShoppingBag/ShoppingBag";
import { useShoppingBagContext } from "../../context/ShoppingBagContext";
import DishCounterCircle from "../DishCounterCircle/DishCounterCircle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);

  const { isEmptyShoppingBag } = useShoppingBagContext();

  const screenWidth = useGetScreenWidth();

  const toggleMenu = () => {
    setIsMenuOpen((menuOpen) => !menuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen((searchOpen) => !searchOpen);
  };

  const toggleShoppingBag = () => {
    setIsBagOpen((bagOpen) => !bagOpen);
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
            <img src={Icons.hamburgerIcon} alt="hamburger-icon" />
          </button>
          <NavLink to={appRoutes.base} className={styles.logoContainer}>
            <img src={Logos.logo} alt="logo" />
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
              <img src={Icons.searchIcon} alt="search-icon" />
            </button>
          </div>
          <button className={styles.signInBtn}>
            <img src={Icons.signInIcon} alt="signIn-icon" />
          </button>
          <button className={styles.bagBtn} onClick={() => toggleShoppingBag()}>
            <img src={Icons.smallShoppingBagIcon} alt="bag-icon" />
            {!isEmptyShoppingBag && <DishCounterCircle />}
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <GenericPopover coverAllPage={true}>
          <MenuPopover toggleMenu={toggleMenu} />
        </GenericPopover>
      ) : (
        ""
      )}
      {isSearchOpen ? (
        <GenericPopover coverAllPage={true}>
          <SearchPopover toggleSearch={toggleSearch} />
        </GenericPopover>
      ) : (
        ""
      )}
      {isBagOpen ? (
        <GenericPopover>
          <ShoppingBag />
        </GenericPopover>
      ) : (
        ""
      )}
    </section>
  );
};

export default Navbar;
