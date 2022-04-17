function townsToJOSON(arr){
const result = [];
let table = arr[0].split('|');
const town = table[1].trim();
const latitude = table[2].trim();
const longitude = table[3].trim();

for(let i = 1; i < arr.length; i++){
    const towns = {};
    let data = arr[i].split('|');
    let currentTown = data[1].trim();
    let currentLat = Number(data[2].trim()).toFixed(2);
    let currentLong = Number(data[3].trim()).toFixed(2);
   towns[town] = currentTown;
   towns[latitude] = currentLat;
   towns[longitude] = currentLong;
   let townsJOSON = JSON.stringify(towns, function(key, value){
       if(key == 'Latitude'){
           return Number(value);
       }else if(key == 'Longitude'){
           return Number(value);
       }else{
           return value;
       }
   }); 
    result.push(townsJOSON);
}
return '['+ result.join(',') +']';
}

console.log(townsToJOSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));