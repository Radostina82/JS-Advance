const a = ["PizzaHut - Peter 500, George 300, Mark 800",
"TheLake - Bob 1300, Joe 780, Jane 660"];
//console.log(a);
let arr = a[0].split(' - ');
let restorant = arr[0];

  
let resultRestaurants = arr.reduce((acc, e) => {
    let [restaurant, ...workers] = e.split(/(?: - )|(?:, )/g);
    workers = workers.map(w => {
        let [worker, salary] = w.split(' ');
        return {
            worker: worker,
            salary: +salary
        };
    });
    let foundRestraunt = acc.find(r => r.name === restaurant);
    if (foundRestraunt) {
        foundRestraunt.workers = foundRestraunt.workers.concat(workers);
    } else {
        acc.push({
            name: restaurant,
            workers: workers
        });
    }
    return acc;
}, []);

resultRestaurants.forEach((el, idx) => {
    el.inputOrder = idx;
    el.avgSalary = el.workers.reduce((acc, el) => acc + el.salary, 0) / el.workers.length;
    el.maxSalary = Math.max(...el.workers.map(w => w.salary));
});

resultRestaurants.sort((a, b) => b.avgSalary - a.avgSalary || a.inputOrder - b.inputOrder);
let bestRestaurant = resultRestaurants[0];
bestRestaurant.workers.sort((a, b) => b.salary - a.salary);


