import { FC, useRef } from "react";
import styles from "./GenericModal.module.scss";
import { Icons } from "../../assets/images";
import { createPortal } from "react-dom";

interface GenericModalProps {
  children: React.ReactElement;
  handleClose: () => void;
}

const GenericModal: FC<GenericModalProps> = ({ children, handleClose }) => {
  const modalContainerRef = useRef(document.getElementById("modal"));

  return modalContainerRef.current
    ? createPortal(
        <div className={styles.genericModalOverlay} onClick={() => handleClose()}>
          <div className={styles.genericModalLayout} onClick={(e) => e.stopPropagation()}>
            <div className={styles.genericModalHeader}>
              <button className={styles.btnContainer} onClick={() => handleClose()}>
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
