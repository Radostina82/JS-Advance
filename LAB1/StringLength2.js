function stringLength(str1, str2, str3){
    let sum = str1.length + str2.length + str3.length;
    let averageLength = Math.round(sum/3);
    console.log(sum);
    console.log(averageLength);
}

stringLength('pasta', '5', '22.3');