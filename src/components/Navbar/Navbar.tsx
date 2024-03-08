import styles from "./Navbar.module.scss";
import { useState } from "react";
import { Icons, Logos } from "../../assets/images";
import { NavLink, useNavigate } from "react-router-dom";
import { appRoutes } from "../../shared/constants";
import MenuPopover from "../MenuPopover/MenuPopover";
import SearchPopover from "../SearchPopover/SearchPopover";
import GenericPopover from "../GenericPopover/GenericPopover";
import ShoppingBag from "../ShoppingBag/ShoppingBag";
import DishCounterCircle from "../DishCounterCircle/DishCounterCircle";
import SignIn from "../SignIn/SignIn";
import useIsTablet from "../../hooks/useIsTablet";
import useIsMobile from "../../hooks/useIsMobile";
import GenericModal from "../GenericModal/GenericModal";
import NavbarSearchBarDesktop from "./NavbarSearchBarDesktop/NavbarSearchBarDesktop";
import { selectIsEmptyShoppingBag } from "../../reduxToolkit/slices/shoppingBagSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../reduxToolkit/store/store";
import { setIsLoggedInUser } from "../../reduxToolkit/slices/userSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const { isLoggedInUser } = useSelector((state: RootState) => state.user);

  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const isMobileOrTablet = isMobile || isTablet;

  const isEmptyShoppingBag = useSelector((state: RootState) => selectIsEmptyShoppingBag(state));

  const toggleMenu = () => {
    setIsMenuOpen((menuOpen) => !menuOpen);
  };

  const handleSignIn = () => {
    if (isLoggedInUser) {
      dispatch(setIsLoggedInUser(false));
      return;
    }
    setIsSignInOpen((isLoggedIn) => !isLoggedIn);
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
            <NavLink to={appRoutes.restaurants.base} className={({ isActive }) => (isActive ? styles.active : styles.inActive)}>
              Restaurants
            </NavLink>
            <NavLink to={appRoutes.chefs.base} className={({ isActive }) => (isActive ? styles.active : styles.inActive)}>
              Chefs
            </NavLink>
          </div>
        </div>
        <div className={styles.headerIconsContainer}>
          <div className={styles.searchContainer}>
            <div
              className={styles.searchBtn}
              onClick={() => {
                toggleSearch();
              }}
            >
              {!isMobileOrTablet && isSearchOpen && <NavbarSearchBarDesktop />}
              {!isSearchOpen && <img src={Icons.searchIcon} alt="signIn-icon" />}
            </div>
          </div>
          <button className={styles.signInBtn} onClick={() => handleSignIn()}>
            {isLoggedInUser ? <img src={Icons.blackSignInIcon} alt="signed-in-icon" /> : <img src={Icons.whiteSignInIcon} alt="sign-in-icon" />}
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
      {isSearchOpen && isMobileOrTablet ? (
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

      {isSignInOpen ? (
        isMobileOrTablet ? (
          <GenericPopover coverAllPage={true}>
            <SignIn toggleSignIn={handleSignIn} />
          </GenericPopover>
        ) : (
          <GenericModal handleClose={handleSignIn}>
            <SignIn toggleSignIn={handleSignIn} />
          </GenericModal>
        )
      ) : (
        ""
      )}
    </section>
  );
};

export default Navbar;
