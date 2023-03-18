import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.description}>
        I am a web developer based in [City, Country]. I have a passion for
        building responsive and interactive web applications.
      </p>
    </section>
  );
};

export default About;
