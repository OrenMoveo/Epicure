import styles from "../styles/constants.module.scss";

export const UIConstants = {
  sizes: {
    mobileWidth: Number(styles.mobileMaxWidth.slice(0, -2)),
    tabletWidth: Number(styles.tabletMaxWidth.slice(0, -2)),
    smallDesktopWidth: Number(styles.smallDesktopMaxWidth.slice(0, -2)),
  },
  fonts: {
    primary: {
      family: styles.appPrimaryFontFamily,
      weight: styles.appPrimaryFontWeight,
      textAlign: styles.appPrimaryTextAlign,
    },
  },
};
