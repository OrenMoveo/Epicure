import styles from "./Dropdown.module.scss";
import { Icons } from "../../assets/images";

import { FC, useState } from "react";
import RatingContainer from "../RatingContainer/RatingContainer";
interface DropDownProps {
  filterTitle: string;
  rating?: boolean;
  priceRange?: boolean;
  distance?: boolean;
  setPriceRange?: React.Dispatch<React.SetStateAction<number[]>>;
  setRating?: React.Dispatch<React.SetStateAction<number>>;
}

const Dropdown: FC<DropDownProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState([false, false, false, false, false]);

  const hasAtLeastOneTrue = (booleanArray: boolean[]) => {
    return booleanArray.some((value) => value);
  };

  const handleClearAll = (): void => {
    const clearedCheckboxArray = isChecked.map(() => false);
    setIsChecked(clearedCheckboxArray);
  };

  return (
    <div className={styles.dropdownLayout}>
      <button
        className={styles.dropdownBtnContainer}
        onClick={() => {
          setIsOpen((open) => !open);
        }}
      >
        <div className={styles.dropdownBtnContent}>
          <p className={styles.btnText}>{props.filterTitle}</p>
          <img src={Icons.dropdownArrowIcon} alt="dropwdownIcon" />
        </div>
      </button>
      {isOpen && (
        <div className={styles.ratingPopoverContainer}>
          <div className={styles.ratingsContentContainer}>
            <div className={styles.titleContainer}>
              <p className={styles.titleText}>{props.filterTitle}</p>
            </div>
            <div className={styles.ratingsContainer}>{props.rating && <RatingContainer isChecked={isChecked} setIsChecked={setIsChecked} />}</div>
            <div className={styles.clearAllCheckboxBtnContainer}>
              {hasAtLeastOneTrue(isChecked) && (
                <button
                  className={styles.clearCheckboxBtn}
                  onClick={() => {
                    handleClearAll();
                  }}
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
