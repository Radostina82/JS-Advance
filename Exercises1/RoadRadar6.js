function roadRadar(speed, area){
    let speedInNumber = Number(speed);
    let result = '';
    let speedLimit = 0;
    let difference = 0;

if(area == 'motorway'){
    speedLimit = 130;
    if(speed <= speedLimit){
    result = `Driving ${speed} km/h in a ${speedLimit} zone`;
    }else {
        difference = speed - speedLimit;
        if(difference <= 20){
            result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`;
        }else if(difference <= 40){
            result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`;
        }else {
            result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`;
        }
    }
}else if(area == 'interstate'){
    speedLimit = 90;
    if(speed <= speedLimit){
        result = `Driving ${speed} km/h in a ${speedLimit} zone`;
        }else {
            difference = speed - speedLimit;
            if(difference <= 20){
                result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`;
            }else if(difference <= 40){
                result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`;
            }else {
                result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`;
            }
        }
}else if(area == 'city'){
    speedLimit = 50;
    if(speed <= speedLimit){
        result = `Driving ${speed} km/h in a ${speedLimit} zone`;
        }else {
            difference = speed - speedLimit;
            if(difference <= 20){
                result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`;
            }else if(difference <= 40){
                result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`;
            }else {
                result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`;
            }
        }
}else if(area == 'residential'){
    speedLimit = 20;
    if(speed <= speedLimit){
        result = `Driving ${speed} km/h in a ${speedLimit} zone`;
        }else {
            difference = speed - speedLimit;
            if(difference <= 20){
                result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`;
            }else if(difference <= 40){
                result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`;
            }else {
                result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`;
            }
        }
}
console.log(result);
}

roadRadar(200, 'motorway');
