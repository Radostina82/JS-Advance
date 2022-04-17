function firsLast(arr){
let firs = Number(arr[0]);
let last = Number(arr[arr.length -1]);
return firs + last;
}

console.log(firsLast(['5', '10']));