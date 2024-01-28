import "./Legened.scss";

import React from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";

const Legend = () => {
  return (
    <section className="legend-section">
      <div className="legend-content-container">
        <div className="legend-title-container">
          <SectionTitle title={"THE MEANING OF OUR ICONS:"} />
        </div>
        <div className="icons-container">
          <div className="legend-item-container spicy-item-container">
            <img src="/src/assets/images/spicyIcon.svg" alt="spicy-icon" />
            <p className="item-description">Spicy</p>
          </div>
          <div className="legend-item-container vegetarian-item-container">
            <img
              src="/src/assets/images/vegetarianIcon.svg"
              alt="vegetarian-icon"
            />
            <p className="item-description">Vegetarian</p>
          </div>
          <div className="legend-item-container vegan-item-container">
            <img src="/src/assets/images/veganIcon.svg" alt="vegan-icon" />
            <p className="item-description">Vegan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legend;
