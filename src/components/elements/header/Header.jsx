import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.css';
import dice from '../../images/logo.png';
import Button from '../button/Button';

function Header() {
  const hamName = 'hamburgerMenu';
  const navName = 'navigationMenuMobile';

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.leftHeaderContainer}>
          <Link to="/">
            <img className={styles.logo} src={dice} alt="logo" />
            <h1 className={styles.title}>Ludo</h1>
          </Link>
        </div>
        <div className={styles.rightHeaderContainer}>
          <div id={hamName}>
            {' '}
            <label htmlFor="checkboxHam">
              <input
                className={styles.checkbox}
                type="checkbox"
                id="checkboxHam"
              />

              <span className={styles.hamburgerMenu}>
                <span className={styles.hamburger} />
              </span>
            </label>
          </div>

          <nav className={styles.navigationMenuDesktop}>
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

          <nav className={styles.navigationMenuMobile} id={navName}>
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
      </div>
    </header>
  );
}

export default Header;
