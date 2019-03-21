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

// disabled spec = spec that reports as pending and will be executed

// 2 common cases! 

// 1. changes in the code
// 2. TDD > Test Driven Development

// disable by typing x in front of it for spec

// disabled suite :
// all specs within disabled suite will be marked as pending and not executed

// xdescribe works just like xit

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

    it("should initialize the total", function(){
        const calculator = new Calculator();
        expect(calculator.total).toBe(0)
        expect(calculator.total).toBeFalsy();
    })

    it("can be instantiated", function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();
        expect(calculator).toBeTruthy();
        expect(calculator2).toBeTruthy();
        expect(calculator).toEqual(calculator2)

        expect(calculator.constructor.name).toContain("Calc");
    })

    it("instantiates unique object", function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();
        // can use not to make a negative assertion
        expect(calculator).not.toBe(calculator2);
    })

    it("has common operations", function(){
        const calculator = new Calculator();

        expect(calculator.add).toBeDefined();
        expect(calculator.subtract).not.toBeUndefined();
        expect(calculator.divide).not.toBeUndefined();
        expect(calculator.multiply).not.toBeUndefined();
    })

    it("can overwrite total", function(){
        const calculator = new Calculator();

        calculator.total = null;
        expect(calculator.total).toBeNull();
    })

    it("dont not handle NaN", ()=>{
        const calculator = new Calculator();
        calculator.total = 20;
        calculator.multiply("a")

        expect(calculator.total).toBeNaN()
    })

    it("handles divide by zero", ()=>{
        const calculator = new Calculator();
        // need to use a function to return the thing that will throw something
        // if you just pass in calc.divide(0), it will return as a fail
        expect(function(){calculator.divide(0)}).toThrow()
        // throw error can take two parameters, the Error constructor and the message
        expect(function(){calculator.divide(0)}).toThrowError(Error)
        expect(function(){calculator.divide(0)}).toThrowError(Error, "cannot divide by 0")
    })


});

// deep equality comparison :
// toEqual = comparing two objects and making sure they have equal keys and values

// truthy value is a value that evaluates to true in a boolean context
// falsy value is a value that evaluates to false in a boolean context


// toContain checks to see if an array has something or a string has that specfic substring