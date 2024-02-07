import { FC } from "react";
import Rating from "../Rating/Rating";

interface RatingContainerProps {
  isChecked: boolean[];
  setIsChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const RatingContainer: FC<RatingContainerProps> = (props) => {
  const numRatings = 5;
  const ratingsArray = Array.from(
    { length: numRatings },
    (_, index) => index + 1
  );

  return ratingsArray.map((rating) => (
    <Rating
      key={rating}
      rating={rating}
      isChecked={props.isChecked}
      setIsChecked={props.setIsChecked}
    />
  ));
};

export default RatingContainer;
