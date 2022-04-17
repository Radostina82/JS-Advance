function squareOfStars(count){
    if(count == ''){
count = 5;
    }
    
    for(let i = 1; i <=count; i++){
        let result = '';
        for(let j = 1; j<= count; j++){
           result += '* ';
        }
        console.log(result);
    }

}


squareOfStars(6)