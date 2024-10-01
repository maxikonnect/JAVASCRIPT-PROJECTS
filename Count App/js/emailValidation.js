const email = document.querySelector('input[type="email"]');
const errorMessage = document.querySelector('.emailerror');

const newRegExp = /^[A-Za-z0-9.-_+%]+@[A-Za-z0-9.-_]+\.[a-zA-Z]{2,}$/
email.addEventListener("input", function(){
    if(!(newRegExp.test(email.value))){
        errorMessage.textContent = "Enter a valid email like this \"example@example.com\"";
    }
    else{
        errorMessage.textContent = "";
    }
    
})


