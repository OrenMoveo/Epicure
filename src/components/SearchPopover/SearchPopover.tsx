import Search from "../Search/Search";
import styles from "./SearchPopover.module.scss";
import blackXIcon from "../../assets/images/blackXIcon.svg";
import { FC } from "react";

interface SearchPopoverProps {
  toggleSearch: () => void;
}

const SearchPopover: FC<SearchPopoverProps> = (props) => {
  return (
    <div className={styles.SearchPopoverLayout}>
      <div className={styles.popoverHeaderContainer}>
        <button
          className={styles.xBtnContainer}
          onClick={() => props.toggleSearch()}
        >
          <img src={blackXIcon} alt="black-x-icon" />
        </button>
        <div className={styles.popoverTitle}>Search</div>
        <div className={styles.emptyContainer}></div>
      </div>
      <div className={styles.searchContainer}>
        <Search />
      </div>
    </div>
  );
};

export default SearchPopover;
