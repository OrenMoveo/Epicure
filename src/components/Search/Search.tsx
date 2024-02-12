import styles from "./Search.module.scss";
import searchIcon from "../../assets/images/SearchIcon.svg";

const Search = () => {
  return (
    <div className={styles.SearchLayout}>
      <button className={styles.searchBtn}>
        <img src={searchIcon} alt="search-icon" />
      </button>
      <input
        className={styles.searchInput}
        placeholder="Search for restaurant cuisine, chef"
        name="search-input"
      ></input>
    </div>
  );
};

export default Search;
