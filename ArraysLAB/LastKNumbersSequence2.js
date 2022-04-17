function senquence(num1, num2){
    let arr = [1];
    while(arr.length != num1){
        let element = 0;
       for(let i = arr.length - num2; i < arr.length; i++){
           
           if(i >= 0){
            element += arr[i];
           }
               
       }
       arr[arr.length] = element;
    }

    let result = `[${arr.join(", ")}]`;
    return result;
    
}

console.log(senquence(8, 2));
