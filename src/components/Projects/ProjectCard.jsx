
import React from "react";
import styles from "./ProjectCard.module.css";

// Import project images
import quizImg from "../../assets/projects/quiz.png";
import dashboardImg from "../../assets/projects/dashboard.png";
import aiImg from "../../assets/projects/ai.png";

// Map JSON imageSrc values to imported images
const imageMap = {
  "projects/quiz.png": quizImg,
  "projects/dashboard.png": dashboardImg,
  "projects/ai.png": aiImg
};

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const image = imageMap[imageSrc];

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={`Image of ${title}`}
          className={styles.image}
        />
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Live Demo
        </a>
        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

