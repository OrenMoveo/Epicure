import { FC, useRef } from "react";
import styles from "./GenericModal.module.scss";
import { Icons } from "../../assets/images";
import { useModalContext } from "../../context/ModalContext";
import { createPortal } from "react-dom";

interface GenericModalProps {
  children: React.ReactElement;
}

const GenericModal: FC<GenericModalProps> = ({ children }) => {
  const { closeModal } = useModalContext();

  const modalContainerRef = useRef(document.getElementById("modal"));

  return modalContainerRef.current
    ? createPortal(
        <div className={styles.genericModalOverlay} onClick={() => closeModal()}>
          <div className={styles.genericModalLayout} onClick={(e) => e.stopPropagation()}>
            <div className={styles.genericModalHeader}>
              <button className={styles.btnContainer} onClick={() => closeModal()}>
                <img src={Icons.whiteXIcon} alt="white-x-icon" />
              </button>
            </div>
            {children}
          </div>
        </div>,
        modalContainerRef.current
      )
    : null;
};

export default GenericModal;
