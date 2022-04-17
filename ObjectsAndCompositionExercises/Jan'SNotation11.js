function janNotation(arr){
let result = [];
if(arr.length == 1 || arr.length == 2){
    console.log('Error: not enough operands!');
}else{
    for(let i=0; i< arr.length; i++){
        if(Number(arr[i])){
            result.push(arr[i]);
        }else{
            operation(result, arr[i]);
        }
    }
}
function operation(number, operator){
    if(result.length < 2){
        console.log('Error: not enough operands!');
    }
    let first = result.pop();
        let second = result.pop();
    if(operator === '+'){
        result.push(second + first);
    }else if(operator === '-'){
        result.push(second - first);
    }else if(operator === '*'){
        result.push(second * first);
    }else if(operator === '/'){
        result.push(second / first);
    }

}
if(result.length >= 2){

    console.log( "Error: too many operands!");
}else if(result.length==1){
    console.log(result.toString());
}

}

janNotation([-1,
    1,
    '+',
    101,
    '*',
    18,
     '+',
    3,
    '/']  
   );