const customMatchers = {
    toBeCalculator : function(){
        return(
            {
                compare : function (actual){
                    // actual = value of calc at this point
                    // pass needs to be dynamic instead of true/ false

                    const result = {
                        pass : actual instanceof Calculator,
                        message : ""
                    }
                    if (result.pass){
                        result.message = "Expected " + actual + " not to be instance of calculator"
                    } else {
                        result.message = "Expected " + actual + " to be instance of calculator"
                    }
                    return result
                }
            }
        )
    }
}