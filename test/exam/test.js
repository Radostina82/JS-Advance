const testNumbers = require('./testNumbers');
const { expect } = require('chai');

describe('Test Numbers', () =>{

describe('Sum numbers', ()=>{
it('work at valid numbers', ()=>{
    expect(testNumbers.sumNumbers(3,5)).to.equal('8.00');
});

it('works it negative number', ()=>{
    expect(testNumbers.sumNumbers(3,-5)).to.equal('-2.00');
});
it('works it floating point', ()=>{
    expect(testNumbers.sumNumbers(1.555,0.333)).to.equal('1.89');
});
    it('retuens undefined whit string parameters',()=>{
        expect(testNumbers.sumNumbers('1','2')).to.equal(undefined);
    } );
    it('retuens undefined whit one string parameters',()=>{
        expect(testNumbers.sumNumbers('1',2)).to.equal(undefined);
        expect(testNumbers.sumNumbers(1,'2')).to.equal(undefined);
    } );

    it('retuens undefined whit invalid parameters',()=>{
        expect(testNumbers.sumNumbers(null,2)).to.equal(undefined);
        expect(testNumbers.sumNumbers(1,null)).to.equal(undefined);
        expect(testNumbers.sumNumbers(null,null)).to.equal(undefined);
    } );
});
describe('Number Cheked',()=>{
    it('cheked number is even', ()=>{
        expect(testNumbers.numberChecker(4)).to.equal('The number is even!');
    });

    it('cheked number is odd', ()=>{
        expect(testNumbers.numberChecker(3)).to.equal('The number is odd!');
    });
    it('cheked string value is even', ()=>{
        expect(testNumbers.numberChecker('4')).to.equal('The number is even!');
    });

    it('works in empty string', ()=>{
        expect(testNumbers.numberChecker('')).to.equal('The number is even!');
    });
    it('cheked string value is odd', ()=>{
        expect(testNumbers.numberChecker('3')).to.equal('The number is odd!');
    });
    it('cheked string number', ()=>{
        expect(()=>testNumbers.numberChecker('j')).to.throw();
    });
});
describe('Average Sum Arr', ()=>{

    it('test avr sum', ()=>{
        expect(testNumbers.averageSumArray([1,5,8, 2])).to.equal(4);
    })
});

});