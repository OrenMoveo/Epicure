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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../reduxToolkit/store/store";
import { setIsLoggedInUser } from "../../reduxToolkit/slices/userSlice";
import { AnimatePresence } from "framer-motion";

const AppLayout = () => {
  const { isDishModalActive: isModalActive, dish, isDeleteOrderModalOpen, isGenericModalActive, closeModal } = useModalContext();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMobileOrTablet = isMobile || isTablet;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const auth = localStorage.getItem("authToken");
    if (auth) {
      dispatch(setIsLoggedInUser(true));
    }
  }, []);

  return (
    <div className={isModalActive && isMobileOrTablet ? styles.modalActive : styles.AppLayoutContainer}>
      <Navbar />
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <Footer />
      <AnimatePresence>{isModalActive && <DishModal dish={dish} />}</AnimatePresence>
      {isDeleteOrderModalOpen && isGenericModalActive && (
        <GenericModal handleClose={closeModal}>
          <DeleteOrder />
        </GenericModal>
      )}
    </div>
  );
};

export default AppLayout;
