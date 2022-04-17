function heroicInventory(arr){
   
    let result = [];

    for(let element of arr){
        const hero = {};
        let el = element.split(' / ');
        let name = el[0];
        let level = Number(el[1]);
        
       
        //console.log(item)
        hero.name = name;
        hero.level = level;
        if(el.length == 3){
          
            hero.items = el[2].split(', ');
        }else{
            hero.items = [];
        }
        
        result.push(hero);
    }
    return JSON.stringify(result);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));