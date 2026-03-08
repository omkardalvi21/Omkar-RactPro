import React from "react";
import styles from "./About.module.css";

import aboutImage from "../../assets/about/aboutImage.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import cloudIcon from "../../assets/skills/cloud-wifi.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Expertise</h2>

      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Technical illustration"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Code icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Engineering</h3>
              <p>
                Specialized in building robust backends with <strong>Django & MySQL</strong> and
                dynamic frontends with <strong>React</strong>.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Data icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Science & Analytics</h3>
              <p>
                Certified specialist leveraging <strong>Python & Power BI</strong> to transform
                raw metrics into interactive real-time dashboards.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={cloudIcon} alt="Cloud icon" />
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

