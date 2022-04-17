

function solve(matrix) {
    let magicSum = Number.MIN_SAFE_INTEGER;
    let isTrue = true;
    for (let row of matrix) {
        let sum = 0;
        for (let col of row) {
            sum += col;
        }
        if (magicSum == Number.MIN_SAFE_INTEGER) {
            magicSum = sum;
        }
        if (sum != magicSum) {
            isTrue = false;
            break;
        }
    }
    console.log(isTrue);   
}
solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]     
);