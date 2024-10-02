// Select the paragraph element for color display
const nameOfColor = document.querySelector(".nameOfColor");

// Select the button element for changing color
const colorChanger = document.querySelector(".colorChanger");

// Add event listener to the button
colorChanger.addEventListener("click", function() {
    // Generate three random numbers for RGB color
    let randomNumber1 = Math.floor(Math.random() * 256);
    let randomNumber2 = Math.floor(Math.random() * 256);
    let randomNumber3 = Math.floor(Math.random() * 256);

    // Update the paragraph text with the new color value
    nameOfColor.textContent = `BackgroundColor: rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
    
    // Change the background color of the body
    document.body.style.backgroundColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
});
