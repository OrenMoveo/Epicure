import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <section className="footer-container">
      <div className="buttons-container">
        <button className="contact-us-button" name="contact-us-button">
          Contact Us
        </button>
        <button className="term-of-use-button" name="term-of-use-button">
          Term Of Use
        </button>
        <button className="privacy-policy-button" name="privacy-policy-button">
          Privacy Policy
        </button>
      </div>
    </section>
  );
}

export default Footer;
