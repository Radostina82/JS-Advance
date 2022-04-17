
const { expect } = require('chai');
const pizzUni = require('./pizzUni');

describe("Pizz Uni", function() {
    describe("Make order", function() {

        it("order pizza correct", function() {
            expect(pizzUni.makeAnOrder({orderedPizza: 'Pizza',
            orderedDrink: 'Cola'
        })).to.contain(`You just ordered Pizza and Cola`);

        });
        it("order pizza incorect pizza", function() {
            expect(()=>pizzUni.makeAnOrder({orderedDrink: 'Cola' })).to.throw();

        });
        
     });
     describe('getRemainingWork',()=>{
        it('The following pizzas are still preparing', ()=>{
            expect(pizzUni.getRemainingWork([{pizzaName: 'Pizza',orderedDrink: 'Cola', status: 'ready'}, 
            {pizzaName: 'Miss', orderedDrink: 'ColaKoka', status: 'preparing'},
            {pizzaName: 'Miss1', orderedDrink: 'ColaKoka1', status: 'preparing'}])).to.contains
            (`The following pizzas are still preparing: Miss, Miss1`);
        })
        it('The following pizzas are complete', ()=>{
            expect(pizzUni.getRemainingWork([{pizzaName: 'Pizza',
            orderedDrink: 'Cola', status: 'ready'}, {pizzaName: 'Miss',
            orderedDrink: 'ColaKoka', status: 'ready'},{pizzaName: 'Miss1',
            orderedDrink: 'ColaKoka1', status: 'ready'}])).to.equal
            (`All orders are complete!`);
        })
     })
     describe('orderType', ()=>{

        it('delivery carry out', ()=>{
            expect(pizzUni.orderType(50, 'Carry Out')).to.equal(45);
        })
        it('delivery', ()=>{
            expect(pizzUni.orderType(50, 'Delivery')).to.equal(50);
        })
     })
});
