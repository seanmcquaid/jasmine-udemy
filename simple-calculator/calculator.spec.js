// suite = collection of specs
// allows us to organize our specs

// describe method is native and takes two args: 
// 1. a string to describe the suite and show in the report
// 2. an anonymous function for our tests

// expecation = assertion/statement
// true / false value returns

// 5 + 5 = 10 - statement

// expect 5 + 5 to be 10 
// result is true
// expect 5 + 4 to be 10 
// result is false


// passing and failing specs

// specs with all true expecations = passing

// specs with one of more false expectations = failing spec

describe("calculator.js", function(){
    // put specs here
    // it("title of the spec", function(){
    //     // todo : EXPECTATIONS
    // })

    it("should add numbers from total", function(){
        const calculator = new Calculator();
        calculator.add(5);
        // expect total to be 5
        // put actual value in expect
        // to be is expected value
        expect(calculator.total).toBe(5);
    })

    it("should subtract numbers from total", function(){
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.subtract(5);
        expect(calculator.total).toBe(25);
    })

    it("should multiply total by number", function(){
        const calculator = new Calculator();
        calculator.total = 100;
        calculator.multiply(2);
        expect(calculator.total).toBe(200);
    })

    it("should divide total by number", function(){
        const calculator = new Calculator();
        calculator.total = 200;
        calculator.divide(2);
        expect(calculator.total).toBe(100);
    })
});