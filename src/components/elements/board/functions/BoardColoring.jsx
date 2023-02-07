export const BoardColoring = () => {
  window.onload = coloring;

  function coloring() {
    try {
      let row = 0;
      let endRow = 12;
      let endCol = 12;
  
      for(row;row <= endRow; row+=1){
        let col = 0;
        for(col; col <= endCol; col+=1){
          let id = ((row+1) * 100 + col+1);
          const name = 'boardCell';
          let cellId = `${id}${name}`;
          let cell = document.getElementById(cellId);
  
        
          if (row <=4 && col <=4 )
            cell.style.visibility = 'hidden';
          
  
          if (row >=8 && col <=4 )
            cell.style.visibility = 'hidden';
          
  
          if (row <=4 && col >=8 )
            cell.style.visibility = 'hidden';
          
  
          if (row >=8 && col >=8 )
            cell.style.visibility = 'hidden';
          
          
          if ((row >= 5 && row <= 7) && (col >= 5 && col <= 7))
            cell.style.visibility = 'hidden';
          

          if (row === 4 && col === 4)
            cell.style.visibility = 'visible';

          if (row === 4 && col === 8)
            cell.style.visibility = 'visible';

          if (row === 8 && col === 4)
            cell.style.visibility = 'visible';

          if (row === 8 && col === 8)
            cell.style.visibility = 'visible';


            
          if (row === 6 && (col >= 1 && col <= 4))
            cell.style.background = 'var(--red-color)';

          if (row === 6 && (col >= 8 && col <= 11))
            cell.style.background = 'var(--green-color)';

          if (col === 6 && (row >= 1 && row <= 4))
            cell.style.background = 'var(--blue-color)';

          if (col === 6 && (row >= 8 && row <= 11))
            cell.style.background = 'var(--yellow-color)';


         
        }
      } 
  
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }

  }
}