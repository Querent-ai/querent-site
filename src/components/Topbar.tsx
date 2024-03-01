import { FunctionComponent, useCallback } from "react";
import styles from "./Topbar.module.css";

const Topbar: FunctionComponent = () => {
  const onProductText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='servicesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onDocumentationTextClick = useCallback(() => {
    window.open("http://docs.querent.xyz/docs/overview/introduction");
  }, []);

  const onCompanyText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='ourTeam']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGetStartedTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='cTA']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header className={styles.topbar}>
      <div className={styles.base} />
      <img
        className={styles.qlogoIcon}
        loading="lazy"
        alt=""
        src="/qlogo@2x.png"
      />
      <div className={styles.productDocumentationFrame}>
        <div className={styles.cTAContactFrame}>
          <div className={styles.product} onClick={onProductText1Click}>
            Product
          </div>
          <div
            className={styles.documentation}
            onClick={onDocumentationTextClick}
          >
            Documentation
          </div>
          <div className={styles.company} onClick={onCompanyText1Click}>
            Company
          </div>
          <div className={styles.getStarted} onClick={onGetStartedTextClick}>
            Get Started
          </div>
          <div className={styles.contact} onClick={onContactTextClick}>
            Contact
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
