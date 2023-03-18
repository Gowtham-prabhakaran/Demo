import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.home}>
      <h1 className={styles.title}>Welcome to My Portfolio</h1>
      <p className={styles.subtitle}>A place to showcase my work</p>
    </section>
  );
};

export default Home;
