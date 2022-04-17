function solve(arr, number) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += number) {
        newArr[newArr.length] = arr[i];
    }
    return newArr;
}

solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
);