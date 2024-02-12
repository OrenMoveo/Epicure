import { FC } from "react";
import { Chef } from "../../types/types";
import styles from "./ChefCard.module.scss";

interface ChefCardProps {
  chef: Chef;
}

const ChefCard: FC<ChefCardProps> = (props) => {
  return (
    <div
      className={styles.ChefCardLayout}
      style={{ backgroundImage: `url(${props.chef.pictureUrl})` }}
    >
      <div className={styles.overlayNameContainer}>{props.chef.name}</div>
    </div>
  );
};

export default ChefCard;
