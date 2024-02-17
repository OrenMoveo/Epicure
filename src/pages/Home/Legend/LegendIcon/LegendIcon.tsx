import React from "react";
import styles from "./LegendIcon.module.scss";

interface LegendIconProps {
  icon: string;
  description: string;
  iconWidth: number;
  iconHeight: number;
}

const LegendIcon: React.FC<LegendIconProps> = ({ icon, description, iconWidth, iconHeight }) => {
  return (
    <div className={styles.LegendIconLayout}>
      <img src={icon} alt={`${description}-icon`} style={{ width: iconWidth, height: iconHeight }} />
      <p className={styles.itemDescription}>{description}</p>
    </div>
  );
};

export default LegendIcon;
