let a = ["Banana 10 5", "Strawberries 50 30", "Honey 5 50"];
let b = ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'];
let lengthA = a.length-1;
console.log(lengthA);
let c = a.concat(b);
console.log(c);
console.log(c.slice(lengthA+1));