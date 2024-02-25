import { FC, useState } from "react";
import { Icons } from "../../assets/images";
import styles from "./ChooseDishChanges.module.scss";
import globalData from "../../data/data.json";
interface ChooseDishChangesProps {
  setDishChanges: React.Dispatch<React.SetStateAction<string[]>>;
}

interface DishChangeItemType {
  name: string;
  isChecked: boolean;
}

const ChooseDishChanges: FC<ChooseDishChangesProps> = ({ setDishChanges }) => {
  const dishChanges = globalData.data.dishChanges;
  const [dishChangesItems, setDishChangesItems] = useState<DishChangeItemType[]>(dishChanges.map((dc) => ({ name: dc, isChecked: false })));

  const toggleDishChange = (clickedDish: DishChangeItemType) => {
    const updatedDishChanges = dishChangesItems.map((dishChange) => (dishChange === clickedDish ? { ...dishChange, isChecked: !dishChange.isChecked } : dishChange));
    setDishChangesItems(updatedDishChanges);

    const checkedDishChanges = updatedDishChanges.filter((dishChange) => dishChange.isChecked).map((dishChange) => dishChange.name);
    setDishChanges(checkedDishChanges);
  };

  return (
    <div className={styles.dishChangesContainer}>
      <div className={styles.dishChangesTitle}>Changes</div>
      <div className={styles.dishChangesContainer}>
        {dishChangesItems.map((dishChange) => (
          <div className={styles.singleDishChangeContainer} key={dishChange.name}>
            <button onClick={() => toggleDishChange(dishChange)} className={styles.checkboxButton}>
              <img src={dishChange.isChecked ? Icons.checkedboxIcon : Icons.emptyCheckboxIcon} alt="checkbox" />
            </button>
            {dishChange.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseDishChanges;
