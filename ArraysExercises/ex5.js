function solve(arr){
    let biggest = Number.MIN_SAFE_INTEGER;
    const result = [];
/*const result = arr.filter((el)=> {
    if(el>biggest){
        biggest = el;
        return true;
    }else{
        return false;
    }
});*/
    arr.reduce((accomulated, current) => {
        if(current > biggest){
            biggest = current;
            accomulated.push(current);
        }
        return accomulated;
    }, result);

return result;
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );