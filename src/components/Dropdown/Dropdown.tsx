import styles from "./Dropdown.module.scss";
import { Icons } from "../../assets/images";

import { FC, useState, useEffect } from "react";
import RatingContainer from "../RatingContainer/RatingContainer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../reduxToolkit/store/store";
import { setRatingFilter } from "../../reduxToolkit/slices/restaurantSlice";
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

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const selectedRatings = isChecked.map((value, index) => (value ? index + 1 : 0)).filter((value) => value !== 0);

    dispatch(setRatingFilter(selectedRatings));
  }, [isChecked, dispatch]);

  const hasAtLeastOneTrue = (booleanArray: boolean[]) => {
    return booleanArray.some((value) => value);
  };

  const handleClearAll = (): void => {
    const clearedCheckboxArray = isChecked.map(() => false);
    setIsChecked(clearedCheckboxArray);
    setIsOpen(false);
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
      {isOpen && props.rating && (
        <div className={styles.ratingPopoverContainer}>
          <div className={styles.ratingsContentContainer}>
            <div className={styles.titleContainer}>
              <p className={styles.titleText}>{props.filterTitle}</p>
            </div>
            <div className={styles.ratingsContainer}>{<RatingContainer isChecked={isChecked} setIsChecked={setIsChecked} />}</div>
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
