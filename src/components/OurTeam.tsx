import { FunctionComponent } from "react";
import styles from "./OurTeam.module.css";

const OurTeam: FunctionComponent = () => {
  return (
    <section className={styles.ourTeam} data-scroll-to="ourTeam">
      <div className={styles.tag}>
        <b className={styles.ourTeam1}>About us</b>
      </div>
      <h1 className={styles.teamTitle}>Meet our amazing team</h1>
      <div className={styles.mission}>
        Querent is an engineering research company building scalable business
        intelligence systems for information retrieval and insight generation
        using deep neural networks.
      </div>
      <div className={styles.teamMembers}>
        <div className={styles.team1}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image@2x.png"
          />
          <div className={styles.puneet}>
            <p className={styles.puneetSaraswat}>
              <b><a href="https://www.linkedin.com/in/psaraswat10074" target="_blank">Puneet Saraswat</a></b>
            </p>
            <p className={styles.founderCeo}>{`Founder & CEO`}</p>
          </div>
        </div>
        <div className={styles.team2}>
          <img className={styles.imageIcon1} alt="" src="/image-1@2x.png" />
          <div className={styles.audrey}>
            <p className={styles.audreyCisneros}>
              <b><a href="https://linkedin.com/in/audrey-cisneros" target="_blank">{`Audrey Cisneros `}</a></b>
            </p>
            <p className={styles.coo}>COO</p>
          </div>
        </div>
        <div className={styles.team3}>
          <img className={styles.imageIcon2} alt="" src="/image-2@2x.png" />
          <div className={styles.nishant}>
            <p className={styles.nishantGupta}>
              <b><a href="https://www.linkedin.com/in/nishant-gupta-data" target="_blank">{`Nishant Gupta `}</a></b>
            </p>
            <p className={styles.aiArchitect}>AI Architect</p>
          </div>
        </div>
        <div className={styles.team4}>
          <img className={styles.imageIcon3} alt="" src="/image-3@2x.png" />
          <div className={styles.ansh}>
            <p className={styles.anshJoshi}>
              <b><a href="https://www.linkedin.com/in/ansh-joshi-626bb8184" target="_blank">{`Ansh Joshi `}</a></b>
            </p>
            <p className={styles.fullStackDeveloper}>Full Stack Developer</p>
          </div>
        </div>
      </div>
      <div className={styles.values}>
        <h1 className={styles.valuesTitle}>Our Values</h1>
        <div className={styles.responsibleAi}>
          <p className={styles.safeResponsible}>{`Safe & Responsible AI`}</p>
          <ul className={styles.weArePrivacyFocusedOurPr}>
            <li className={styles.weArePrivacy}>We are privacy focused.</li>
            <li className={styles.ourProductsAre}>
              Our products are uncompromisingly secure.
            </li>
            <li>We create unbiased modeling.</li>
          </ul>
        </div>
        <div className={styles.collaborativeInnovation}>
          <p className={styles.collaborativeInnovation1}>
            Collaborative innovation
          </p>
          <ul className={styles.weAreResearchersFirstWeF}>
            <li className={styles.weAreResearchers}>
              We are researchers first.
            </li>
            <li className={styles.weForgeSustainable}>
              We forge sustainable partnerships.
            </li>
            <li>We build asynchronous scalable systems.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
