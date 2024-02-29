import { useEffect, useState } from "react";
import styles from "./ChefsPage.module.scss";
import { Chef } from "../../types/types";
import ChefCard from "../../components/ChefCard/ChefCard";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
import { getAllChefs } from "../../apiService/chefApiService";

const ChefsPage = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMobileOrTablet = isMobile || isTablet;

  enum IndexType {
    ALL_CHEFS_TAB_INDEX = 0,
    NEW_CHEF_INDEX = 1,
    MOST_VIEWED_INDEX = 2,
  }

  const [activeFilterButton, setActiveFilterButton] = useState(IndexType.ALL_CHEFS_TAB_INDEX);
  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllChefs();
        setChefs(data);
      } catch (error) {
        console.error();
      }
    };
    fetchData();
  }, []);

  const handleClick = (filterButtonIndex: number): void => {
    setActiveFilterButton(filterButtonIndex);
  };

  return (
    <section className={styles.chefsPageSection}>
      <div className={styles.chefsPageLayout}>
        <div className={styles.chefsPageContentContainer}>
          {isMobileOrTablet && <div className={styles.chefsPageTitle}>CHEFS</div>}
          <div className={styles.chefsPageFiltersContainer}>
            <button
              className={`${styles.filterButton} ${activeFilterButton === IndexType.ALL_CHEFS_TAB_INDEX ? styles.activeButton : ""}`}
              onClick={() => handleClick(IndexType.ALL_CHEFS_TAB_INDEX)}
            >
              All
            </button>
            <button
              className={`${styles.filterButton} ${activeFilterButton === IndexType.NEW_CHEF_INDEX ? styles.activeButton : ""}`}
              onClick={() => handleClick(IndexType.NEW_CHEF_INDEX)}
            >
              New
            </button>
            <button
              className={`${styles.filterButton} ${activeFilterButton === IndexType.MOST_VIEWED_INDEX ? styles.activeButton : ""}`}
              onClick={() => handleClick(IndexType.MOST_VIEWED_INDEX)}
            >
              Most Viewed
            </button>
          </div>
          <div className={styles.chefsPhotosContainer}>
            {chefs.map((chef) => (
              <ChefCard key={chef._id} chef={chef} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefsPage;
