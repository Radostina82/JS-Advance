function townPopulations(arr) {
    const result = {};

    for (let element of arr) {
        const tokens = element.split(' <-> ');
        let town = tokens[0];
        let pop = Number(tokens[1]);

        if (result[town]) {
            pop += result[town];
        }
        result[town] = pop;
    }
    for(const key in result){
        console.log(`${key} : ${result[key]}`);
    }
}

townPopulations(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);