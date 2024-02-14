export const mobileStyles = {
  cardImage: { display: "none" },
  cardWith: { width: "100%" },
  cardContentLayout: {
    backgroundColor: "white",
    height: "auto",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  cardTitle: {
    paddingBottom: "6px",
    lineHeight: "26px",
  },
  cardDescription: { lineHeight: "18px", width: "318px" },
  shouldDisplayFoodIcon: false,
  dishPriceContainer: { display: "none" },
};

export const desktopStyles = {
  cardImage: { display: "none" },
  cardWith: { width: "100%" },
  cardContentContainer: {
    gap: "14px",
    paddingTop: "0",
  },
  cardContentLayout: {
    backgroundColor: "white",
    width: "232px",
    height: "unset",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    width: "unset",
    fontSize: "32px",
    fontWeight: "400",
    lineHeight: "26px",
    letterSpacing: "2.6700000762939453px",
    order: "-2",
  },
  cardDescription: {
    width: "unset",
    height: "unset",
    gap: "14px",
    fontSize: "13px",
    lineHeight: "18px",
    letterSpacing: "1.9700000286102295px",
    order: "-1",
    paddingBottom: "0",
  },
  dishPriceContainer: { order: "1", gap: "12px" },
  dishPriceTextStyling: {
    fontSize: "24px",
    fontWeight: "400",
    lineHeight: "30px",
    letterSpacing: "1.0299999713897705px",
  },
  lineStyling: { width: "83.5px" },
};
