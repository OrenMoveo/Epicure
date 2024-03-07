import styles from "./GoToAllRestaurantsButton.module.scss";
import { NavLink } from "react-router-dom";
import { appRoutes } from "../../shared/constants";
import { Icons } from "../../assets/images";

const GoToAllRestaurantsButton = () => {
  return (
    <NavLink to={appRoutes.restaurants.base} className={styles.linkContainer}>
      <button className={styles.gotoAllRestaurantsBtn} name="all-restaurant-goto-button">
        <p className={styles.gotoAllRestaurantsText}>All Restaurants</p>
        <img src={Icons.goToIcon} alt="go-to-icon" />
      </button>
    </NavLink>
  );
};

export default GoToAllRestaurantsButton;
