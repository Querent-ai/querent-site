import { FunctionComponent } from "react";
import styles from "./Feature.module.css";

export type FeatureType = {
  featureGroup?: string;
  tag1?: string;
  featureGroup1?: string;
};

const Feature: FunctionComponent<FeatureType> = ({
  featureGroup,
  tag1,
  featureGroup1,
}) => {
  return (
    <div className={styles.feature1}>
      <img className={styles.featureGroupIcon} alt="" src={featureGroup} />
      <div className={styles.line} />
      <h2 className={styles.tag1}>{tag1}</h2>
      <div className={styles.featureGroup}>{featureGroup1}</div>
    </div>
  );
};

export default Feature;
