let menu = document.getElementById("menu-btn");
let navbar = document.querySelector(".navbar");


menu.addEventListener('click', function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})