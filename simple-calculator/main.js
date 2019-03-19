function calculate(inputValue){
    const expression = /\+|\-|\*|\//;
    const numbers = inputValue.split(expression);
    // debugger
    const numberA = parseInt(numbers[0]);
    const numberB = parseInt(numbers[1]);

    const operation = inputValue.match(expression)
    // debugger

    const calculator = new Calculator();
    calculator.add(numberA);

    let result;
    switch(operation[0]){
        case "+":
            result = calculator.add(numberB);
            break
        case "-":
            result = calculator.subtract(numberB);
            break
        case "*":
            result = calculator.multiply(numberB);
            break
        case "/":
            result = calculator.divide(numberB);
            break
    }

    updateResult(result);
}

function updateResult(result){
    const element = document.getElementById("result");
    if(element){
        element.innerText = result;
    }
}