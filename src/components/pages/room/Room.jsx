import React from 'react';
import { useNavigate } from 'react-router-dom';

import Board from '../../elements/board/Board';

import Main from '../../layouts/main/Main';
import styles from './style.module.css';


function Room() {
  const navigate = useNavigate();


  return (
    <>
      <Main>
        <div className={styles.room}>
          <div className={styles.boardDiv}>
            <Board />
          </div>



          
        </div>

        
      </Main> 
    </>
  );
}

export default Room;
