class Movie {
 constructor(movieName, ticketPrice ){
    this.movieName = movieName;
    this.ticketPrice = Number(ticketPrice);
    this.screening = [];
    this._totalProfit = 0;
    this._totalTicket = 0;
 }

 newScreening(date, hall, description){

    if(this.screening.some(s=> s.date == date && s.hall == hall)){
        throw Error(`Sorry, ${hall} hall is not available on ${date}`);
    }
   
         this.screening.push( {
            date,
           hall,
            description
        });
         return `New screening of ${this.movieName} is added.`
     
 }

 endScreening(date, hall, soldTickets) {
    const scriining = this.screening.find(s => s.date==date && s.hall == hall);
    if(scriining == 'undefined'){
    throw Error `Sorry, there is no such screening for ${this.movieName} movie.`;
    }
        
        const index = this.screening.indexOf(scriining);
        this.screening.splice(index, 1);
        let currentProfi = soldTickets * this.ticketPrice;
        this._totalProfit += currentProfi;
        this._totalTicket += soldTickets;
        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfi}`;
    
 }

 toString(){
    let output = [`${this.movieName} full information:`,`Total profit: ${this._totalProfit.toFixed(0)}$`,`Sold Tickets: ${this._totalTicket}` ];

    
    if(this.screening == 0){
        output.push(`No more screenings!`);
    }else{
        output.push( `Remaining film screenings:`);
        this.screening.sort((a,b)=> a.hall.localeCompare(b.hall));
        for(let scr of this.screening){

            output.push(`${scr.hall} - ${scr.date} - ${scr.description}`);
        }
    }
    return output.join('\n');
}
}

let m = new Movie('Wonder Woman 1984', '10.00');
m.newScreening('October 2, 2020', 'IMAX 3D', `3D`);
m.newScreening('October 3, 2020', 'Main', `regular`);
m.newScreening('October 4, 2020', 'IMAX 3D', `3D`);

