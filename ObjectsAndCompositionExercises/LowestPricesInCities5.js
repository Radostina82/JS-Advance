function lowerPrice(arr){
    const result = {};
    for(let element of arr){
        let token = element.split(' | ');
        let town = token[0];
        let product = token[1];
       let price = Number(token[2]);
        if(result[product]){
            if(result[product].price > price){
                result[product].price = price;
                result[product].town  = town;
            }
        }else{
            result[product] = {price, town};
        }
       
    }
    const arr1 = Object.entries(result)
    for(let entry of arr1 ){
        //Sample Product -> 1000 (Sample Town)
        let obj = entry[1];
        console.log(`${entry[0]} -> ${obj.price} (${obj.town})`);
    }
}

lowerPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10','New York | Sample Product | 10']
)