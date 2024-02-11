const spiral = param1 => {
    const matrix = [];
  
    let [row, rowEnd, col, colEnd] = [0, param1 - 1, 0, param1 - 1];
  
    while (matrix.length < param1 ** 2) { 

      for (let i = col; i <= colEnd; i++) matrix.push(i + row * param1)
      row++
      
      for (let i = row; i <= rowEnd; i++) matrix.push(colEnd + i * param1)
      colEnd--

      for (let i = colEnd; i >= col; i--) matrix.push(i + rowEnd * param1)
      rowEnd--

      for (let i = rowEnd; i >= row; i--) matrix.push(col + i * param1)
      col++
    }

    console.log(matrix);
  }
spiral(5)  
spiral(6)
spiral(7)