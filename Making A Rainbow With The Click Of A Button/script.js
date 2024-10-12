//LET S PUT ALL THE CODE INSIDE A WINDOW ONLOAD

window.onload = function(){
    const divs = document.querySelectorAll('div');
    const rainbowMaker = document.querySelector('#rainbowMaker');

    //WE NOW ADD AN EVENT LISTENER TO THE BUTTON
    rainbowMaker.addEventListener('click', function(){
        // WE ARE GOING TO LOOP THROUGH EACH DIV
        divs.forEach((value)=>{
            //WE CHECK WHETHER THE IS NO COLOR
            if(value.style.backgroundColor === ''){
                //we specify that the color must be the id
                value.style.backgroundColor = value.id;
            }
            else{
                /*THIS CHECKS THAT IF THERE IS ARE COLORS
                MAKE IT BLANK OR REMOVE THE COLORS */
                value.style.backgroundColor = '';
            }
        })
    })

    console.log(divs)
    console.log(rainbowMaker);
}

/*WE SELECT ALL THE DIV */
