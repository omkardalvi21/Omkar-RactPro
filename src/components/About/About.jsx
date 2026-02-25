import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Expertise</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Technical illustration"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Code icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Engineering</h3>
              <p>
                Specialized in building robust backends with <strong>Django & MySQL</strong> and 
                dynamic frontends with <strong>React</strong>.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Data icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Science & Analytics</h3>
              <p>
                Certified specialist leveraging <strong>Python & Power BI</strong> to transform 
                raw metrics into interactive real-time dashboards.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/cloud-wifi.png")} alt="Cloud icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud & AI Foundations</h3>
              <p>
                Hands-on experience from <strong>Microsoft</strong> in implementing 
                Responsible AI practices and cloud-native services.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};