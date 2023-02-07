import React, { useEffect, useState } from 'react';

import PlayerNest from './boardelements/PlayerNest';
import Cell from './boardelements/Cell';
import MatrixLudo  from './boardelements/MatrixLudo';
import Dice from './boardelements/Dice';

//  import {HideAfterClick} from '../../useeffects/HideAfterClick';
import { BoardColoring } from './functions/BoardColoring';

import styles from './board.module.css';

function Board() {
  const matrixBoard = MatrixLudo(12);
  const [massage, setMsg] = useState('');
  const [dice, setDice] = useState('Dice');

  document.addEventListener('load', (event) => {
    event.preventDefault();

    const centeredDiv = document.getElementById('centeredDiv');
    const msgDiv = document.getElementById('msgDiv');
    const startDiv = document.getElementById('startDiv');
    const diceDiv = document.getElementById('diceDiv');

  });

  let i = 0;

  useEffect(() => {

    if (i === 0) {
      centeredDiv.addEventListener('click', (event) => {
        event.preventDefault();
        startDiv.style.display = 'none';

        setTimeout(() => {
          setMsg('Good luck @(^_^)@ ');
        }
        , 500);

        setTimeout(() => {

          msgDiv.style.visibility = 'hidden';
        }
        , 2100);

        setTimeout(() => {
          diceDiv.style.visibility = 'visible';
          setDice(Dice(0));
        }
        , 2300);
        
      });
    } else {
      
    }



    i += 1;
  });


  return (
    <>
      <div className={styles.matrix} id="board">
        {matrixBoard.map((row, rowId) => {
          return (<div className={styles.row} id={`row${rowId+1}`} key={rowId+1}>
            {row.map((col, colId) => {
            return <Cell className={styles.cell} rowId={rowId} colId={colId} name='board' />;})}
        </div>)})}
        <div className={styles.leftup}>
          <PlayerNest nestColor="red" />
        </div>
        <div className={styles.rightup}>
          <PlayerNest nestColor="blue" />
        </div>
        <div className={styles.rightdown}>
          <PlayerNest nestColor="green" />
        </div>
        <div className={styles.leftdown}>
          <PlayerNest nestColor="yellow" />
        </div>
        <div className={styles.centeredDiv} id='centeredDiv'> 
          <div className={styles.start} id={'startDiv'}>
            Let's start
          </div>
          <div className={styles.msg} id='msgDiv'>
                {massage}
          </div>
          <div className={styles.dice} id='diceDiv'>
                {dice}
          </div>
        </div>
      </div>
    <BoardColoring />
    </>
  );
}

export default Board;
