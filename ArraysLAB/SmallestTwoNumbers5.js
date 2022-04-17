function smallestTwoNumbers(arr){
    arr.sort((a,b)=> a-b);
    const arr1 = arr.slice(0,2);
    console.log(arr1.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);