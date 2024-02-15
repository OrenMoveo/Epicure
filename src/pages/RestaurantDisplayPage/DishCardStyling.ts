import { CSSProperties } from "react";

export const desktopStyling = {
  dishCardWidth: { width: 272 },
  dishImage: {
    width: 272,
    height: 173.23,
  },
  dishContentLayout: {
    width: 272,
    height: 241,
    gap: 8,
  },
  lineWidth: { width: 82.5 },
  priceContainerGap: { gap: 12 },
};

export const mobileStyling = {
  dishCardWidth: { width: 335 },
  dishImage: {
    width: 335,
    height: 211.9,
  },
  dishContentLayout: {
    height: 168,
  },
  lineWidth: { width: 256 },
  priceContainerGap: { gap: 12 },
  priceTextContainerStyling: {
    gap: 2,
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "30px",
    letterSpacing: "1.9700000286102295px",
  },
  currencyIconSize: {
    width: 8,
    height: 19,
  },
};

export const desktopDishTitleStyling: CSSProperties = {
  width: "auto",
  fontSize: "24px",
  fontWeight: "400",
  lineHeight: "26px",
  letterSpacing: "2.6700000762939453px",
  textAlign: "center",
};

export const desktopDishDescriptionStyling: CSSProperties = {
  width: "auto",
  fontSize: "20px",
  fontWeight: "200",
  lineHeight: "24px",
  letterSpacing: "1.9700000286102295px",
  textAlign: "center",
  padding: "0px 25px",
};
export const desktopDishPriceStyling: CSSProperties = {
  width: "auto",
  fontSize: "20px",
  fontWeight: "400",
  lineHeight: "30px",
  letterSpacing: "1.9700000286102295px",
  textAlign: "center",
};

export const CurrencyIconSize: CSSProperties = {
  width: "9px",
  height: "19px",
};
