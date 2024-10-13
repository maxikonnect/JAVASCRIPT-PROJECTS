const testimonials = [
    {
        photoUrl: "Assets/images/jones_james.jpg",
        text:`Working with Dutch Clothing was an absolute 
        pleasure. Their attention to detail and commitment
        to excellence are unparalleled.Every step of the
        process was smooth,and the results exceeded my expectations.`,
        userName: "Jones James",
    },
    {
        photoUrl: "Assets/images/seth_doyle.jpg",
        text: `I couldn't be more impressed with the level of 
    professionalism and care shown throughout the project.
    The team went above and beyond to ensure everything was perfect.`,
        userName: "Seth Doyle"
    },
    {
        photoUrl: "Assets/images/Sophia_Adams.jpg",
        text: `From start to finish, Dutch Clothing provided an 
        exceptional experience. Their expertise and passion 
        for what they do really shine through, making the 
        entire process effortless for me. `,
        userName: "Sophia Adams"
    }
]

const imgEl = document.querySelector('img');
const textEl = document.querySelector('.text');
const nameEl = document.querySelector('.name');

//LET'S CHECK WHETHER IT WORKS
console.log(imgEl);
console.log(textEl);
console.log(nameEl);

let currentIndex = 0;//created a variable and initialized it to zero

//we create our function to slide the testimonials

function updateTestimonials(){
    //WE USE DESTRUCTURING TO SET OUR VARIABLES TO OUR ELEMENTS IN TESTIMON IALS ARRAY
    const {photoUrl, text, userName} = testimonials[currentIndex];
    
    imgEl.src = photoUrl; //display the photos
    textEl.innerText = text; //displays the testimonials
    nameEl.innerText = userName; //displays userName

    /* AS WE CAN SEE THIS SELECTS THE FIRST ELEMENTS IN THE ARRAY SO
    LET US LET IT LOOP THROUGH ALL
    */
    currentIndex++;

    //THIS RESTARTS THE TESTIMONIALS ALL OVER AGAIN
    if(currentIndex === testimonials.length){
        currentIndex = 0
    }

    //WE NOW SET OUR TIMER
    setTimeout(updateTestimonials, 5000);
    //THIS ENSURES THAT THE TESTIMONIALS GETS CHANGED EVERY 5 SECONDS

}

//WE CALL OUT THE FUNCTION
updateTestimonials();