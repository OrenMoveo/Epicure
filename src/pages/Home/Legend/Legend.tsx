import styles from "./Legend.module.scss";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import spicyIcon from "../../../assets/images/spicyIcon.svg";
import vegetarianIcon from "../../../assets/images/vegetarianIcon.svg";
import veganIcon from "../../../assets/images/veganIcon.svg";
import LegendIcon from "./LegendIcon/LegendIcon";
import useIsMobile from "../../../hooks/useIsMobile";

const Legend = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.legendSection}>
      <div className={styles.legendContentContainer}>
        <div className={styles.legendTitleContainer}>
          <SectionTitle title={"THE MEANING OF OUR ICONS:"} />
        </div>
        <div className={styles.iconsContainer}>
          <LegendIcon icon={spicyIcon} description="Spicy" iconWidth={isMobile ? 46.14 : 76.95} iconHeight={isMobile ? 34.44 : 57.44} />
          <LegendIcon icon={vegetarianIcon} description="Vegetarian" iconWidth={55.82} iconHeight={56.28} />
          <LegendIcon icon={veganIcon} description="Vegan" iconWidth={56.04} iconHeight={56.45} />
        </div>
      </div>
    </section>
  );
};

export default Legend;
