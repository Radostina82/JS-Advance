const { expect } = require("chai");

const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

describe("numberOperations", function() {
    describe("powNumber", function() {
        it("pow number", function() {
           expect(numberOperations.powNumber(2)).to.be.equal(4);
        });
        it("pow number whit negativ number", function() {
            expect(numberOperations.powNumber(-2)).to.be.equal(4);
         });
         it("pow number whit zero", function() {
            expect(numberOperations.powNumber(0)).to.be.equal(0);
         });
     });
     describe('numberChecker', ()=>{
         it('number undefined', ()=>{
        expect(()=>numberOperations.numberChecker(undefined)).to.throw();
         });
         it('number is string', ()=>{
            expect(()=>numberOperations.numberChecker('a')).to.throw();
         });
         it('number is greeter than 100', ()=>{
             expect(numberOperations.numberChecker(100)).to.equal(`The number is greater or equal to 100!`);
         });
         it('number is less than 100', ()=>{
             expect(numberOperations.numberChecker(99)).to.equal(`The number is lower than 100!`);
         });
     });
     describe('sumArrays', ()=>{
         it('sum arrays', ()=>{
             expect(JSON.stringify(numberOperations.sumArrays([2, 1, 5], [10, 3, 4]))).to.equal(JSON.stringify([12, 4, 9]));
         });
         it('sum arrays whit float', ()=>{
            expect(JSON.stringify(numberOperations.sumArrays([2.5, 1.0, 5.5], [10.0, 3, 4]))).to.equal(JSON.stringify([12.5, 4.0, 9.5]));
        });
        it('sum arrays whit negative', ()=>{
            expect(JSON.stringify(numberOperations.sumArrays([-2, 1, 5], [-10, -3, 4]))).to.equal(JSON.stringify([-12, -2, 9]));
        });
        it('sum arrays diferent length second arr', ()=>{
            expect(JSON.stringify(numberOperations.sumArrays([2, 1, 5], [10, 3, 4, 8]))).to.equal(JSON.stringify([12, 4, 9, 8]));
        });
        it('sum arrays diferent length first arr', ()=>{
            expect(JSON.stringify(numberOperations.sumArrays([2, 1, 5, 10], [10, 3, 4]))).to.equal(JSON.stringify([12, 4, 9, 10]));
        });
     })
});
