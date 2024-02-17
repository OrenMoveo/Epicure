import { CSSProperties, FC } from "react";
import styles from "./AppStoreButton.module.scss";

interface AppStoreButtonProps {
  icon: string;
  appStoreTitle: string;
  appStoreDescription: string;
  iconSizeWidth?: number;
  iconSizeHeight?: number;
  descriptionStyles?: CSSProperties;
  titleStyles?: CSSProperties;
  buttonStyles?: CSSProperties;
}

const AppStoreButton: FC<AppStoreButtonProps> = ({ buttonStyles, icon, titleStyles, descriptionStyles, appStoreDescription, appStoreTitle, iconSizeHeight, iconSizeWidth }) => {
  return (
    <button className={styles.appStoreBtn} style={buttonStyles}>
      <img src={icon} alt={appStoreTitle} style={{ width: iconSizeWidth, height: iconSizeHeight }} />
      <div className={styles.appTextContainer}>
        <p className={styles.descriptionContainer} style={descriptionStyles}>
          {appStoreDescription}
        </p>
        <p className={styles.titleContainer} style={titleStyles}>
          {appStoreTitle}
        </p>
      </div>
    </button>
  );
};

export default AppStoreButton;
