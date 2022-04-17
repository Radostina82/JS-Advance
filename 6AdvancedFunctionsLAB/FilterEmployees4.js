function filter(data, criteria){
    let input = JSON.parse(data);
    let result = [];
    const[crit, value] = criteria.split('-');
    let counter = 0;
    for(let i = 0; i<input.length; i++){
        let item = input[i];
            if(item[crit]==value || criteria == 'all'){
            result.push(`${counter++}. ${item['first_name']} ${item['last_name']} - ${item['email']}`);
        }
    }
    
    console.log(result.join('\n'));
}
//0. Ardine Bassam - abassam0@cnn.com
//1. Kizzee Jost - kjost1@forbes.com

filter(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
  'last_name-Johnson'
);