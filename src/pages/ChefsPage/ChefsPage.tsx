import styles from "./ChefsPage.module.scss";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
import { NavLink, Outlet } from "react-router-dom";
import { appRoutes } from "../../shared/constants";

const ChefsPage = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMobileOrTablet = isMobile || isTablet;

  const filterButtons = [
    { label: "All", route: "/" },
    { label: "New", route: appRoutes.chefs.newChefs },
    { label: "Most Viewed", route: appRoutes.chefs.mostViewedChefs },
  ];

  return (
    <section className={styles.chefsPageSection}>
      <div className={styles.chefsPageLayout}>
        <div className={styles.chefsPageContentContainer}>
          {isMobileOrTablet && <div className={styles.chefsPageTitle}>CHEFS</div>}
          <div className={styles.chefsPageFiltersContainer}>
            {filterButtons.map((button) => (
              <NavLink key={button.label} to={`${appRoutes.chefs.base}/${button.route}`} className={({ isActive }) => (isActive ? styles.activeButton : styles.filterButton)}>
                {button.label}
              </NavLink>
            ))}
          </div>
          <Outlet context={styles.chefsPhotosContainer} />
        </div>
      </div>
    </section>
  );
};

export default ChefsPage;
