import React from 'react';
import PropTypes from 'prop-types';

import styles from './boardelements.module.css';

function Cell({rowId, colId, name}) {
  const id = ((rowId+1) * 100 + colId +1);
  let pawn = null;
  const cellId = `${id}${name}Cell`;
  const pawnId = `${id}${name}Pawn`;
  if( name === 'board' || name==='nestHome')
    pawn = <div className={styles.pawn} id={pawnId} />;
  
  return(
    <div className={styles.cell} id={cellId} >
      {pawn}
    </div>
    
  );
}

Cell.defaultProps = {
  row: null,
  col: null,
  name: null,
};

Cell.propTypes = {
  row: PropTypes.number,
  col: PropTypes.number,
  name: PropTypes.string,
};


export default Cell;
