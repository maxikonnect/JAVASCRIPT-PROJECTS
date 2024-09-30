const email = document.getElementById("email");
        const button = document.querySelector("#submit");
        const validEmailChecker = document.getElementById("validEmailChecker");
        const emailChecker = document.querySelector(".emailChecker");
        email.addEventListener("input", function(e){
            let emailValue = email.value;
            const emailregExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

            if(emailregExp.test(emailValue)){
                validEmailChecker.textContent = "";
            }
            else{
                validEmailChecker.innerHTML = "Enter a valid email like this \"example@example.com\"";
            }
})