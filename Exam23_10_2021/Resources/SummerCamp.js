class SummerCamp{
    constructor(organizer, location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money){
        if(!Object.keys(this.priceForTheCamp).includes(condition)){
            throw new Error(`Unsuccessful registration at the camp.`);
        }

       const participant = this.listOfParticipants.filter(p => p.name == name);
       if(participant.length > 0){
        return `The ${name} is already registered at the camp.`;
       }
       if(money < this.priceForTheCamp[condition]){
           return `The money is not enough to pay the stay at the camp.`;
       }

       this.listOfParticipants.push({
           name,
           condition,
           power: 100,
           wins: 0
       });
       return `The ${name} was successfully registered.`;
    }

    unregisterParticipant (name){
        const participant = this.listOfParticipants.filter(p => p.name == name);
        if(participant.length == 0){
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        const participantRemove = participant[0];
        const index = this.listOfParticipants.indexOf(participantRemove);
        this.listOfParticipants.splice(index,1);

        return `The ${name} removed successfully.`;
    }

    timeToPlay (typeOfGame, participant1, participant2){
        const firstPlayer = this.listOfParticipants.filter(p => p.name == participant1);
        const secondPlayer = this.listOfParticipants.filter(p => p.name == participant2);

        
           
        if(typeOfGame == 'WaterBalloonFights'){
            if(firstPlayer.length == 0 || secondPlayer.length == 0){
                throw new Error(`Invalid entered name/s.`);
            }
            if(firstPlayer.length!=0 && secondPlayer.length!=0){
                if(firstPlayer[0].condition != secondPlayer[0].condition){
                    throw new Error(`Choose players with equal condition.`);
                }   
            }
            if(firstPlayer[0].power > secondPlayer[0].power){
                firstPlayer[0].wins +=1;
                return `The ${firstPlayer[0].name} is winner in the game ${typeOfGame}.`;
                
            }else if(firstPlayer[0].power < secondPlayer[0].power){
                secondPlayer[0].wins +=1;
                return `The ${secondPlayer[0].name} is winner in the game ${typeOfGame}.`;
            }else{
                return `There is no winner.`;
            }
           
            
        }else if(typeOfGame == 'Battleship'){
            if(firstPlayer.length == 0){
                throw new Error(`Invalid entered name/s.`);
            }
            firstPlayer[0].power += 20;
            return `The ${firstPlayer[0].name} successfully completed the game ${typeOfGame}.`;
        }
    }
    toString (){
        const result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        this.listOfParticipants.sort((p1,p2)=> p2.wins - p1.wins).forEach(p=>{
            //`{name} - {condition} - {power} - {wins}`
            result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`);
        });

        return result.join('\n');
    } 
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
//console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.unregisterParticipant("Petar Petarson", "student", 300));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());




