import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

import styles from './style.module.css';
import dice from '../../images/logo.png';

function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={`container ${styles.leftHeaderContainer}`}>
          <Link to="/">
            <img className={styles.logo} src={dice} alt="logo" />
          </Link>
          <Link to="/">
            <h1 className={styles.title}>Ludo</h1>
          </Link>
        </div>

        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link to="/">
                <Button>Home</Button>
              </Link>
              <Link to="/">
                <Button>Join Game</Button>
              </Link>
              <Link to="/newhost">
                <Button>Play Ludo</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
