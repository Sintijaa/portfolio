import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/" className={styles.navLink}>About Me</Link>
          </li>
          <li>
            <Link to="/work" className={styles.navLink}>Work</Link>
          </li>
          <li>
            <Link to="/projects" className={styles.navLink}>Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
