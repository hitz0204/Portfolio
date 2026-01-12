// const w = 10;
// const h = w;

// let xAmount = window.innerWidth/w
// let yAmount = window.innerHeight/h


// console.log(w)
// console.log(h)

// let w1 = document.getElementById("heroCanvasIndex").offsetWidth
// let h1 = document.getElementById("heroCanvasIndex").offsetHeight

// let element = document.getElementById("heroCanvasIndex")

// let mapMouseX, mapMouseY, mouseDist

// function setup() {
  
//   let myCanvas = createCanvas(w1, h1);
//   myCanvas.parent("heroCanvasIndex");
  
//   textAlign(CENTER, CENTER)
//   noStroke()
//   frameRate(60)
//   textSize(w+2)
// }

// function draw() {
//   // background("#FEEBE1")    
//   background("#000000")    
//   fill("#e10d0d")
//   window.addEventListener("resize", windowResize());
//   function windowResize(){
//   w1 = document.getElementById("heroCanvasIndex").offsetWidth
//   h1 = document.getElementById("heroCanvasIndex").offsetHeight
//   resizeCanvas(w1, h1);
//   }

//    mapMouseX = map(mouseX, 0, window.innerWidth, -xAmount/3, xAmount/3)    
//   mapMouseY = map(mouseY, 0, window.innerHeight, -yAmount/3, yAmount/3)
  
//     for(let x = 0; x < xAmount; x++){
//     for(let y = 0; y < yAmount; y++){

//         let distX2 = x - xAmount / 2;
//         let distY2 = y - yAmount / 2;
//         let distance2 = sqrt(distX2 * distX2 + distY2 * distY2)

//         let distX = (x - xAmount / 2)
//         let distY = (y - yAmount / 2)

//         if(element.matches(':hover')){
//       distX = (x - xAmount / 2) -mapMouseX;
//       distY = (y - yAmount / 2) -mapMouseY;
//       }
        
//         let distance = sqrt(distX * distX + distY * distY)

//         let wave = sin(radians(frameCount + distance2 * 70 + distY2 * 20))
//         wave = sin(radians(frameCount * 4 + (distX * y) / 10))/2 +sin(radians(frameCount * 4 + (distance * x) / 5))/2     
//         // wave = sin(radians(frameCount * 4 + (distX * y) / 10))/4     +    sin(radians(frameCount * 4 + (distance * x) / 5))/4    +  sin(radians(frameCount * 4 + (x**2 * y) / 10))/4    +    sin(radians(frameCount * 4 + (distY * x) / 5))/4     
//         // wave = sin(radians(frameCount * 4 + (distX * y) / 10))/4     +    sin(radians(frameCount * 4 + (distance * x) / 5))/4    +  sin(radians(frameCount * 4 + (x * y**2) / 10))/4    +    sin(radians(frameCount * 4 + (distY * x) / 5))/4     
//         // wave = sin(radians(frameCount * 4 + (distX * y) / 10))/4     +    sin(radians(frameCount * 4 + (distance * x) / 5))/4    +  sin(radians(frameCount * 4 + (distance**3) / 10))/4    +    sin(radians(frameCount * 4 + (distY * x) / 5))/4     
//         wave = sin(radians(frameCount * 4 + (distX * y) / 10))/4     +    sin(radians(frameCount * 4 + (distance * x) / 5))/4    +  sin(radians(frameCount * 4 + (distance*x*y) / 10))/4    +    sin(radians(frameCount * 4 + (distY * x) / 5))/4     
//         ////////wave = sin(radians(4 + (distX * y) / 10))/4     +    sin(radians( (distance * x) / 5))/4    +  sin(radians( (distance*x*y) / 10))/4    +    sin(radians(4 + (distY * x) / 5))/4     
//         // wave = sin(radians(frameCount * 4 + (distX * y) / 10))/4     +    sin(radians(frameCount * 4 + (distance * x) / 5))/4    +  sin(radians(frameCount * 4 + (x**2 + y**5) / 10))/4    +    sin(radians(frameCount * 4 + (distY * x) / 5))/4     
//         // wave = sin(radians(frameCount * 4 + (distX * y) / 10))/6     +    sin(radians(frameCount * 4 + (distance * x) / 5))/6    +  sin(radians(frameCount * 4 + (x**2 + y**5) / 10))/6    +    sin(radians(frameCount * 4 + (distY * x) / 5))/6       +sin(radians(frameCount * 4 + (distX * y * distY) / 60))/6     +    sin(radians(frameCount * 4 + (distance * x * distY) / 60))/6
//         // wave = sin(radians(frameCount * 4 + (distX * y) / 10))/6     +    sin(radians(frameCount * 4 + (distance * x) / 5))/6    +  sin(radians(frameCount * 4 + (x**2 + y**5) / 10))/6    +    sin(radians(frameCount * 4 + (distY * x) / 2))/6       +sin(radians(frameCount * 4 + (distX * distY) / 10))/6     +    sin(radians(frameCount * 4 + (distance * distY * distX) / 10))/6
//         // wave = (sin(radians(frameCount * 3 + (distX * y) / 12)) +sin(radians(frameCount * 5 + (distance * x) / 20)) +sin(radians(frameCount * 2 + (x**2 + y**4) / 15)) +sin(radians(frameCount * 6 + (distY * x) / 10)) +sin(radians(frameCount * 4 + (distX * distY) / 20)) +sin(radians(frameCount * 8 + (distance * distY * distX) / 11)) +cos(radians(frameCount * 3 + (x * y * distX) / 20)) +sin(radians(frameCount * 5 + (pow(distY, 2) * sin(x / 3)) / 20))) / 8
//         // wave = (sin(radians(frameCount * 4 + (distX * y) / 10)) +sin(radians(frameCount * 6 + (distance * x) / 10)) +sin(radians(frameCount * 8 + (x**2 + y**5) / 10)) +sin(radians(frameCount * 5 + (distY * x) / 2)) +sin(radians(frameCount * 3 + (distX * distY) / 2)) +sin(radians(frameCount * 2 + (distance * distY * distX) / 50)) +cos(radians(frameCount * 7 + (distX**2 + distY**2) / 2)) +sin(radians(frameCount * 3 + (x * y * distX * distY) / 2))) / 8;

        

