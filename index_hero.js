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
  fill("#e40b0b");

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

