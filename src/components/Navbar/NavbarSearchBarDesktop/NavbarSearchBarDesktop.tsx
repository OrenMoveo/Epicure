import styles from "./NavbarSearchBarDesktop.module.scss";
import { Icons } from "../../../assets/images/";

const NavbarSearchBarDesktop = () => {
  return (
    <div className={styles.SearchLayout}>
      <button className={styles.searchBtn}>
        <img src={Icons.searchIcon} alt="search-icon" />
      </button>
      <input className={styles.searchInput} placeholder="Search for a restaurant, cuisine, chef" name="search-input" onClick={(e) => e.stopPropagation()}></input>
    </div>
  );
};

export default NavbarSearchBarDesktop;
