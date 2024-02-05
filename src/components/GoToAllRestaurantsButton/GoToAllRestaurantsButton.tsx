import styles from "./GoToAllRestaurantsButton.module.scss";
import goToIcon from "../../assets/images/goToIcon.svg";
import { Link } from "react-router-dom";

const GoToAllRestaurantsButton = () => {
  return (
    <Link to="/restaurants" className={styles.linkContainer}>
      <button
        className={styles.gotoAllRestaurantsBtn}
        name="all-restaurant-goto-button"
      >
        <p className={styles.gotoAllRestaurantsText}>All Restaurants</p>
        <img src={goToIcon} alt="go-to-icon" />
      </button>
    </Link>
  );
};

export default GoToAllRestaurantsButton;
