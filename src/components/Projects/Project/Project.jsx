import React from 'react';
import styles from './Project.module.css';

const Project = ({ project }) => {
  return (
    <div className={styles.project}>
      <div className={styles.projectImgContainer}>
        <img
          src={project.imgSrc}
          alt={project.title}
          className={styles.projectImg}
        />
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.projectLinks}>
          <a
            href={project.demoUrl}
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            href={project.codeUrl}
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
