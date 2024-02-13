import { FC } from "react";
import styles from "./GenericModal.module.scss";
import whiteXIcon from "../../assets/images/whiteXIcon.svg";
import { useModalContext } from "../../context/ModalContext/ModalContext";

interface GenericModalProps {
  children: React.ReactElement;
}

const GenericModal: FC<GenericModalProps> = ({ children }) => {
  const { closeModal } = useModalContext();

  return (
    <div className={styles.genericModalOverlay} onClick={() => closeModal()}>
      <div className={styles.genericModalLayout} onClick={(e) => e.stopPropagation()}>
        <div className={styles.genericModalHeader}>
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
