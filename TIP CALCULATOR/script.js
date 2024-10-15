window.onload = function(){
    const amount = document.querySelector('.amount');
    const tipPercent = document.querySelector('.tipPercent');
    const button = document.querySelector('.calculate');
    const total = document.querySelector('.total');

    /* WE ADD AN EVENT LISTENER TO THE BUTTON */
    button.addEventListener('click', function(){

        /*LET US CHECK WHETHER ANY OF THE INPUTS IS EMPTY */

        if(amount.value === '' || tipPercent.value === ''){
            total.textContent = 'Fill all areas';
            total.style.backgroundColor = 'red';
            total.style.color = 'white';

        }
        /*if none of the inputs is not empty */
        else{
            /*let us clear the error message if there is any */
            total.textContent = '';
            total.style.backgroundColor = '';
            total.style.color = '';
    
            /*converts the inputs which is a string to a number */
            const itemAmount = parseFloat(amount.value);
            const itemtipPercent = parseFloat(tipPercent.value);

            const itemTotal = itemAmount + ((itemtipPercent / 100) * itemAmount);
            /*WE SPECIFY THAT WE WANT TWO DECIMAL PLACE */
            total.textContent = `$${itemTotal.toFixed(2)}`;
        }
    })

}