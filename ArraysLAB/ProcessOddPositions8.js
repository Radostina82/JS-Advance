function oddPositions(arr) {
    /* let newArr = [];
 
     for (let i = 1; i < arr.length; i += 2) {
         newArr[newArr.length] = arr[i] * 2;
     }
 
     newArr.reverse();
  return newArr.join(" ");*/
  return  arr.filter((a, i) => i % 2 !== 0).map(x => x * 2).reverse().join(' ');
}

console.log(oddPositions([3, 0, 10, 4, 7, 3]));