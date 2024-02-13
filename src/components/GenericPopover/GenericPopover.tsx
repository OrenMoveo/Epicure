import React, { FC } from "react";
import styles from "./GenericPopover.module.scss";

interface GenericPopoverProps {
  children: React.ReactElement;
}

const GenericPopover: FC<GenericPopoverProps> = ({ children }) => {
  return <div className={styles.Layout}>{children}</div>;
};

export default GenericPopover;
