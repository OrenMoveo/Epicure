import styles from "./AboutSection.module.scss";
import googlePlayIcon from "../../../assets/images/googlePlayIcon.svg";
import appleIcon from "../../../assets/images/appleIcon.svg";
import aboutSectionLogo from "../../../assets/images/aboutSectionLogo.svg";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { FC } from "react";
import AppStoreButton from "./AppStoreButton/AppStoreButton";

const AboutSection: FC = () => {
  return (
    <section className={styles.aboutUsSectionContainer}>
      <div className={styles.aboutUsContentContainer}>
        <div className={styles.aboutUsLogoContainer}>
          <img src={aboutSectionLogo} alt="about-us-logo" />
        </div>
        <div className={styles.aboutUsInformationContainer}>
          <div className={styles.appStoresContainer}>
            <AppStoreButton icon={googlePlayIcon} appStoreTitle={"Google Play"} appStoreDescription={"Get it on"} />
            <AppStoreButton icon={appleIcon} appStoreTitle={"App Store"} appStoreDescription={"Download on the"} />
          </div>
          <div className={styles.sectionTitleContainer}>
            <SectionTitle title={"ABOUT US:"} />
          </div>
          <div className={styles.aboutUsDescriptionsContainer}>
            <p className={styles.aboutUsDescriptionTopText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget blandit turpis suscipit
              at. Vestibulum sed massa in magna sodales porta. Vivamus elit urna, dignissim a vestibulum.
            </p>
            <p className={styles.aboutUsDescriptionBottomText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
