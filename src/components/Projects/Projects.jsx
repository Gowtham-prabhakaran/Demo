import React from 'react';
import styles from './Projects.module.css';
import Project from './Project/Project';
import projectData from '../../data/projects';

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectList}>
        {projectData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
