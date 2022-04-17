const { expect } = require("chai");
const { join } = require("path/posix");

let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}


describe('dealership', ()=>{
    describe('newCarCost', ()=>{
        it('returning your old car', ()=>{
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);
        })

        it('not returning your old car', ()=>{
            expect(dealership.newCarCost('BMW 7', 30000)).to.equal(30000);
        })
    })

    describe('carEquipment', ()=>{
        it('selected extras for your car', ()=>{
            expect(JSON.stringify(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'],
            [0,2,3]))).to.equal(JSON.stringify(['heated seats','sport rims', 'navigation']));
        })
    })

    describe('euroCategory', ()=>{

        it('when categori is bigger 4', ()=>{
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.')
        })
        it('when categori is less than 4', ()=>{
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!')
        })
    })

})