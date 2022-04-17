function fruit(fruit, count, price){
let fruitInKg = count / 1000;
let totalPrice = fruitInKg * price;
console.log(`I need $${totalPrice.toFixed(2)} to buy ${fruitInKg.toFixed(2)} kilograms ${fruit}.`)
}

fruit('apple', 1563, 2.35);