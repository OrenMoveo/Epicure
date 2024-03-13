import styles from "./Search.module.scss";
import { Icons } from "../../assets/images/";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../reduxToolkit/store/store";
import { setSearchTerm } from "../../reduxToolkit/slices/searchSlice";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../shared/constants";

const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const lastChange = useRef<any | null>(null);

  const { searchTerm } = useSelector((state: RootState) => state.search);
  const navigate = useNavigate();

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      navigate(`${appRoutes.search.byTerm}${searchTerm}`);
    }
  };

  const handleChange = (event: { target: { value: string } }) => {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      dispatch(setSearchTerm(event.target.value));
    }, 500);
  };

  return (
    <div className={styles.SearchLayout}>
      <button className={styles.searchBtn}>
        <img src={Icons.searchIcon} alt="search-icon" />
      </button>
      <input className={styles.searchInput} placeholder="Search for a restaurant, cuisine, chef" name="search-input" onChange={handleChange} onKeyDown={handleKeyDown}></input>
    </div>
  );
};

export default Search;
