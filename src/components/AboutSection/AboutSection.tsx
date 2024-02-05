import "./AboutSection.scss";
import googlePlayIcon from "../../assets/images/googlePlayIcon.svg";
import appleIcon from "../../assets/images/appleIcon.svg";
import aboutSectionLogo from "../../assets/images/aboutSectionLogo.svg";
import { SectionTitle } from "../SectionTitle/SectionTitle";
function AboutSection() {
  return (
    <section className="about-us-section-container">
      <div className="about-us-content-container">
        <div className="about-us-logo-container">
          <img src={aboutSectionLogo} alt="about-us-logo" />
        </div>
        <div className="about-us-information-container">
          <div className="app-stores-container">
            <button className="google-play-store-icon-container">
              <img
                src={googlePlayIcon}
                alt="google-play-icon"
                className="google-play-icon"
              />
              <div className="apps-text-container">
                <p className="apps-top-text">Get it on</p>
                <p className="apps-bottom-text">Google Play</p>
              </div>
            </button>
            <button className="apple-store-icon-container">
              <img src={appleIcon} alt="apple-icon" className="apple-icon" />
              <div className="apps-text-container">
                <p className="apps-top-text">Download on the</p>
                <p className="apps-bottom-text">App Store</p>
              </div>
            </button>
          </div>
          <div className="section-title-container">
            <SectionTitle title={"ABOUT US:"} />
          </div>
          <div className="about-us-descriptions-container">
            <p className="about-us-description-top-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
              lacus vel justo fermentum bibendum non eu ipsum. Cras porta
              malesuada eros, eget blandit turpis suscipit at. Vestibulum sed
              massa in magna sodales porta. Vivamus elit urna, dignissim a
              vestibulum.
            </p>
            <p className="about-us-description-bottom-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
              lacus vel justo fermentum bibendum no eu ipsum. Cras porta
              malesuada eros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
