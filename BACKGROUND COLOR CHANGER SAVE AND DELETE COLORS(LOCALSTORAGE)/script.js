// Select the element that will display the color name
const colorName = document.querySelector(".colorName");
// Select the button that triggers the background color change
const changeColor = document.querySelector(".changeColor");

// Select the button to save the current color
const saveColor = document.querySelector(".saveColor");
// Select the button to clear saved colors
const clearColors = document.querySelector(".clearColors");
// Select the container where saved colors will be displayed
const savedColors = document.querySelector(".savedColors");

// Add event listener to the changeColor button to trigger the color change function when clicked
changeColor.addEventListener("click", changeMyColor);

// Retrieve the last stored background color from localStorage
let storedColor = localStorage.getItem("getColor");

// If a stored color exists, set the background and display the color name
if (storedColor) {
    colorName.textContent = `BackgroundColor: ${storedColor}`;
    document.body.style.backgroundColor = storedColor;
}

// Function to generate a random background color and apply it
function changeMyColor() {
    // Generate random values for RGB color
    let randomNumber1 = Math.floor(Math.random() * 256);
    let randomNumber2 = Math.floor(Math.random() * 256);
    let randomNumber3 = Math.floor(Math.random() * 256);

    // Create the RGB color string
    let color = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;

    // Display the new color in the colorName element and apply it to the background
    colorName.textContent = `BackgroundColor: ${color}`;
    document.body.style.backgroundColor = color;

    // Store the new background color in localStorage
    localStorage.setItem("getColor", color);
}

// Add event listener to the saveColor button to trigger the save function
saveColor.addEventListener("click", saveMyFavoriteColors);
// Add event listener to the clearColors button to trigger the clear function
clearColors.addEventListener("click", deleteAllColors);

// Retrieve the saved colors array from localStorage
let storedNewColors = localStorage.getItem("getNewColor");
// If storedNewColors exists, parse it, otherwise create an empty array
let myArray = storedNewColors ? JSON.parse(storedNewColors) : [];

// Display saved colors in the savedColors div, separating each color by two line breaks
savedColors.innerHTML = myArray.join("<br><br>");

// Function to save the current background color to the saved colors list
function saveMyFavoriteColors() {
    // Get the current background color from localStorage
    let newColor = localStorage.getItem("getColor");

    // If newColor exists and isn't already in the array, add it to the array
    if (newColor && !myArray.includes(newColor)) {
        myArray.push(newColor);
        // Display the updated list of saved colors
        savedColors.innerHTML = myArray.join("<br><br>");
        // Store the updated array of saved colors in localStorage
        localStorage.setItem("getNewColor", JSON.stringify(myArray));
    }
}

// Function to clear all saved colors
function deleteAllColors() {
    // Reset the array to an empty array
    myArray = [];
    // Clear the displayed saved colors
    savedColors.innerHTML = "";
    // Update localStorage to store the empty array
    localStorage.setItem("getNewColor", JSON.stringify(myArray));
}
