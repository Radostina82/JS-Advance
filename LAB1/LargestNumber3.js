function largestNumber(num1, num2, num3){
    let result = 0;
    if(num1 > num2 && num1 > num3){
        result = num1; //'The largest number is ${num1}.';
    }else if(num2 > num1 && num2 > num3){
        result = num2;// 'The largest number is ${num2}.';
    }else{
        result = num3; //'The largest number is ${num3}.';
    }
    console.log(`The largest number is ${result}.`);
}

largestNumber(-3, -5, -22.5);