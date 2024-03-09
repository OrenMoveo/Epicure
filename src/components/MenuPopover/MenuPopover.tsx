import { NavLink } from "react-router-dom";
import styles from "./MenuPopover.module.scss";
import { UIConstants, appRoutes } from "../../shared/constants";
import Footer from "../Footer/Footer";
import { Icons } from "../../assets/images";
import { FC, useEffect, useRef } from "react";
import useGetScreenWidth from "../../hooks/useGetWidthScreen";

interface MenuPopoverProps {
  toggleMenu: () => void;
}

const MenuPopover: FC<MenuPopoverProps> = (props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const screenWidth = useGetScreenWidth();
  useEffect(() => {
    const handleScreenSizeChange = () => {
      if (screenWidth > UIConstants.sizes.tabletWidth) {
        props.toggleMenu();
      }
    };
    handleScreenSizeChange();
  }, [screenWidth, props]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        props.toggleMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.MenuPopoverLayout} ref={containerRef}>
      <div className={styles.popoverHeaderContainer}>
        <button className={styles.xBtnContainer} onClick={() => props.toggleMenu()}>
          <img src={Icons.blackXIcon} alt="black-x-icon" />
        </button>
      </div>
      <div className={styles.buttonsContainer}>
        <NavLink to={appRoutes.restaurants.base} className={styles.menuBtn} onClick={() => props.toggleMenu()}>
          Restaurants
        </NavLink>
        <NavLink to={appRoutes.chefs.base} className={styles.menuBtn} onClick={() => props.toggleMenu()}>
          Chefs
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default MenuPopover;
