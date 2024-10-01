let countScreen = document.querySelector(".countScreen");
const logCount = document.querySelector(".logCount");
const increaseBy1 = document.querySelector(".increaseBy1");
const increaseBy2 = document.querySelector(".increaseBy2");
const increaseBy3 = document.querySelector(".increaseBy3");
const reset = document.querySelector(".reset");
const decreaseBy1 = document.querySelector(".decreaseBy1");
const decreaseBy2 = document.querySelector(".decreaseBy2");
const decreaseBy3 = document.querySelector(".decreaseBy3");
const numberCount = document.querySelector(".numberCount");
const clearCounterBoard = document.querySelector(".clearCounterBoard");
let errorMessage = document.querySelector(".errorMessage");

let count = parseInt(localStorage.getItem("countChecker")) || 0;
countScreen.textContent = count;


increaseBy1.addEventListener("click", () => counter(1));
increaseBy2.addEventListener("click", () => counter(2));
increaseBy3.addEventListener("click", () => counter(3));
reset.addEventListener("click", resetCounter);
decreaseBy1.addEventListener("click", () => counter(-1));
decreaseBy2.addEventListener("click", () => counter(-2));
decreaseBy3.addEventListener("click", () => counter(-3));

function counter(n) {
    if (count + n < 0) {
        count = 0;
    } else {
        count += n;
    }
    countScreen.innerText = count;
    localStorage.setItem("countChecker", count); 
}

function resetCounter() {
    count = 0;
    countScreen.innerText = count;
    localStorage.setItem("countChecker", count);
}

logCount.addEventListener("click", displayResult);


let storedResult = localStorage.getItem('getResult');
let myArray = storedResult ? JSON.parse(storedResult) : []; 
console.log('Stored Result:', myArray); 
numberCount.textContent = myArray.join(" "); 

function displayResult() {
    myArray.push(count);
    numberCount.textContent = myArray.join(" "); 
    localStorage.setItem('getResult', JSON.stringify(myArray)); 
    resetCounter()
    console.log(myArray);
}

clearCounterBoard.addEventListener("click", clearCounter);

function clearCounter() {
    myArray = []; 
    numberCount.textContent = ""; 
    localStorage.setItem('getResult', JSON.stringify(myArray)); 
}

numberCount.addEventListener("mouseenter", function() {
    if (numberCount.textContent === "") {
        errorMessage.textContent = "You have not entered any values yet";
        console.log(errorMessage);
    } else {
        errorMessage.textContent = "";
    }
});


numberCount.addEventListener("mouseleave", function() {
    errorMessage.textContent = ""; 
});


