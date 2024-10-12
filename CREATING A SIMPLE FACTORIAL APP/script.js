//WE NOW WANT TO ADD OUR JAVASCRIPT
//WE WANT WINDOWS TO LOAD BEFORE CODE EXECUTES

window.onload = function(){
    const errordisplay = document.querySelector('.errordisplay');
    const enteredValue = document.querySelector('.enteredValue');
    const compute = document.querySelector('.compute');
    const displayResult = document.querySelector('.displayResult');

    //let us treat the errors first
    //upon input if there is an error we display it 
    enteredValue.addEventListener('input', function(){
        //we want to have access to the entered value;
        let valueTofactorial = enteredValue.value;
        // let us set a condition to check if it is between 1 and 50
        /*WE ARE CHECK IF ENTERED VALUE IS LESS THAN 1 OR
        ENTERED VALUE IS MORE THAN 50 OR ENTERED VALUE IS NOT A NUMBER */
        if(valueTofactorial < 1 || valueTofactorial > 50 || isNaN(valueTofactorial)){
            //WE GIVE OT AN ERROR MESSAGE
            errordisplay.textContent = 'Enter a number between 1 and 50';
            //WE CLEAR THE INPUT VALUE
            enteredValue.value = '';
            //let us focus on the input;
            enteredValue.focus();
            
        }
        else{
            errordisplay.textContent = '';
        }
    })


    //LET US CREATE OUR FACTORIAL FUNCTION

    function factorial(n){
        if(n <= 1){
            return 1; // WE SET OUR BASE NUMBER TO 1
        }
        return n * factorial(n - 1);
    }

    //NEXT WE DISPLAY OUR RESULT
    compute.addEventListener('click', function(){
        //WE WANT TO CHANGE THE INPUT VALUE TO A NUMBER USING PARSEINT  
        let computeValue = parseInt(enteredValue.value)
        //WE CALLOUT THE FACTORIAL
        displayResult.textContent = `
        The factorial of ${computeValue} is
        
        ${factorial(computeValue)}
        `
        //WE CLEAR THE INPUT AFTER DISPLAY
        enteredValue.value = '';
    })
    //LET US SEE IF IT WORKS
    console.log(factorial(0));

}


