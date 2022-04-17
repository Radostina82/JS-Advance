const { expect } = require("chai");

const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function(booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};

describe('Library', ()=>{
    describe('calcPriceOfBook', ()=>{
        it('calc price when year is less 1980', ()=>{
            expect(library.calcPriceOfBook('name', 1950)).to.contain(`Price of name is 10.00`);
        });
        it('calc price when year is 1980', ()=>{
            expect(library.calcPriceOfBook('name', 1980)).to.contain(`Price of name is 10.00`);
        });
        it('calc price when year is bigger 1980', ()=>{
            expect(library.calcPriceOfBook('name', 1982)).to.contain(`Price of name is 20.00`);
        });
        it('calc price when name book is not string', ()=>{
            expect(()=>library.calcPriceOfBook(15, 1950)).to.throw();
        });
        it('calc price when year book is not integer', ()=>{
            expect(()=> library.calcPriceOfBook('name', 2.5)).to.throw();
        });
        it('calc price when year book is not integer and name is not string', ()=>{
            expect(()=> library.calcPriceOfBook(15, 2.5)).to.throw();
        });

      
        
        });
   
    describe('findBook', ()=>{
        it('when arr length is 0', ()=>{
            expect(()=>library.findBook([], "Troy")).to.throw();
        });
        it('when is find book', ()=>{
            expect(library.findBook(["Troy", "Life Style", "Torronto"],"Life Style" )).to.equal('We found the book you want.');
        });
        it('book is not here', ()=>{
            expect(library.findBook(["Troy", "Torronto"],"Life Style")).to.equal('The book you are looking for is not here!');
        });
    });

    describe('arrangeTheBooks',()=>{
        it('when count is not integer', ()=>{
            expect(()=> library.arrangeTheBooks(2.5)).to.throw();
        });
        it('when count is negative number', ()=>{
            expect(()=> library.arrangeTheBooks(-10)).to.throw();
        });
        it('arrange when space is enough', ()=>{
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
        it('arrange when space is enough books is less', ()=>{
            expect(library.arrangeTheBooks(20)).to.equal('Great job, the books are arranged.');
        });
        it('arrange when space is not enough', ()=>{
            expect(library.arrangeTheBooks(50)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
});
})