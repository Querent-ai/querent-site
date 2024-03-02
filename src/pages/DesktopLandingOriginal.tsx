import { FunctionComponent } from "react";
import Topbar from "../components/Topbar";
import HeroSubtextText from "../components/HeroSubtextText";
import CTA from "../components/CTA";
import OurTeam from "../components/OurTeam";
import FrameComponent from "../components/FrameComponent";
import Bottom from "../components/Bottom";
import styles from "./DesktopLandingOriginal.module.css";

const DesktopLandingOriginal: FunctionComponent = () => {
  return (
    <div className={styles.desktopLandingOriginal}>
      <Topbar />
      <HeroSubtextText />
      <CTA />
      <OurTeam />
      <footer className={styles.footer} data-scroll-to="footer">
        <FrameComponent />
        <div className={styles.salesSoftwareFeatuContainer}>
          <p className={styles.features}>Features</p>
          <p className={styles.useCases}>Use Cases</p>
          <p className={styles.pricing}>Pricing</p>
          <p className={styles.api}>API</p>
        </div>
        <div className={styles.partnerProgramGetContainer}>
          <p className={styles.caseStudies}>Case Studies</p>
          <p className={styles.whitePapers}>White Papers</p>
          <p className={styles.community}>Community</p>
        </div>
        <div className={styles.aboutPricingJobsContainer}>
          <p className={styles.about}>About</p>
          <p className={styles.getOurNewsletter}>Get our newsletter</p>
          <p className={styles.contactSupport}>Contact Support</p>
        </div>
        <div className={styles.phone}>
          <div className={styles.div}>{`+123 456 789 `}</div>
          <img className={styles.icCallIcon} alt="" src="/ic-call.svg" />
          <div className={styles.phoneChild} />
        </div>
        <Bottom />
      </footer>
    </div>
  );
};

export default DesktopLandingOriginal;
