function carFactory(input) {
    const engines = {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 }
    };
    const carriage = {
        Hatchback: {type: 'hatchback', color: null },
        Coupe: {type: 'coupe', color: null }
    };
    const result = {};
    result.model = input["model"];

    if(input.power <= 90){
        result.engine = engines["Small engine"]; 
    }else if(input.power > 90 && input.power <=120){
        result.engine = engines["Normal engine"]; 
    }else {
        result.engine = engines["Monster engine"]; 
    }
    if(input.carriage == 'hatchback'){
        result.carriage = carriage["Hatchback"];
        result.carriage.color = input.color; 
    }else if(input.carriage == 'coupe'){
        result.carriage = carriage["Coupe"];
        result.carriage.color= input.color; 
    }
    if(input.wheelsize % 2 == 0){
        let wheel = input.wheelsize - 1;
        result.wheels  = [wheel, wheel, wheel, wheel];
    }else{
        result.wheels  = [input.wheelsize, input.wheelsize, input.wheelsize, input.wheelsize];
    }
    return result;
}

console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));