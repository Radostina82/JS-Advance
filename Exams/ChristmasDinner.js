class ChristmasDinner{
    constructor(budget){
        if(+budget < 0){
            throw new Error('The budget cannot be a negative number');
        }
        this.budget = +budget;
        this.dishes = [];
        this.products  = [];
        this.guests = {};
    }

    shopping(product){
        const [name, price] = product;

        if(this.budget - price < 0){
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(name);
        this.budget -= price;

        return `You have successfully bought ${name}!`
    }
    recipes(recipe){
        const {recipeName,productsList } = recipe;
        

        for(let i=0; i< productsList.length; i++){
            if(!this.products.includes(productsList[i])){
             throw new Error('We do not have this product');
            }
        }   
            this.dishes.push({recipeName, productsList});
           
            return `${recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish){
        const dishess = this.dishes.filter(d=> d.recipeName == dish);

        if(dishess.length == 0){
            throw new Error ('We do not have this dish');
        }

            if(name in this.guests){
                throw new Error (`This guest has already been invited`);
            }
        

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    showAttendance(){
        //{name} will eat {dish}, which consists of {products}
        let result = [];

        for(const guest in this.guests){
            const dish = this.guests[guest];
            const receip = this.dishes.filter(p=> p.recipeName === dish);
            const product = receip[0].productsList;
            result.push(`${guest} will eat ${dish}, which consists of ${product.join(', ')}`);
        }
        return result.join('\n');
    }
} 

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
