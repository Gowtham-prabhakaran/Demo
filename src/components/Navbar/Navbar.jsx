// Navbar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            exact
            to="/"
            className={styles.navLink}
            activeClassName={styles.activeLink}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/about"
            className={styles.navLink}
            activeClassName={styles.activeLink}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/projects"
            className={styles.navLink}
            activeClassName={styles.activeLink}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/contact"
            className={styles.navLink}
            activeClassName={styles.activeLink}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
