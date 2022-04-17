function biggestElement(arr) {
    let bigElement = Number.MIN_VALUE;

    for (let row of arr) {
        for (let col of row) {
            if (col >= bigElement) {
                bigElement = col;
            }
        }
    }
 return bigElement;

}
console.log(biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
));
