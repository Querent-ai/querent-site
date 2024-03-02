import { FunctionComponent } from "react";
import styles from "./CTA.module.css";

const CTA: FunctionComponent = () => {
  return (
    <section className={styles.cta} data-scroll-to="cTA">
      <div className={styles.cTAText}>
        <h1 className={styles.ctaTagline}>Ready to see what Querent can do?</h1>
        <div className={styles.ctaText}>
          {" "}
          Sign up to learn more about our innovative framework.
        </div>
        <div className={styles.formField}>
          <div className={styles.teamTag}>
            <div className={styles.enterYourEmail}>Enter your email</div>
          </div>
          <div className={styles.imageContainer}>
            <b className={styles.signUp}>Sign Up</b>
          </div>
        </div>
      </div>
      <div className={styles.footerFrame}>
        <img
          className={styles.ctaImageIcon}
          loading="lazy"
          alt=""
          src="/cta-image@2x.png"
        />
      </div>
    </section>
  );
};

export default CTA;
