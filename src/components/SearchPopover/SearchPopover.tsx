import Search from "../Search/Search";
import styles from "./SearchPopover.module.scss";
import { FC, useEffect } from "react";
import useGetScreenWidth from "../../hooks/useGetWidthScreen";
import { UIConstants } from "../../shared/constants";
import { Icons } from "../../assets/images";

interface SearchPopoverProps {
  toggleSearch: () => void;
}

const SearchPopover: FC<SearchPopoverProps> = (props) => {
  const screenWidth = useGetScreenWidth();
  useEffect(() => {
    const handleScreenSizeChange = () => {
      if (screenWidth > UIConstants.sizes.tabletWidth) {
        props.toggleSearch();
      }
    };
    handleScreenSizeChange();
  }, [screenWidth, props]);

  return (
    <div className={styles.SearchPopoverLayout}>
      <div className={styles.popoverHeaderContainer}>
        <button className={styles.xBtnContainer} onClick={() => props.toggleSearch()}>
          <img src={Icons.blackXIcon} alt="black-x-icon" />
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
