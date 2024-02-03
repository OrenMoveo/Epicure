import { UIConstants } from "../shared/constants";
import useGetScreenWidth from "./useGetWidthScreen";

export default function useIsMobile() {
  const screenWidth = useGetScreenWidth();
  return screenWidth <= UIConstants.sizes.mobileWidth;
}
