import React from "react";
import { useMediaQuery } from "@react-hook/media-query";
interface SectionTitleProps {
  mobileWidth: number;
  mobileHeight: number;
  desktopWidth: number;
  desktopHeight: number;
  textAlign?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent";
  title: string;
}

export const SectionTitle = ({
  mobileWidth,
  mobileHeight,
  desktopWidth,
  desktopHeight,
  title,
  textAlign,
}: SectionTitleProps) => {
  const isMobile = useMediaQuery("(max-width: 450px)");

  return (
    <div
      className="section-title-container"
      style={{
        width: isMobile ? `${mobileWidth}px` : `${desktopWidth}px`,
        height: isMobile ? `${mobileHeight}px` : `${desktopHeight}px`,
        lineHeight: isMobile ? "35px" : "30px",
        fontSize: isMobile ? "18px" : "35px",
        letterSpacing: isMobile ? "1.25px" : "1.25px",
      }}
    >
      {title}
    </div>
  );
};
