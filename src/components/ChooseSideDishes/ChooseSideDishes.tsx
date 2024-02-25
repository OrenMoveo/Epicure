import { FC, useState } from "react";
import styles from "./ChooseSideDishes.module.scss";
import { Buttons } from "../../assets/images";
import globalData from "../../data/data.json";

interface SideDishesStateProps {
  setSideDishes: React.Dispatch<React.SetStateAction<string[]>>;
}

interface SideDishesItemType {
  name: string;
  isChecked: boolean;
}
const ChooseSideDishes: FC<SideDishesStateProps> = ({ setSideDishes }) => {
  const sideDishesData = globalData.data.sideDishes;
  const [sideDishesItems, setSideDishesItems] = useState<SideDishesItemType[]>(sideDishesData.map((sideDish) => ({ name: sideDish, isChecked: false })));

  const toggleSideDish = (clickedDish: SideDishesItemType) => {
    const updatedSideDishes = sideDishesItems.map((sideDish) => (sideDish === clickedDish ? { ...sideDish, isChecked: !sideDish.isChecked } : sideDish));
    setSideDishesItems(updatedSideDishes);

    const checkedSideDishes = updatedSideDishes.filter((sideDish) => sideDish.isChecked).map((sideDish) => sideDish.name);
    setSideDishes(checkedSideDishes);
  };

  return (
    <div className={styles.dishChooseASideContainer}>
      <div className={styles.chooseASideTitle}>Choose A Side</div>
      <div className={styles.sideDishesContainer}>
        {sideDishesItems.map((sideDish: SideDishesItemType) => (
          <div className={styles.singleSideDishContainer} key={sideDish.name}>
            <button onClick={() => toggleSideDish(sideDish)} className={styles.radioButtonContainer}>
              <img src={sideDish.isChecked ? Buttons.checkedRadioBtn : Buttons.radioBtn} alt="radio-button" />
            </button>
            {sideDish.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseSideDishes;
