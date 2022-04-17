function calorie(input) {
    const output = {};
    let food = '';
    
    for (let i = 0; i < input.length; i++) {
       
        if (i % 2 == 0) {
            food = input[i];
        }else{
            output[food] = Number(input[i]);
        }
    }
    console.log(output);
}

calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);