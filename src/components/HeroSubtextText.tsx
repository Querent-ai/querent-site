import { FunctionComponent, useCallback } from "react";
import Feature from "./Feature";
import styles from "./HeroSubtextText.module.css";

const HeroSubtextText: FunctionComponent = () => {
  const onHeroCTAButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='servicesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={styles.heroSubtextText}>
      <div className={styles.hero}>
        <h1 className={styles.heroTagline}>
          Unlock hidden insights to empower the next generation of discovery.
        </h1>
        <div className={styles.heroSubtext}>
          At Querent we build solutions to harness the power of big data and
          create for the future digital economy.
        </div>
        <div className={styles.heroCtaButton} onClick={onHeroCTAButtonClick}>
          <b className={styles.explore}>Explore Features</b>
          <div className={styles.rectangle} />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
      <div className={styles.services} data-scroll-to="servicesContainer">
        <div className={styles.serviceTag}>
          <b className={styles.services1}>What we do</b>
        </div>
        <h1 className={styles.exploreOurAmazing}>
          Explore our semantic graph computing platform
        </h1>
        <div className={styles.weAreSelfService}>
          Tailored for data scientists and researchers, our platform seamlessly
          integrates real-time and historical data, training advanced AI and
          machine learning models.
        </div>
        <div className={styles.teamMemberImages}>
          <Feature
            featureGroup="/vector-1.svg"
            tag1="Enterprise knowledge"
            featureGroup1="Enhanced extraction and semantic search, enabling organizations to uncover valuable patterns and trends"
          />
          <Feature
            featureGroup="/vector-2.svg"
            tag1="Deep learning"
            featureGroup1="Strategic combination of AI and ML for state-of-the-art information retrieval and insight generation"
          />
          <Feature
            featureGroup="/vector-3.svg"
            tag1="Multi-modal datasets "
            featureGroup1="Organize, connect, and derive valuable insights from vast amounts of heterogeneous data sources"
          />
          <Feature
            featureGroup="/vector-4.svg"
            tag1="Scalable architecture"
            featureGroup1="High-performance processing systems designed to handle complex computational tasks efficiently"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSubtextText;
