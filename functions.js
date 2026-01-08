let nav = document.getElementById("navPopUp")
let hamburger = document.getElementById("hamburger")
const links = navPopUp.querySelectorAll('a');
const grid = document.querySelector(".grid-overlay")
let spans = hamburger.querySelectorAll("span")

links.forEach(link => {
  link.addEventListener('click', (event) => {
    navPopUp.classList.remove('nav-active');
    document.body.classList.remove("no-scroll");
    grid.classList.remove("grid-overlay-menu")
    document.body.classList.remove("body-red");
    spans.forEach(span => {
    span.classList.remove('span-white');
    });
  });
});


        
hamburger.onclick = function(){
    nav.classList.toggle("nav-active");
    document.body.classList.toggle("no-scroll");
    document.body.classList.toggle("body-red");
    grid.classList.toggle("grid-overlay-menu")
    hamburger.classList.toggle('open')
    spans.forEach(span => {
    span.classList.toggle('span-white');
    });
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
document.body.classList.add("no-scroll");

// Alle Ressourcen auf der Seite tracken
const images = Array.from(document.images);
const videos = Array.from(document.querySelectorAll("video"));
const resources = [...images, ...videos];

let loaded = 0;

// Funktion, die aufgerufen wird, wenn eine Ressource geladen ist
function resourceLoaded() {
  loaded++;
  const percent = Math.floor((loaded / resources.length) * 100);
  percentText.textContent = percent;

  // Wenn alles geladen ist, Loader entfernen
  if (loaded === resources.length) {
    setTimeout(() => {
      loader.style.display = "none";
      document.body.classList.remove("no-scroll");
      if (grid) grid.classList.remove("grid-load");
    }, 200); // kleine Pause für Smoothness
  }
}

// Ressourcen überwachen
resources.forEach(res => {
  // Bei Bildern: "complete" prüft, ob sie schon geladen sind
  // Bei Videos: "readyState >= 3" = Meta- und Daten geladen
  if ((res.tagName === "IMG" && res.complete) || (res.tagName === "VIDEO" && res.readyState >= 3)) {
    resourceLoaded();
  } else {
    res.addEventListener("load", resourceLoaded);
    res.addEventListener("loadeddata", resourceLoaded);
    res.addEventListener("error", resourceLoaded); // Fehler trotzdem mitzählen
  }
});






