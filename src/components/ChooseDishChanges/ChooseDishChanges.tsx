import React, { useState } from "react";
import emptyCheckbox from "../../assets/images/emptyCheckboxIcon.svg";
import checkedBox from "../../assets/images/checkedboxIcon.svg";
import styles from "./ChooseDishChanges.module.scss";

interface DishChangeStateInterface {
  name: string;
  isChecked: boolean;
}

const ChooseDishChanges: React.FC = () => {
  const [dishChanges, setDishChanges] = useState<DishChangeStateInterface[]>([
    { name: "Without peanuts", isChecked: false },
    { name: "Sticky Less spicy", isChecked: false },
  ]);

  const toggleDishChange = (clickedDish: DishChangeStateInterface) => {
    setDishChanges((prevDishChanges) =>
      prevDishChanges.map((dishChange) =>
        dishChange === clickedDish
          ? { ...dishChange, isChecked: !dishChange.isChecked }
          : dishChange
      )
    );
  };

  return (
    <div className={styles.dishChangesContainer}>
      <div className={styles.dishChangesTitle}>Changes</div>
      <div className={styles.dishChangesContainer}>
        {dishChanges.map((dishChange: DishChangeStateInterface) => (
          <div
            className={styles.singleDishChangeContainer}
            key={dishChange.name}
          >
            <button
              onClick={() => toggleDishChange(dishChange)}
              className={styles.checkboxButton}
            >
              <img
                src={dishChange.isChecked ? checkedBox : emptyCheckbox}
                alt="checkbox"
              />
            </button>
            {dishChange.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseDishChanges;
