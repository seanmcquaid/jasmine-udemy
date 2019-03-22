describe("main.js", function(){
    describe("calculate()", function(){
        xit("validates expression");
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