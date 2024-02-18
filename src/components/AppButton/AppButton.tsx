import { FC } from "react";
import styles from "./AppButton.module.scss";

interface BlackButtonProps {
  handleClick: () => void;
  isBlack?: boolean;
  isGray?: boolean;
  buttonContent: string;
  order?: number;
}

const AppButton: FC<BlackButtonProps> = ({ handleClick, isGray, isBlack, buttonContent, order = 0 }) => {
  const buttonStyles = isBlack
    ? {
        backgroundColor: "black",
        color: "white",
        order: order,
      }
    : isGray
    ? {
        backgroundColor: "rgba(151, 151, 151, 1)",
        color: "white",
        order: order,
      }
    : { backgroundColor: "white", color: "black", border: "1px solid black", order: order };

  return (
    <button className={styles.appButton} onClick={handleClick} style={buttonStyles}>
      {buttonContent}
    </button>
  );
};

export default AppButton;
