function diagonalSum(matrix) {
    const size = matrix.length;
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        firstDiagonal += matrix[i][i];
        secondDiagonal += matrix[i][size - i - 1];
    }
    console.log(firstDiagonal + ' ' + secondDiagonal);
}

diagonalSum([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
);