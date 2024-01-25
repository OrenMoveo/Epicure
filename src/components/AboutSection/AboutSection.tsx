import React from "react";
import styles from "./AboutSection.module.scss";
import aboutSectionLogo from "../../assets/images/aboutSectionLogo.svg";
import googlePlayIcon from "../../assets/images/googlePlayIcon.svg";
import appleIcon from "../../assets/images/appleIcon.svg";

function AboutSection() {
  return (
    <section className={styles["about-us-section-container"]}>
      <div className={styles["about-us-content-container"]}>
        <div className={styles["about-us-logo-container"]}>
          <img src={aboutSectionLogo} alt="about-us-logo" />
        </div>
        <div className={styles["app-stores-container"]}>
          <div className={styles["google-play-store-container"]}>
            <img
              src={googlePlayIcon}
              alt="google-play-icon"
              className={styles["google-play-icon"]}
            />
            <div className={styles["apps-text-container"]}>
              <p className={styles["apps-top-text"]}>Get it on</p>
              <p className={styles["apps-bottom-text"]}>Google Play</p>
            </div>
          </div>
          <div className={styles["apple-store-container"]}>
            <img
              src={appleIcon}
              alt="apple-icon"
              className={styles["apple-icon"]}
            />
            <div className={styles["apps-text-container"]}>
              <p className={styles["apps-top-text"]}>Download on the</p>
              <p className={styles["apps-bottom-text"]}>App Store</p>
            </div>
          </div>
        </div>
        <div className={styles["would-be-replaced-with-header-component"]}>
          About Us:
        </div>
        <div className={styles["about-us-descriptions-container"]}>
          <p className={styles["about-us-description-top-text"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum non eu ipsum. Cras porta malesuada
            eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna
            sodales porta. Vivamus elit urna, dignissim a vestibulum.
          </p>
          <p className={styles["about-us-description-bottom-text"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
