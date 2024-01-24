import React from "react";
import "./AboutSection.scss";

function AboutSection() {
  return (
    <section className="about-us-section-container">
      <div className="about-us-content-container">
        <div className="about-us-logo-container">
          <img
            src="/src/assets/images/about-section-logo.svg"
            alt="about-us-logo"
          />
        </div>
        <div className="app-stores-container">
          <div className="google-play-store-container">
            <img
              src="/src/assets/images/google play icon.svg"
              alt="google-play-icon"
              className="google-play-icon"
            />
            <div className="apps-text-container">
              <p className="apps-top-text">Get it on</p>
              <p className="apps-bottom-text">Google Play</p>
            </div>
          </div>
          <div className="apple-store-container">
            <img
              src="/src/assets/images/apple icon.svg"
              alt="apple-icon"
              className="apple-icon"
            />
            <div className="apps-text-container">
              <p className="apps-top-text">Download on the</p>
              <p className="apps-bottom-text">App Store</p>
            </div>
          </div>
        </div>
        <div className="would-be-replaced-with-header-component">About Us:</div>
        <div className="about-us-descriptions-container">
          <p className="about-us-description-top-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum non eu ipsum. Cras porta malesuada
            eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna
            sodales porta. Vivamus elit urna, dignissim a vestibulum.
          </p>
          <p className="about-us-description-bottom-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
