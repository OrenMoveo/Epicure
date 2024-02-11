import Search from "../Search/Search";
import styles from "./SearchPopover.module.scss";
import blackXIcon from "../../assets/images/blackXIcon.svg";

const SearchPopover = () => {
  return (
    <div className={styles.SearchPopoverLayout}>
      <div className={styles.xBtnContainer}>
        <img src={blackXIcon} alt="black-x-icon" />
        <div className={styles.popoverTitle}>Search</div>
      </div>
      <Search />
    </div>
  );
};

export default SearchPopover;
