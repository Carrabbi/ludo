import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.css';
import dice from '../../images/logo.png';
import Button from '../button/Button';

import  {HamburgerListener} from '../../useeffects/HamburgerListener';

function Header() {
  const hamName = 'hamburgerMenu';
  const navName = 'navigationMenuMobile';

  
  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <Link to="/">
            <img className={styles.logo} src={dice} alt="logo" />
            <h1 className={styles.title}>Ludo</h1>
          </Link>

            <div className={styles.hamburger} id={hamName} >
              <div />
            </div>


          <nav className={styles.navigationMenuDesktop}>
            <ul>
              <li>
                <Link to="/">
                  <Button>Home</Button>
                </Link>
                <Link to="/playludo">
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
                <Link to="/playludo">
                  <Button>Play Ludo</Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* headerContainer */}
      </header>
      <HamburgerListener />
    </>

  );
}

export default Header;
