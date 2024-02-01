import { UIConstants } from "../shared/constants";
import useGetScreenWidth from "./useGetWidthScreen";

export default function useIsTablet() {
  const screenWidth = useGetScreenWidth();
  return (
    UIConstants.sizes.mobileWidth < screenWidth &&
    screenWidth <= UIConstants.sizes.tabletWidth
  );
}
