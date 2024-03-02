import { FunctionComponent, useCallback } from "react";
import styles from "./Bottom.module.css";

const Bottom: FunctionComponent = () => {
  const onLinkedinIconClick = useCallback(() => {
    window.open("https://www.linkedin.com/company/querent-ai");
  }, []);

  const onGithubIconClick = useCallback(() => {
    window.open("https://github.com/Querent-ai");
  }, []);

  const onDiscordIconClick = useCallback(() => {
    window.open("https://discord.gg/3fVAVmZXyh");
  }, []);

  return (
    <div className={styles.bottom}>
      <div className={styles.base} />
      <div className={styles.line} />
      <div className={styles.greyBackground}>
        <div className={styles.productText}>
          <div className={styles.termsAndServices}>
            <div className={styles.copyright2022}>
              Copyright © 2024 Querent. All Rights Reserved.
            </div>
          </div>
          <div className={styles.privacyPolicyLink}>
            <div className={styles.gitHubLink}>
              <div className={styles.termsOfService}>Terms of Service</div>
            </div>
            <div className={styles.footerContent}>
              <div className={styles.termsSection}>
                <div className={styles.privacyPolicy}>Privacy Policy</div>
                <div className={styles.cookies}>Cookies</div>
              </div>
            </div>
            <div className={styles.socialMediaLinks}>
              <img
                className={styles.linkedinIcon}
                loading="lazy"
                alt=""
                src="/linkedin.svg"
                onClick={onLinkedinIconClick}
              />
              <img
                className={styles.githubIcon}
                loading="lazy"
                alt=""
                src="/github.svg"
                onClick={onGithubIconClick}
              />
              <img
                className={styles.discordIcon}
                alt=""
                src="/discord.svg"
                onClick={onDiscordIconClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
