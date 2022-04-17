function sameNumber(number){
    let numberStr = number.toString();
    let sum = parseInt(numberStr[0]);
    let isSame = true;

    for(let i = 1; i < numberStr.length; i++){
        sum +=parseInt(numberStr[i]);
        
        if(numberStr[i] != numberStr[i-1]){
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}

sameNumber(1234);