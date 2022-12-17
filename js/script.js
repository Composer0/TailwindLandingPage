const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
// let menuDrop = document.getElementsByClassName('menuStart')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    // menuDrop.style.opacity = "1";
    // menuDrop.style.transform = "translateY(0px)";
})


// // Select all slides
// const slides = document.querySelectorAll(".slide");

// // loop through slides and set each slides translateX property to index * 100% 
// slides.forEach((slide, indx) => {
//   slide.style.transform = `translateX(${indx * 100}%)`;
// });