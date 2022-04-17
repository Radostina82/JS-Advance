function bigger(arr) {
    arr.sort((a, b) => a - b);
    const newArr = arr.splice(Math.floor(arr.length/2));
    return newArr;
}

bigger([3, 19, 14, 7, 2, 19, 6]);