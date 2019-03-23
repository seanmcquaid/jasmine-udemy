describe("main.js", function(){
    describe("calculate()", function(){
        it("validates expression when the first number is invalid", function(){
            spyOn(window, "updateResult").and.stub();
            // and stub is default to spyOn but can call to stop the call after
            calculate("a+3");
            // our spy was installed on window.updateResult so we have to expect that
            // checking to see if this has been called at least once when calculate has been executed
            expect(window.updateResult).toHaveBeenCalled();
            // called with checks the arguments passed in
            expect(window.updateResult).toHaveBeenCalledWith("Operation not recognized");
            // calledtimes takes an arg for how many times it should run
            expect(window.updateResult).toHaveBeenCalledTimes(1)
        });
        it("validates expression when the second number is invalid", function(){
            spyOn(window, "updateResult")

            calculate("3+a");
            // our spy was installed on window.updateResult so we have to expect that
            // checking to see if this has been called at least once when calculate has been executed
            expect(window.updateResult).toHaveBeenCalled()
            expect(window.updateResult).toHaveBeenCalledWith("Operation not recognized");
            expect(window.updateResult).toHaveBeenCalledTimes(1)
        });
        it("validates expression when operation is invalid", function(){
            spyOn(window, "updateResult")

            calculate("3_4");
            // our spy was installed on window.updateResult so we have to expect that
            // checking to see if this has been called at least once when calculate has been executed
            expect(window.updateResult).toHaveBeenCalled()
            expect(window.updateResult).toHaveBeenCalledWith("Operation not recognized");
            expect(window.updateResult).toHaveBeenCalledTimes(1)
        });
        it("calls add", function(){
            // need to call Calculator.prototype to access methods
            // can define spy variable "double agent" that returns Calculator.protype.add
            const spy = spyOn(Calculator.prototype, "add");

            calculate("3+4");

            expect(spy).toHaveBeenCalledTimes(2)
            expect(spy).toHaveBeenCalledWith(3);
            expect(spy).toHaveBeenCalledWith(4);
        });
        it("calls subtract", function(){
            const spy = spyOn(Calculator.prototype, "subtract");

            calculate("3-7");

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(7)
        });
        it("calls multiply", function(){
            const spy = spyOn(Calculator.prototype, "multiply");

            calculate("3*8");

            expect(spy).toHaveBeenCalled();
            expect(spy).not.toHaveBeenCalledWith(3)
            expect(spy).toHaveBeenCalledWith(8)
        });
        it("calls divide", function(){
            const spy = spyOn(Calculator.prototype, "divide");

            calculate("3/2");

            expect(spy).toHaveBeenCalled();
            expect(spy).not.toHaveBeenCalledWith(3)
            expect(spy).toHaveBeenCalledWith(2)
        });
        xit("validates operation");
        xit("calls updateResult");
    });
    describe("updateResult()", function(){
        beforeAll(function(){
            // executed once before all the specs are executed
            const element = document.createElement("div");
            element.setAttribute("id", "result");
            document.body.appendChild(element);
            this.element = element;
        })
        afterAll(function(){
            document.body.removeChild(this.element);
        });

        it("adds result to DOM element", function(){
            updateResult("5");
            expect(this.element.innerText).toBe("5");
        })
    });
})