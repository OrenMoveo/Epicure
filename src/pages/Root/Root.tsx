import styles from "./Root.module.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useModalContext } from "../../context/ModalContext/ModalContext";
import DishModal from "../../components/DishModal/DishModal";
import useIsTablet from "../../hooks/useIsTablet";
import useIsMobile from "../../hooks/useIsMobile";

const Root = () => {
  const { isModalActive, dish } = useModalContext();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMobileOrTablet = isMobile || isTablet;
  return (
    <div className={isModalActive && isMobileOrTablet ? styles.modalActive : styles.rootContainer}>
      <Navbar />
      <Outlet />
      <Footer />
      {isModalActive && <DishModal dish={dish} />}
    </div>
  );
};

export default Root;
