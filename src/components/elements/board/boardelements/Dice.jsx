import MatrixLudo from './MatrixLudo';

import styles from './boardelements.module.css';

function Dice({number}) {
  const matrixDice = MatrixLudo(2);
  let isRolled = true;
  if (number == 0){
    isRolled = false;
  }

  
  return (<>
  {
    isRolled ? 
      'yes' 
      :
      'no'
    }</>
  );
}

export default Dice;