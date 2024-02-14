import { FC } from "react";
import emptyCheckbox from "../../assets/images/emptyCheckboxIcon.svg";
import checkedBox from "../../assets/images/checkedboxIcon.svg";
import styles from "./ChooseDishChanges.module.scss";
import { DishChangeStateInterface } from "../../types/types";

interface ChooseDishChangesProps {
  dishChanges: DishChangeStateInterface[];
  setDishChanges: React.Dispatch<React.SetStateAction<DishChangeStateInterface[]>>;
}

const ChooseDishChanges: FC<ChooseDishChangesProps> = ({ dishChanges, setDishChanges }) => {
  const toggleDishChange = (clickedDish: DishChangeStateInterface) => {
    setDishChanges((prevDishChanges) => prevDishChanges.map((dishChange) => (dishChange === clickedDish ? { ...dishChange, isChecked: !dishChange.isChecked } : dishChange)));
  };

  return (
    <div className={styles.dishChangesContainer}>
      <div className={styles.dishChangesTitle}>Changes</div>
      <div className={styles.dishChangesContainer}>
        {dishChanges.map((dishChange: DishChangeStateInterface) => (
          <div className={styles.singleDishChangeContainer} key={dishChange.name}>
            <button onClick={() => toggleDishChange(dishChange)} className={styles.checkboxButton}>
              <img src={dishChange.isChecked ? checkedBox : emptyCheckbox} alt="checkbox" />
            </button>
            {dishChange.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseDishChanges;
