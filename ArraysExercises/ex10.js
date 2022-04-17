function solve(arr){
    const playField = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let firstPlayer = 'X';
    let secondPlayer = 'O';

    for(let i = 0; i < arr.length; i++){
        const[x,y] = arr[i].split(' ').map(el => parseInt(el));

        if(playField[x][y]){
            console.log("This place is already taken. Please choose another!");
        }else{
            
        }
    }
}