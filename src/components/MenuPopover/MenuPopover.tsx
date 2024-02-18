import { NavLink } from "react-router-dom";
import styles from "./MenuPopover.module.scss";
import { UIConstants, appRoutes } from "../../shared/constants";
import Footer from "../Footer/Footer";
import { Icons } from "../../assets/images";
import { FC, useEffect } from "react";
import useGetScreenWidth from "../../hooks/useGetWidthScreen";

interface MenuPopoverProps {
  toggleMenu: () => void;
}

const MenuPopover: FC<MenuPopoverProps> = (props) => {
  const screenWidth = useGetScreenWidth();
  useEffect(() => {
    const handleScreenSizeChange = () => {
      if (screenWidth > UIConstants.sizes.tabletWidth) {
        props.toggleMenu();
      }
    };
    handleScreenSizeChange();
  }, [screenWidth, props]);

  return (
    <div className={styles.MenuPopoverLayout}>
      <div className={styles.popoverHeaderContainer}>
        <button className={styles.xBtnContainer} onClick={() => props.toggleMenu()}>
          <img src={Icons.blackXIcon} alt="black-x-icon" />
        </button>
      </div>
      <div className={styles.buttonsContainer}>
        <NavLink to={appRoutes.restaurants} className={styles.menuBtn} onClick={() => props.toggleMenu()}>
          Restaurants
        </NavLink>
        <NavLink to={appRoutes.chefs} className={styles.menuBtn} onClick={() => props.toggleMenu()}>
          Chefs
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default MenuPopover;
