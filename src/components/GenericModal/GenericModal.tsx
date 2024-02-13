import { FC } from "react";
import styles from "./GenericModal.module.scss";
import whiteXIcon from "../../assets/images/whiteXIcon.svg";
import { useModalContext } from "../../context/ModalContext/ModalContext";

interface GenericModalProps {
  children: React.ReactElement;
}



const GenericModal: FC<GenericModalProps> = ({ children }) => {

const {isGenericModalOpen} = useModalContext();

  return (
    <div className={styles.genericModalOverlay} onClick={() => closeModalDesktop()}>
      <div className={styles.DishModalLayout} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <button className={styles.btnContainer} onClick={() => closeModal()}>
            <img src={whiteXIcon} alt="white-x-icon" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default GenericModal;
