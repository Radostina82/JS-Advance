/**
 * 
 * @param {array} arr 
 * @param {string} command 
 */
function sortArray(arr, command){

    if(command ==  'asc'){
        arr.sort((a,b)=>a-b);
    }else if(command == 'desc'){
        arr.sort((a,b)=> b-a);
    }

    return arr;
}

sortArray([14, 7, 17, 6, 8], 'desc');