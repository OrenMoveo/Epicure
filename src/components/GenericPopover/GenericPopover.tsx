import React, { FC } from "react";
import styles from "./GenericPopover.module.scss";

interface GenericPopoverProps {
  children: React.ReactElement;
  coverAllPage?: boolean;
}

const GenericPopover: FC<GenericPopoverProps> = ({ coverAllPage, children }) => {
  const coverAllPageStyling = {
    top: "0",
    left: "0",
  };

  return (
    <div className={styles.Layout} style={coverAllPage ? coverAllPageStyling : {}}>
      {children}
    </div>
  );
};

export default GenericPopover;
