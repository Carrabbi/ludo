import React from 'react';
import logo from '../../images/logo.png';
import Main from '../../layouts/main/Main';

import styles from './style.module.css';

import ludo from '../../images/ludo.png';

function Home() {


  return (
    <Main>
        <img src={ludo} className={styles.ludo} alt="Ludo" />

    </Main>
  );
}

export default Home;
