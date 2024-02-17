import { FC, useState } from "react";
import styles from "./ChooseSideDishes.module.scss";
import emptyRadioButton from "../../assets/images/radioButton.svg";
import checkedRadioButton from "../../assets/images/checkedRadioButton.svg";

interface SideDishesStateInterface {
  name: string;
  isChecked: boolean;
}

const ChooseSideDishes: FC = () => {
  const [sideDishes, setSideDishes] = useState<SideDishesStateInterface[]>([
    { name: "White bread", isChecked: false },
    { name: "Sticky rice", isChecked: false },
  ]);

  const toggleSideDish = (clickedDish: SideDishesStateInterface) => {
    setSideDishes((prevSideDishes) => prevSideDishes.map((dish) => (dish === clickedDish ? { ...dish, isChecked: !dish.isChecked } : dish)));
  };

  return (
    <div className={styles.dishChooseASideContainer}>
      <div className={styles.chooseASideTitle}>Choose A Side</div>
      <div className={styles.sideDishesContainer}>
        {sideDishes.map((sideDish: SideDishesStateInterface) => (
          <div className={styles.singleSideDishContainer} key={sideDish.name}>
            <button onClick={() => toggleSideDish(sideDish)} className={styles.radioButtonContainer}>
              <img src={sideDish.isChecked ? checkedRadioButton : emptyRadioButton} alt="radioButton" />
            </button>
            {sideDish.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseSideDishes;
