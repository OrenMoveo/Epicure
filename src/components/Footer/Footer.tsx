import styles from "./Footer.module.scss";

function Footer() {
  return (
    <section className={styles.footerLayout}>
      <div className={styles.footerContainer}>
        <div className={styles.buttonsContainer}>
          <button className={styles.footerBtn} name="contact-us-button">
            Contact Us
          </button>
          <button className={styles.footerBtn} name="term-of-use-button">
            Term Of Use
          </button>
          <button className={styles.footerBtn} name="privacy-policy-button">
            Privacy Policy
          </button>
        </div>
      </div>
    </section>
  );
}

export default Footer;
