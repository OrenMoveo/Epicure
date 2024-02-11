import styles from "./Rating.module.scss";
import emptyCheckboxIcon from "../../assets/images/emptyCheckboxIcon.svg";
import checkedBoxIcon from "../../assets/images/checkedboxIcon.svg";
import { FC } from "react";

interface RatingProps {
  isChecked: boolean[];
  rating: number;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const Rating: FC<RatingProps> = (props) => {
  const starsIconPath: string = `/src/assets/images/ratings/rating${props.rating}.svg`;

  const handleClick = () => {
    const updatedIsCheckedArray = [...props.isChecked];
    updatedIsCheckedArray[props.rating - 1] =
      !updatedIsCheckedArray[props.rating - 1];
    props.setIsChecked(updatedIsCheckedArray);
  };

  return (
    <div className={styles.RatingLayout}>
      <button className={styles.checkBoxBtn} onClick={handleClick}>
        <div className={styles.checkboxContainer}>
          {props.isChecked[props.rating - 1] ? (
            <img
              className={styles.checkboxImg}
              src={checkedBoxIcon}
              alt="CheckboxIcon"
            />
          ) : (
            <img
              className={styles.emptyCheckboxImg}
              src={emptyCheckboxIcon}
              alt="emptyCheckboxIcon"
            />
          )}
        </div>
      </button>
      <div className={styles.starsContainer}>
        <img src={starsIconPath} alt="rating" />
      </div>
    </div>
  );
};

export default Rating;
