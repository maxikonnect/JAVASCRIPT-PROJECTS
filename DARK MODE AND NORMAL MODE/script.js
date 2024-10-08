
//THIS IS ADDED TO ENSURE THAT CODE ONLY EXECUTES WHEN WINDOS IS LOADED
document.addEventListener("DOMContentLoaded", function(){
    const normalModeOrDarkMode = document.querySelector(".normalModeOrDarkMode");
    let isDarkMode = localStorage.getItem("getDarkMode") === "true";

    if(isDarkMode){
        normalModeOrDarkMode.textContent = "Normal Mode";
        document.body.style.backgroundColor = "black";
    }
    else{
        normalModeOrDarkMode.textContent = "Dark Mode";
        document.body.style.backgroundColor = "white"
    }

    /* WE THEN ADD A CLICK EVENT LISTERNER TO THE NORMAL MODE.
    WE DO THAT USING ITS CLASS */

    normalModeOrDarkMode.addEventListener("click", function(){

        if(isDarkMode){
            //IF ISDARKMODE WE CHANGE THE TEXT NORMAL MODE TO DARK MODE
            normalModeOrDarkMode.textContent = "Dark Mode";
            //WE THEN SET COLOR OF BODY TO WHITE
            document.body.style.backgroundColor = "white";
            //OUR FLAG IS THEN SET TO FALSE;
            isDarkMode = false
        }
        else{
            //IF ISDARKMODE WE CHANGE THE TEXT DARKMODE TO NORMAL MODE
            normalModeOrDarkMode.textContent = "Normal Mode";
            //WE THEN SET COLOR OF BODY TO BLACK
            document.body.style.backgroundColor = "black";
            //OUR FLAG IS THEN SET TO TRUE
            isDarkMode = true;
        }
        localStorage.setItem("getDarkMode", isDarkMode); 
    })
})