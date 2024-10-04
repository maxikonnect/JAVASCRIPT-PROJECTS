//We are going to access our paragraph and button using our created classes
const colorName = document.querySelector(".colorName");
const changeColor = document.querySelector(".changeColor");
const SaveColor = document.querySelector(".SaveColor");
const savedColors = document.querySelector(".savedColors");


/*we now add an eventListener to our button using its class and add a function that we would call
changeMyColor
*/

changeColor.addEventListener("click", changeMyColor);


//We start to create our function
function changeMyColor(){
    //we create three random numbers using Math.floor and Math.random();
    //Math.floor rounds a number to its lowest whole number let see it
    //we comment it out 
    //console.log(Math.floor(5.4)) //Gives us 5
    //Math.random(), Gives us a randomnumber between 0 and 1. 1 is not included though
    //console.log(Math.random());
    //LET US NOW CREATE OUR RANDOM NUMBERS
    let randomNumber1 = Math.floor(Math.random() * 256);
    let randomNumber2 = Math.floor(Math.random() * 256);
    let randomNumber3 = Math.floor(Math.random() * 256);
    //This generates random numbers between 0 and 255 inclusive
    //Next we input our colors using rgb
    //Before that let us store rgb in a variable;
    let color = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
    colorName.textContent = `BackgroundColor: ${color}`;
    
    //We now change color of window using document.body
    document.body.style.backgroundColor = color;
    //Our code is working now. LET US ADD OUR CSS NOW
}


//LET US LOG OUR CODE TO SEE IF IT WORKS
console.log(colorName);
console.log(changeColor);

//press F12 on your PC/mac to see the consolein your browser.