import styles from "./SearchPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../reduxToolkit/store/store";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { useEffect, useState } from "react";
import { fetchSearchedData } from "../../reduxToolkit/thunks/searchThunk";

const SearchPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { searchedData, searchTerm } = useSelector((state: RootState) => state.search);

  useEffect(() => {
    dispatch(fetchSearchedData(searchTerm));
  }, [searchTerm, dispatch]);

  return (
    <div className={styles.SearchPageLayout}>
      {searchedData.restaurants.map((rest) => (
        <RestaurantCard restaurant={rest} key={rest._id} />
      ))}
    </div>
  );
};

export default SearchPage;
