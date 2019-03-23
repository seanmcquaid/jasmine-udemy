describe("main.js", function(){
    describe("calculate()", function(){
        it("validates expression when the first number is invalid", function(){
            spyOn(window, "updateResult").and.stub();

            calculate("a+3");
            // our spy was installed on window.updateResult so we have to expect that
            // checking to see if this has been called at least once when calculate has been executed
            expect(window.updateResult).toHaveBeenCalled()
        });
        it("validates expression when the second number is invalid", function(){
            spyOn(window, "updateResult").and.stub();

            calculate("3+a");
            // our spy was installed on window.updateResult so we have to expect that
            // checking to see if this has been called at least once when calculate has been executed
            expect(window.updateResult).toHaveBeenCalled()
        });
        it("validates expression when operation is invalid", function(){
            spyOn(window, "updateResult").and.stub();

            calculate("3_4");
            // our spy was installed on window.updateResult so we have to expect that
            // checking to see if this has been called at least once when calculate has been executed
            expect(window.updateResult).toHaveBeenCalled()
        });
        xit("calls add");
        xit("calls subtract");
        xit("calls multiply");
        xit("calls divide");
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