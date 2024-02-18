import styles from "./Rating.module.scss";
import { Icons } from "../../assets/images";
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
    updatedIsCheckedArray[props.rating - 1] = !updatedIsCheckedArray[props.rating - 1];
    props.setIsChecked(updatedIsCheckedArray);
  };

  return (
    <div className={styles.RatingLayout}>
      <button
        className={styles.checkBoxBtn}
        onClick={() => {
          handleClick();
        }}
      >
        <div className={styles.checkboxContainer}>
          {props.isChecked[props.rating - 1] ? (
            <img className={styles.checkboxImg} src={Icons.checkedboxIcon} alt="CheckboxIcon" />
          ) : (
            <img className={styles.emptyCheckboxImg} src={Icons.emptyCheckboxIcon} alt="emptyCheckboxIcon" />
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
