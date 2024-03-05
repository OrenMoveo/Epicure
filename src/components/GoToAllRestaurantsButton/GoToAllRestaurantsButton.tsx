import styles from "./GoToAllRestaurantsButton.module.scss";
import { Link } from "react-router-dom";
import { appRoutes } from "../../shared/constants";
import { Icons } from "../../assets/images";

const GoToAllRestaurantsButton = () => {
  return (
    <Link to={appRoutes.restaurants.base} className={styles.linkContainer}>
      <button className={styles.gotoAllRestaurantsBtn} name="all-restaurant-goto-button">
        <p className={styles.gotoAllRestaurantsText}>All Restaurants</p>
        <img src={Icons.goToIcon} alt="go-to-icon" />
      </button>
    </Link>
  );
};

export default GoToAllRestaurantsButton;
