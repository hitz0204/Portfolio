let nav = document.getElementById("navPopUp")
let hamburger = document.getElementById("hamburger")
const links = navPopUp.querySelectorAll('a');
const grid = document.querySelector(".grid-overlay")
let spans = hamburger.querySelectorAll("span")
const lightboxes = document.querySelectorAll(".glightbox")

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






// const cursor = document.querySelector(".custom-cursor");

// cursor.style.width = "12px";
// cursor.style.height = "12px";
// cursor.style.background = "red";
// cursor.style.position = "fixed";
// cursor.style.top = "0";
// cursor.style.pointerEvents = "none"; 

// document.addEventListener("mousemove", (evt) => {
//   gsap.set(cursor, {
//     x: evt.clientX,
//   y: evt.clientY,
//   xPercent: -50,
//   yPercent: -50
//   });
// });


// document.querySelectorAll(".img-full").forEach(el => {
//   el.dataset.cursorText = "Click";
//   console.log("JA")
// });

document.querySelectorAll(".img-full").forEach(el => {
  el.classList.add("cursor-hover");
  el.dataset.cursorText ??= "Click";
});

const cursor = document.querySelector(".custom-cursor");
const cursorText = cursor.querySelector(".cursor-text");

cursor.style.width = "auto";
cursor.style.height = "auto";
cursor.style.minWidth = "12px";
cursor.style.minHeight = "12px";
cursor.style.background = "red";
cursor.style.position = "fixed";
cursor.style.pointerEvents = "none";
cursor.style.display = "inline-flex";
cursor.style.alignItems = "center";
cursor.style.justifyContent = "center";
cursor.style.whiteSpace = "nowrap";
cursor.style.top = "0";




// Maus-Tracking
document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    xPercent: -50,
    yPercent: -50,
    duration: 0.15,
    ease: "power2.out"
  });
});

// Hover-Elemente
document.querySelectorAll(".cursor-hover").forEach(el => {

  el.addEventListener("mouseenter", () => {
    cursorText.textContent = el.dataset.cursorText;

    gsap.to(cursor, {
      padding: "5px 9px",
      borderRadius: "5px",
      backgroundColor: "red",
      duration: 0.25,
      ease: "power2.out"
    });

    gsap.to(cursorText, {
      opacity: 1,
      duration: 0.15
    });
  });

  el.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      padding: "4px",
      borderRadius: "00",
      backgroundColor: "red",
      duration: 0.25,
      ease: "power2.out"
    });

    gsap.to(cursorText, {
      opacity: 0,
      duration: 0.1
    });

    cursorText.textContent = "";
  });

});



