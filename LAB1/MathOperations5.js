function mathOperations(num1, num2, operant){
    let result = 0;
if(operant == '+'){
result = num1 + num2;
}else if(operant == '-'){
    result = num1 -num2;
}else if(operant== '*'){
    result = num1 * num2;
}else if(operant == '/'){
    result = num1 / num2;
}else if(operant == '%'){
    result = num1 % num2;
}else if(operant == '**'){
    result = num1 ** num2;
}
console.log(result);
}

mathOperations(3, 5.5, '*');