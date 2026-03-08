import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/heroImage.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Omkar Dalvi</h1>
        <h2 className={styles.subtitle}>Computer Engineer & Data Scientist</h2>

        <p className={styles.description}>
          Engineering graduate from <strong>Mumbai University (CGPA 7.5)</strong> with a focus on
          scalable Full-Stack solutions and Data Analytics.
        </p>

        <div className={styles.btnContainer}>
          <a href="mailto:omkardalvi242003@gmail.com" className={styles.contactBtn}>
            Get In Touch
          </a>

          <a
            href={`${import.meta.env.BASE_URL}OmkarDalvi_Resume.pdf`}
            download="Omkar_Dalvi_Resume.pdf"
            className={`${styles.contactBtn} ${styles.resumeBtn}`}
          >
            Download CV
          </a>
        </div>
      </div>

      <div className={styles.imgWrapper}>
        <img src={heroImage} alt="Omkar Dalvi" className={styles.heroImg} />
      </div>
    </section>
  );
};