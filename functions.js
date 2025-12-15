let nav = document.getElementById("navPopUp")
let hamburger = document.getElementById("hamburger")
const links = navPopUp.querySelectorAll('a');
const grid = document.querySelector(".grid-overlay")

links.forEach(link => {
  link.addEventListener('click', (event) => {
    navPopUp.classList.remove('nav-active');
    document.body.classList.remove("no-scroll");
    grid.classList.remove("grid-overlay-menu")
    hamburger.classList.remove("nav-white")
  });
});


        
hamburger.onclick = function(){
    nav.classList.toggle("nav-active");
    document.body.classList.toggle("no-scroll");
    grid.classList.toggle("grid-overlay-menu")
    hamburger.classList.toggle("nav-white")
};
