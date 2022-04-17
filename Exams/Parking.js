class Parking{
    constructor(capacity ){
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar( carModel, carNumber ){
        if(this.vehicles.length >= this.capacity){
            throw new Error ('Not enough parking space.');
        }

        this.vehicles.push({
            carModel,
            carNumber,
            payed: false
        });
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar( carNumber ) {
        const car = this.vehicles.filter(c=> c.carNumber == carNumber);
        if(car.length==0){
            throw new Error (`The car, you're looking for, is not found.`);
        }
              
        if(!car[0].payed){
            throw new Error (`${carNumber} needs to pay before leaving the parking lot.`);
        }

        const index = this.vehicles.indexOf(car[0]);
        this.vehicles.splice(index, 1);

        return `${carNumber} left the parking lot.`;
    }

    pay( carNumber ) {
        let car = this.vehicles.filter(c=> c.carNumber == carNumber);
       
        if(car.length == 0){
            throw new Error (`${carNumber} is not in the parking lot.`);
        }
        if(car[0].payed){
            throw new Error (`${carNumber}'s driver has already payed his ticket.`);
        }
       
        car[0].payed = true;
       
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        const result = [];
        if(carNumber == undefined){
            result.push(`The Parking Lot has ${ this.capacity - this.vehicles.length } empty spots left.`);
            this.vehicles.sort((c1,c2)=> c1.carModel.localeCompare(c2.carModel)).forEach(c =>{
                
                if(c.payed){
                    result.push(`${c.carModel} == ${c.carNumber} - Has payed`); 
                }else{
                    result.push(`${c.carModel} == ${c.carNumber} - Not payed`);
                }
              
            });
            return result.join('\n');
        }else{
          const car = this.vehicles.filter(c=> c.carNumber == carNumber);
          
          if(car.payed){
            result.push(`${car.carModel} == ${car.carNumber} - Has payed`); 
        }else{
            result.push(`${car.carModel} == ${car.carNumber} - Not payed`);
        }
           
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Tesla t700", "TX3695CA"));
console.log(parking.addCar("Audi t500", "CA3695CA"));
console.log(parking.pay("TX3691CA"));
console.log(parking.getStatistics());
console.log(parking.pay("CA3695CA"));
//console.log(parking.removeCar("TB3691CA"));
console.log(parking.removeCar("CA3695CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
