function cooking(...arr){
    let number = Number(arr[0]);
    
    for(let i = 1; i < arr.length; i++){
        let element = arr[i];
        if(element == 'chop'){
            number /=2;
        }else if(element == 'dice'){
            number = Math.sqrt(number);
        }else if(element == 'spice'){
            number++;
        }else if(element == 'bake'){
            number *= 3;
        }else if(element == 'fillet'){
            number *= 0.8;
        }
        console.log(number);
    }
}

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');