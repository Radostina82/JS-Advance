class Restaurant{
    constructor(budgetMoney){
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {

      for(const item of products){
          const [productName, productQuantity, productTotalPrice] = item.split(' ');
            
          if(Number(productTotalPrice)<=this.budgetMoney){
              this.budgetMoney -= Number(productTotalPrice);
             // this.stockProducts.hasOwnProperty(name)
              const result = Object.keys(this.stockProducts);
              if(result.includes(productName)){
                  this.stockProducts[productName] += Number(productQuantity);
                  this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
              }else{
                  this.stockProducts[productName] = productQuantity;
                  this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
              }
          }else{
              this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
          }
      }
      return this.history.join('\n');
    }

    addToMenu(meal, neededProduct, price){
       if(this.menu.hasOwnProperty(meal)) {
           return `The ${meal} is already in the our menu, try something different.`;
       }
       this.menu[meal] = {
          products: neededProduct,
           price
       }
       if(Object.keys(this.menu).length == 1){
           return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
       }
       return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
       
    }

    showTheMenu(){
        if(Object.keys(this.menu)==0){
            return `Our menu is not ready yet, please come later...`;
        }

        const result = [];
        const objEntry = Object.entries(this.menu);
        for(const item of objEntry){
            result.push(`${item[0]} - $ ${item[1].price}`);
        }
        return result.join('\n');
    }

    makeTheOrder(meal){
        if(!this.menu.hasOwnProperty(meal)){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

        const prod = this.menu[meal].products;
        for(let i = 0; i< prod.length; i++){
            const [product, quantity] = prod[i].split(' ');
            if(!this.stockProducts.hasOwnProperty(product) || Number(quantity) > this.stockProducts[product]){
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }
        this.budgetMoney+=this.menu[meal].price;
        this.menu[meal].products.forEach(p => {
            const [product, quantity] = p.split('');
            this.stockProducts[product] -= quantity;
        });
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
//let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('frozenYogurt'));