import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../button/Button';

import styles from './boardelements.module.css';

function PlayerNest({nestColor, nestName}) {
  const colorBtn = '.' + nestColor + 'Btn';

  const handleSubmit1 = (event) => {
    event.preventDefault();

  };

  const handleSubmit2 = (event) => {
    event.preventDefault();

  };

  const handleSubmit3 = (event) => {
    event.preventDefault();

  };

  const handleSubmit4 = (event) => {
    event.preventDefault();

  };

  return (
    <div className={styles.nest}>
        <label className={styles.player}> {nestName}</label>
        <div className={styles.pawnsHome}>
          <div>
            <Button className={styles.pawnBtn} btnColor={colorBtn} btnType="submit" onSubmit={handleSubmit1} >
            <div className={styles.pawn}></div>
            </Button>
            <Button className={styles.pawnBtn} btnColor={colorBtn} btnType="submit" onSubmit={handleSubmit2} >
            <div className={styles.pawn}></div>
            </Button>
          </div>
          <div>
            <Button className={styles.pawnBtn} btnColor={colorBtn} btnType="submit" onSubmit={handleSubmit3} btnId='btnPawn' >
            <div className={styles.pawn}></div>
            </Button>
            <Button className={styles.pawnBtn} btnColor={colorBtn} btnType="submit" onSubmit={handleSubmit4} >
            <div className={styles.pawn}></div>
            </Button>    
          </div>
        </div>
    </div>
  );
}

PlayerNest.defaultProps = {
  nestColor: 'yellow',
  nestName: 'name',
};

PlayerNest.propTypes = {
  nestColor: PropTypes.string,
  nestName: PropTypes.string,
};



export default PlayerNest;
