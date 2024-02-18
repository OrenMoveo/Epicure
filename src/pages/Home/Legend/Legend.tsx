import styles from "./Legend.module.scss";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import LegendIcon from "./LegendIcon/LegendIcon";
import useIsMobile from "../../../hooks/useIsMobile";
import { Icons } from "../../../assets/images/";

const Legend = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.legendSection}>
      <div className={styles.legendContentContainer}>
        <div className={styles.legendTitleContainer}>
          <SectionTitle title={"THE MEANING OF OUR ICONS:"} />
        </div>
        <div className={styles.iconsContainer}>
          <LegendIcon icon={Icons.spicyIcon} description="Spicy" iconWidth={76.95} iconHeight={57.44} />
          <LegendIcon icon={Icons.vegetarianIcon} description="Vegetarian" iconWidth={55.82} iconHeight={56.28} />
          <LegendIcon icon={Icons.veganIcon} description="Vegan" iconWidth={56.04} iconHeight={56.45} />
        </div>
      </div>
    </section>
  );
};

export default Legend;
