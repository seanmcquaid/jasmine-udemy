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
    describe("updateResult()", ()=>{
        let element;
        beforeAll( ()=>{
            // executed once before all the specs are executed
            element = document.createElement("div");
            element.setAttribute("id", "result");
            document.body.appendChild(element);
            // this.element = element;
        })
        afterAll(()=>{
            document.body.removeChild(element);
        });

        it("adds result to DOM element", ()=>{
            updateResult("5");
            expect(element.innerText).toBe("5");
        })
    });
})