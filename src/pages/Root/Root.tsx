import styles from "./Root.module.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useModalContext } from "../../context/ModalContext/ModalContext";
import DishModal from "../../components/DishModal/DishModal";

const Root = () => {
  const { isModalActive, dish } = useModalContext();

  return (
    <div className={isModalActive ? styles.modalActive : styles.rootContainer}>
      <Navbar />
      <Outlet />
      <Footer />
      {isModalActive && <DishModal dish={dish} />}
    </div>
  );
};

export default Root;
