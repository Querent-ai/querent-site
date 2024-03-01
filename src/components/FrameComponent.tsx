import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  const onDocsTextClick = useCallback(() => {
    window.open("http://docs.querent.xyz/docs/overview/introduction");
  }, []);

  return (
    <div className={styles.baseParent}>
      <div className={styles.base} />
      <div className={styles.logoInstance}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
        <div className={styles.contactemailWrapper}>
          <div className={styles.contactemail}>
            <div className={styles.footerText}>
              We build comprehensive business intelligence solutions, leveraging
              big data through advanced insight generation.
            </div>
            <div className={styles.icMailParent}>
              <img
                className={styles.icMailIcon}
                loading="lazy"
                alt=""
                src="/ic-mail@2x.png"
              />
              <div className={styles.contactEmail}>contact@querent.xyz</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productWrapper}>
        <b className={styles.product}>Product</b>
      </div>
      <div className={styles.docsCompanyFrameWrapper}>
        <div className={styles.docsCompanyFrame}>
          <b className={styles.docs} onClick={onDocsTextClick}>
            Documentation
          </b>
          <b className={styles.company}>Company</b>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
