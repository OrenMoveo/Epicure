import styles from "./AppLayout.module.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useModalContext } from "../../context/ModalContext";
import DishModal from "../../components/DishModal/DishModal";
import useIsTablet from "../../hooks/useIsTablet";
import useIsMobile from "../../hooks/useIsMobile";
import GenericModal from "../../components/GenericModal/GenericModal";
import DeleteOrder from "../../components/ShoppingBag/DeleteOrder/DeleteOrder";

const AppLayout = () => {
  const { isDishModalActive: isModalActive, dish, isDeleteOrderModalOpen, isGenericModalActive } = useModalContext();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMobileOrTablet = isMobile || isTablet;

  return (
    <div className={isModalActive && isMobileOrTablet ? styles.modalActive : styles.AppLayoutContainer}>
      <Navbar />
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <Footer />
      {isModalActive && <DishModal dish={dish} />}
      {isDeleteOrderModalOpen && isGenericModalActive && (
        <GenericModal>
          <DeleteOrder />
        </GenericModal>
      )}
    </div>
  );
};

export default AppLayout;
