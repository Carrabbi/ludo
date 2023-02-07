
function MatrixLudo(dim){
  let myMatrix = [];

  let row = 0;
  let endRow = dim;
  let endCol = dim;

  for(row;row <= endRow; row+=1){
    let array = []
    let col = 0;
    for(col; col <= endCol; col+=1){
      array[col] = 1;
    }
    myMatrix[row] = array;
  } 
  return myMatrix;
}

export default MatrixLudo;