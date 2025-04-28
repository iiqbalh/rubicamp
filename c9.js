const spiral = param1 => {
    
    const matrix = [];

    let [row, rowEnd, col, colEnd] = [0, param1 - 1, 0, param1 - 1];

    while (matrix.length < param1 ** 2) {

        for (let i = col; i <= colEnd; i++) matrix.push(i + row * param1)
        row++;

        for (let i = row; i <= rowEnd; i++) matrix.push(colEnd + i * param1)
        colEnd--;

        for (let i = colEnd; i >= col; i--) matrix.push(i + rowEnd * param1)
        rowEnd--;

        for (let i = rowEnd; i >= row; i--) matrix.push(col + i * param1)
        col++;
    }

    console.log(matrix);


















    // const arr = Array.from({ length: n }, () => []);
    // let row = 0;
    // let col = 0;
    // let rowEnd = n - 1;
    // let colEnd = n - 1;
    // let counter = 0;
    // while (col <= colEnd && row <= rowEnd) {

    //     // Top row & middle value (Where col === colEnd && row === rowEnd)
    //     for (let i = col; i <= colEnd; i++) {
    //         arr[row][i] = counter;
    //         counter++;
    //     }
    //     row++;

    //     // end column
    //     for (let i = row; i <= rowEnd; i++) {
    //         arr[i][colEnd] = counter;
    //         counter++;
    //     }
    //     colEnd--;

    //     // end row
    //     for (let i = colEnd; i >= col; i--) {
    //         arr[rowEnd][i] = counter;
    //         counter++;
    //     }
    //     rowEnd--;

    //     // First col from end
    //     for (let i = rowEnd; i >= row; i--) {
    //         arr[i][col] = counter;
    //         counter++;
    //     }
    //     col++;
    // }
    // console.log(arr);
}

spiral(5);
// spiral(6);
// spiral(7);