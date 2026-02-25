import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Currently seeking entry-level opportunities in Pune & Remote</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:omkardalvi242003@gmail.com">omkardalvi242003@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://linkedin.com/in/omkar-dalvi-5ba0a4290" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/omkar-dalvi
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/omkardalvi21" target="_blank" rel="noopener noreferrer">
            github.com/omkardalvi21
          </a>
        </li>
      </ul>
    </footer>
  );
};