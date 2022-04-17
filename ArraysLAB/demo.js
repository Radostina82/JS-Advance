/*let nums = [1, 3, 4, 5, 6];
nums.splice(1, 0, 2); // inserts at index 1
console.log(nums);*/

/*const arr = [30, 15, 50, 5];
arr.sort((a, b) => a-b);
console.log(arr);
const arr1 = arr.splice(0, 2);
console.log(arr1);*/

let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
let citrus = fruits.slice(1, 3);
let fruitsCopy = fruits.slice();

console.log(citrus);
console.log(fruitsCopy);