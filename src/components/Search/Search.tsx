import styles from "./Search.module.scss";
import { Icons } from "../../assets/images/";

const Search = () => {
  return (
    <div className={styles.SearchLayout}>
      <button className={styles.searchBtn}>
        <img src={Icons.searchIcon} alt="search-icon" />
      </button>
      <input className={styles.searchInput} placeholder="Search for a restaurant, cuisine, chef" name="search-input"></input>
    </div>
  );
};

export default Search;
