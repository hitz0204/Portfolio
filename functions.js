let nav = document.getElementById("navPopUp");
let hamburger = document.getElementById("hamburger");
const links = navPopUp.querySelectorAll("a");
const grid = document.querySelector(".grid-overlay");
let spans = hamburger.querySelectorAll("span");
const lightboxes = document.querySelectorAll(".glightbox");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    navPopUp.classList.remove("nav-active");
    document.body.classList.remove("no-scroll");
    grid.classList.remove("grid-overlay-menu");
    document.body.classList.remove("body-red");
    spans.forEach((span) => {
      span.classList.remove("span-white");
    });
  });
});

hamburger.onclick = function () {
  nav.classList.toggle("nav-active");
  document.body.classList.toggle("no-scroll");
  document.body.classList.toggle("body-red");
  grid.classList.toggle("grid-overlay-menu");
  hamburger.classList.toggle("open");
  spans.forEach((span) => {
    span.classList.toggle("span-white");
  });
};

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

const headline2 = document.querySelectorAll(".hero h2,.hero p");

gsap.to(headline2, {
  duration: 1,
  scrambleText: {
    text: "{original}",
    chars: "!#$%(+,",
    revealDelay: 0.5,
    speed: 0.5,
  },
});

const headline3 = document.querySelectorAll("#about h2, #work h2");

headline3.forEach((el) => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el, // das Element selbst als Trigger
      start: "top 95%", // wenn das Element 80% von oben sichtbar ist
      toggleActions: "play none none none", // nur einmal abspielen
    },
    duration: 1,
    scrambleText: {
      text: "{original}",
      chars: "!#$%(+,",
      revealDelay: 0.2,
      speed: 0.8,
    },
  });
});

const loader = document.querySelector(".loader");
const percentText = loader.querySelector(".percent");
document.body.classList.add("no-scroll");

const images = Array.from(document.images);
const videos = Array.from(document.querySelectorAll("video"));
const resources = [...images, ...videos];

let loaded = 0;


function resourceLoaded() {
  loaded++;
  const percent = Math.floor((loaded / resources.length) * 100);
  percentText.textContent = percent;

  if (loaded === resources.length) {
    setTimeout(() => {
      loader.style.display = "none";
      document.body.classList.remove("no-scroll");
      if (grid) grid.classList.remove("grid-load");
    }, 200); 
  }
}

resources.forEach((res) => {
  if (
    (res.tagName === "IMG" && res.complete) ||
    (res.tagName === "VIDEO" && res.readyState >= 3)
  ) {
    resourceLoaded();
  } else {
    res.addEventListener("load", resourceLoaded);
    res.addEventListener("loadeddata", resourceLoaded);
    res.addEventListener("error", resourceLoaded); 
  }
});





const cursor = document.querySelector(".custom-cursor");
const cursorText = cursor.querySelector(".cursor-text");

function isNoTouchDevice() {
  return !(
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

if (isNoTouchDevice()) {
  Object.assign(cursor.style, {
    width: "auto",
    height: "auto",
    minWidth: "14px",
    minHeight: "14px",
    background: "red",
    position: "fixed",
    pointerEvents: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    top: "0",
    zIndex: "9999999",
    borderRadius: "4px",
    padding: "4px",
  });

  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      xPercent: -50,
      yPercent: -50,
      duration: 0.12,
      ease: "power2.out",
      overwrite: "auto",
    });
  });

  document.addEventListener(
    "mouseenter",
    (e) => {
      const target = e.target.closest(
        ".glightbox, .nav-link, .gclose, .gnext, .gprev"
      );
      if (!target) return;

      let text = "FULLSCREEN";
      if (target.classList.contains("bachelor-poster")) text = "PLAY";
      if (target.classList.contains("work-image-container")) text = "VIEW";
      if (target.classList.contains("index-link")) text = "INDEX";
      if (target.classList.contains("about-link")) text = "ABOUT";
      if (target.classList.contains("work-link")) text = "WORK";
      if (target.classList.contains("contact-link")) text = "CONTACT";
      if (target.classList.contains("gclose")) text = "CLOSE";
      if (target.classList.contains("gnext")) text = "NEXT";
      if (target.classList.contains("gprev")) text = "PREVIOUS";

      cursorText.textContent = text;

      gsap.to(cursor, {
        padding: "5px 14px",
        borderRadius: "4px",
        duration: 0.1,
        overwrite: "auto",
      });

      gsap.to(cursorText, {
        opacity: 1,
        duration: 0.15,
        overwrite: "auto",
      });
    },
    true
  );

  document.addEventListener(
    "mouseleave",
    (e) => {
      const target = e.target.closest(
        ".glightbox, .nav-link, .gclose, .gnext, .gprev"
      );
      if (!target) return;

      gsap.to(cursor, {
        padding: "4px",
        borderRadius: "3px",
        duration: 0.15,
        overwrite: "auto",
      });

      gsap.to(cursorText, {
        opacity: 0,
        duration: 0.1,
        overwrite: "auto",
      });

      cursorText.textContent = "";
    },
    true
  );
} else {
  console.log("Touchscreen erkannt – der Code wird nicht ausgeführt.");
}
