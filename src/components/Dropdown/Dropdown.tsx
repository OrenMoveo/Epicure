import styles from "./Dropdown.module.scss";
import dropdownIcon from "../../assets/images/dropdownArrowIcon.svg";
import { FC, useEffect, useRef, useState } from "react";

const Dropdown: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const handleBlur = (e: MouseEvent) => {
    // Close the popover only if it is currently open
    if (
      isOpen &&
      popoverRef.current &&
      !popoverRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleBlur);
    return () => {
      document.removeEventListener("click", handleBlur);
    };
  }, [isOpen]);

  return (
    <div className={styles.dropdownLayout}>
      <button
        className={styles.dropdownBtnContainer}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <div className={styles.dropdownBtnContent}>
          <p className={styles.btnText}>Button</p>
          <img src={dropdownIcon} alt="dropwdownIcon" />
        </div>
      </button>
      {isOpen && (
        <div className={styles.popoverContainer} ref={popoverRef}>
          blabla
        </div>
      )}
    </div>
  );
};

export default Dropdown;
