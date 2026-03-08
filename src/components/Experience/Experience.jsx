
import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

// Import all images from assets folder
const images = import.meta.glob("../../assets/**/*", { eager: true });

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.content}>
        
        {/* Skills */}
        <div className={styles.skillsContainer}>
          <div className={styles.skillsMarquee}>
            {[...skills, ...skills].map((skill, id) => {
              const imagePath = `../../assets/${skill.imageSrc}`;
              const imageUrl = images[imagePath]?.default;

              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={imageUrl} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience History */}
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            const imagePath = `../../assets/${historyItem.imageSrc}`;
            const logoUrl = images[imagePath]?.default;

            return (
              <li key={id} className={styles.historyItem}>
                <img src={logoUrl} alt={historyItem.organisation} />

                <div className={styles.historyItemDetails}>
                  <h3>
                    {historyItem.role}, {historyItem.organisation}
                  </h3>
                  <p>
                    {historyItem.startDate} - {historyItem.endDate}
                  </p>

                  <ul>
                    {historyItem.experiences.map((exp, index) => (
                      <li key={index}>{exp}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
};

