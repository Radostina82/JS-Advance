    function agregateElements(input){
        let arr = input.map(Number);
        let sum = 0;
        let inversSum = 0;
        let strSum = '';
        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
            inversSum += 1 / arr[i];
            strSum += arr[i];
        }
        console.log(sum);
        console.log(inversSum);
        console.log(strSum);
    }

    agregateElements([2, 4, 8, 16]);