//         if(wave > 0){
//             text("#",x*w+w/2,y*h+h/2)
//         }
        
        
//     }}

// }




const w = 10;
const h = w;

let xAmount, yAmount;
let w1, h1;

let element;
let mapMouseX, mapMouseY;

function setup() {
  element = document.getElementById("heroCanvasIndex");

  w1 = element.offsetWidth;
  h1 = element.offsetHeight;

  let myCanvas = createCanvas(w1, h1);
  myCanvas.parent("heroCanvasIndex");

  xAmount = width / w;
  yAmount = height / h;

  textAlign(CENTER, CENTER);
  noStroke();
  frameRate(60);
  textSize(w + 2);
}

function windowResized() {
  w1 = element.offsetWidth;
  h1 = element.offsetHeight;

  resizeCanvas(w1, h1);

  xAmount = width / w;
  yAmount = height / h;

  console.log(xAmount)
}

function draw() {
  clear()
  background(0, 0);
  fill("#e10d0d");

  mapMouseX = map(mouseX, 0, width, -xAmount / 3, xAmount / 3);
  mapMouseY = map(mouseY, 0, height, -yAmount / 3, yAmount / 3);

  for (let x = 0; x < xAmount; x++) {
    for (let y = 0; y < yAmount; y++) {

      let distX = x - xAmount / 2;
      let distY = y - yAmount / 2;

      if (element.matches(':hover')) {
        distX -= mapMouseX;
        distY -= mapMouseY;
      }

      let distance = sqrt(distX * distX + distY * distY);

      let wave =
        sin(radians(frameCount * 4 + (distX * y) / 10)) / 4 +
        sin(radians(frameCount * 4 + (distance * x) / 5)) / 4 +
        sin(radians(frameCount * 4 + (distance * x * y) / 10)) / 4 +
        sin(radians(frameCount * 4 + (distY * x) / 5)) / 4;


      if (wave > 0.2) {
        text("#", x * w + w / 2, y * h + h / 2);
      }
    }
  }
}

