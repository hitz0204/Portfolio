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
    document.body.classList.remove("body-red");
  });
});


        
hamburger.onclick = function(){
    nav.classList.toggle("nav-active");
    document.body.classList.toggle("no-scroll");
    document.body.classList.toggle("body-red");
    grid.classList.toggle("grid-overlay-menu")
    hamburger.classList.toggle("nav-white")
};



gsap.registerPlugin(ScrambleTextPlugin,  ScrollTrigger);

const headline2 = document.querySelectorAll(".hero h2,.hero p");

gsap.to(headline2, {
  duration: 1, 
  scrambleText: {
    text: "{original}", 
    chars: "!#$%(+,", 
    revealDelay: 0.5, 
    speed: 0.5, 
  }
});

const headline3 = document.querySelectorAll("#about h2, #work h2");

headline3.forEach(el => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,          // das Element selbst als Trigger
      start: "top 95%",     // wenn das Element 80% von oben sichtbar ist
      toggleActions: "play none none none", // nur einmal abspielen
    },
    duration: 1,
    scrambleText: {
      text: "{original}",
      chars: "!#$%(+,",
      revealDelay: 0.2,
      speed: 0.8,
    }
  });
});



const loader = document.querySelector(".loader");
  const percentText = loader.querySelector(".percent");

  // Damit der Scroll erst nach dem Laden geht
  document.body.classList.add("no-scroll");

  // Simulierte Prozentanzeige
  let percent = 0;
  const interval = setInterval(() => {
    percent++;
    percentText.textContent = percent;

    if (percent >= 100) {
      clearInterval(interval);
      loader.style.display = "none";
      document.body.classList.remove("no-scroll");
      grid.classList.remove("grid-load")
    }
  }, 30); // Geschwindigkeit: kleiner Wert = schnellerer Zähler