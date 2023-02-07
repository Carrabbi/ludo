import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../elements/header/Header';
import Footer from '../../elements/footer/Footer';


import styles from './style.module.css';

function Main({ children }) {
  return (
    <>
      <Header />
      <main className={`container ${styles.main}`}>{children}</main>
      <Footer />

    </>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
