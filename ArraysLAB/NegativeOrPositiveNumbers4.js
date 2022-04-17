function negativPositive(arr) {
    /* let zeroArr = [];
     let arr1 = [];
     for(let i = 0; i < arr.length; i++){
         if(arr[i] == 0){
         zeroArr[zeroArr.length] = arr[i];
         }else{
         arr1[arr1.length] = arr[i];
         }
     }
     arr1.sort();
     let newArr = arr1.concat(zeroArr);
    for(let num of newArr){
        console.log(num);
    }*/
    const result = [];

    for (let num of arr) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }

    }
    for (let num of result) {
        console.log(num);
    }
}

negativPositive([3, -2, 0, -1]);
