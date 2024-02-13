import styles from "./Hero.module.scss";
import Search from "../Search/Search";

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroSearchOverlayContainer}>
        <div className={styles.heroOverlayText}>Epicure works with the top chef restaurants in Tel Aviv</div>
        <Search />
      </div>
    </section>
  );
};

export default Hero;
