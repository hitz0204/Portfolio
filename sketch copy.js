// const w =12
// const h = w


// let w1 = document.getElementById("heroCanvasIndex").offsetWidth
// let h1 = document.getElementById("heroCanvasIndex").offsetHeight

// const xAmount = window.innerWidth / w
// const yAmount = window.innerHeight / h

// let img, img2, img3, img4, img5;          
// let maskGraphics, maskGraphics2, maskGraphics3, maskGraphics4, maskGraphics5;  
// let maskedImg, maskedImg2, maskedImg3, maskedImg4, maskedImg5;


// const opacity = 250
// const weight = 2
// const info = false





// function setup() {
//   // let myCanvas = createCanvas(window.innerWidth, window.innerHeight);
  
  
//   let myCanvas = createCanvas(w1, h1);
//   myCanvas.parent("heroCanvasIndex");
  
  
//   frameRate(30); 

//   img = createGraphics(window.innerWidth, window.innerHeight);
//   img2 = createGraphics(window.innerWidth, window.innerHeight);
//   img3 = createGraphics(window.innerWidth, window.innerHeight);
//   img4 = createGraphics(window.innerWidth, window.innerHeight);
//   img5 = createGraphics(window.innerWidth, window.innerHeight);
  
 
//   for (let x = 0; x < xAmount; x++) {
//     for (let y = 0; y < yAmount; y++) {
//   img.strokeWeight(weight)
//   //img.stroke("#598afdff")
//   img.stroke(255,255,255, opacity)
//   img.line(x * w, y * h , (x+1) * w, (y + 1) * h)
//   img2.strokeWeight(weight)
//   //img2.stroke("#483e48ff")
//   img2.stroke(255,255,255, opacity)
//   img2.line(x * w + w, y * h , (x) * w, (y + 1) * h)
//   img3.strokeWeight(weight)
//   //img3.stroke("#cf767cff")
//   img3.stroke(255,255,255, opacity)
//   img3.line(x * w, y * h, x * w + w, y* h)
//   img3.line(x * w, y * h + (h/2), x * w + w, y* h + (h/2))
//   img3.line(x * w, y * h + (h), x * w + w, y* h + (h))
//   img4.strokeWeight(weight)
//   //img4.stroke("#f8e3a8ff")
//   img4.stroke(255,255,255, opacity)
//   img4.line(x * w, y * h, x * w, y* h + h)
//   img4.line(x * w + (w/2), y * h, x * w + (w/2), y* h + h)
//   img4.line(x * w + (w), y * h, x * w + (w), y* h + h)
//   }}
  

//   maskGraphics = createGraphics(window.innerWidth, window.innerHeight)
//   maskGraphics.background(0)
//   maskGraphics.fill(255);     
//   maskGraphics2 = createGraphics(window.innerWidth, window.innerHeight)
//   maskGraphics2.background(0)
//   maskGraphics2.fill(255);     
//   maskGraphics3 = createGraphics(window.innerWidth, window.innerHeight)
//   maskGraphics3.background(0)
//   maskGraphics3.fill(255);     
//   maskGraphics4 = createGraphics(window.innerWidth, window.innerHeight)
//   maskGraphics4.background(0)
//   maskGraphics4.fill(255);     
     
// }


// let element = document.getElementById("heroCanvasIndex")

// function draw() {
//   window.addEventListener("resize", windowResize());
//   function windowResize(){
//   w1 = document.getElementById("heroCanvasIndex").offsetWidth
//   h1 = document.getElementById("heroCanvasIndex").offsetHeight
//   resizeCanvas(w1, h1);
//   }

//   maskGraphics.clear(); 
//   maskGraphics2.clear();
//   maskGraphics3.clear();
//   maskGraphics4.clear();
  
//   clear()
//   blendMode(BLEND)
//   //background(0, 0, 0, 10); // Leicht transparentes Schwarz für Nachleuchten
//   background(25);
//   strokeWeight(0)

//   //console.log(frameRate())



//   mapMouseX = map(mouseX, 0, window.innerWidth, -xAmount/3, xAmount/3)    
//   mapMouseY = map(mouseY, 0, window.innerHeight, -yAmount/3, yAmount/3)
        

        
        


//   for (let x = 0; x < xAmount; x++) {
//     for (let y = 0; y < yAmount; y++) {

//       let distX = x - xAmount / 2;
//       let distY = y - yAmount / 2;

//       if(element.matches(':hover')){
//       distX = (x - xAmount / 2) -mapMouseX;
//       distY = (y - yAmount / 2) -mapMouseY;
//       }
      
      
      
//       let distance = sqrt(distX * distX + distY * distY)

//       let wave3 = sin(radians(frameCount * 4 + (distX * y) / 10))/2 +sin(radians(frameCount * 4 + (distance * x) / 5))/2     
//     wave3 = sin(radians(frameCount * 4 + (distX * y) / 10))/4     +    sin(radians(frameCount * 4 + (distance * x) / 5))/4    +  sin(radians(frameCount * 4 + (x**2 * y) / 10))/4    +    sin(radians(frameCount * 4 + (distY * x) / 5))/4     
//     wave3 = sin(radians(frameCount * 4 + (distX * y) / 10))/4     +    sin(radians(frameCount * 4 + (distance * x) / 5))/4    +  sin(radians(frameCount * 4 + (x * y**2) / 10))/4    +    sin(radians(frameCount * 4 + (distY * x) / 5))/4     
//     wave3 = sin(radians(frameCount * 4 + (distX * y) / 10))/4     +    sin(radians(frameCount * 4 + (distance * x) / 5))/4    +  sin(radians(frameCount * 4 + (distance**3) / 10))/4    +    sin(radians(frameCount * 4 + (distY * x) / 5))/4     
//     wave3 = sin(radians(frameCount * 4 + (distX * y) / 10))/4     +    sin(radians(frameCount * 4 + (distance * x) / 5))/4    +  sin(radians(frameCount * 4 + (distance*x*y) / 10))/4    +    sin(radians(frameCount * 4 + (distY * x) / 5))/4     
//     ////////wave3 = sin(radians(4 + (distX * y) / 10))/4     +    sin(radians( (distance * x) / 5))/4    +  sin(radians( (distance*x*y) / 10))/4    +    sin(radians(4 + (distY * x) / 5))/4     
//     //wave3 = sin(radians(frameCount * 4 + (distX * y) / 10))/4     +    sin(radians(frameCount * 4 + (distance * x) / 5))/4    +  sin(radians(frameCount * 4 + (x**2 + y**5) / 10))/4    +    sin(radians(frameCount * 4 + (distY * x) / 5))/4     
//     //wave3 = sin(radians(frameCount * 4 + (distX * y) / 10))/6     +    sin(radians(frameCount * 4 + (distance * x) / 5))/6    +  sin(radians(frameCount * 4 + (x**2 + y**5) / 10))/6    +    sin(radians(frameCount * 4 + (distY * x) / 5))/6       +sin(radians(frameCount * 4 + (distX * y * distY) / 60))/6     +    sin(radians(frameCount * 4 + (distance * x * distY) / 60))/6
//     //wave3 = sin(radians(frameCount * 4 + (distX * y) / 10))/6     +    sin(radians(frameCount * 4 + (distance * x) / 5))/6    +  sin(radians(frameCount * 4 + (x**2 + y**5) / 10))/6    +    sin(radians(frameCount * 4 + (distY * x) / 2))/6       +sin(radians(frameCount * 4 + (distX * distY) / 10))/6     +    sin(radians(frameCount * 4 + (distance * distY * distX) / 10))/6
//     //wave3 = (sin(radians(frameCount * 3 + (distX * y) / 12)) +sin(radians(frameCount * 5 + (distance * x) / 20)) +sin(radians(frameCount * 2 + (x**2 + y**4) / 15)) +sin(radians(frameCount * 6 + (distY * x) / 10)) +sin(radians(frameCount * 4 + (distX * distY) / 20)) +sin(radians(frameCount * 8 + (distance * distY * distX) / 11)) +cos(radians(frameCount * 3 + (x * y * distX) / 20)) +sin(radians(frameCount * 5 + (pow(distY, 2) * sin(x / 3)) / 20))) / 8
//     //wave3 = (sin(radians(frameCount * 4 + (distX * y) / 10)) +sin(radians(frameCount * 6 + (distance * x) / 10)) +sin(radians(frameCount * 8 + (x**2 + y**5) / 10)) +sin(radians(frameCount * 5 + (distY * x) / 2)) +sin(radians(frameCount * 3 + (distX * distY) / 2)) +sin(radians(frameCount * 2 + (distance * distY * distX) / 50)) +cos(radians(frameCount * 7 + (distX**2 + distY**2) / 2)) +sin(radians(frameCount * 3 + (x * y * distX * distY) / 2))) / 8;
                  
//       if (wave3 < -0.5) {  
//         // fill("#3772ff")
//         // fill("#f6cacc")
//         // fill("#dcace8")
//         // fill("#e3f2fd")       
        
//         //fill("#2e04eaff")    
//         // fill("#2e04eaff")    
//         // fill("#450920")    
//         fill("#DEC0F1")    
//         // fill(25)
//         rect(x * w, y * h, w, h)
//         maskGraphics.strokeWeight(0)
//         maskGraphics.rect(x * w, y * h, w, h)
//       } else if (wave3 >= -0.5 && wave3 <0) {        
//         // fill("#080708")
//         // fill("#ec8385")
//         // fill("#c586dd")
//         // fill("#90caf9") 
        
//         //fill("#2805c5ff")        
//         // fill("#1d00a0ff")        
//         // fill("#A53860")        
//         fill("#B79CED")   
//         // fill(50)
//         rect(x * w, y * h, w, h)
//         maskGraphics2.strokeWeight(0)
//         maskGraphics2.rect(x * w, y * h, w, h)
//       } else if (wave3 >= 0 && wave3 <0.5) {        
//         // fill("#df2935")
//         //fill("#e35053")
//         // fill("#ae60d3")
//         // fill("#42a5f5")        

//         //fill("#2304acff")      
//         // fill("#120063ff")      
//         // fill("#DA627D")      
//         fill("#957FEF")  
//         // fill(75)
//         rect(x * w, y * h, w, h)
//         maskGraphics3.strokeWeight(0)
//         maskGraphics3.rect(x * w, y * h, w, h)
//       } else {        
//         // fill("#fdca40")
//         //fill("#d02224")
//         // fill("#9739c8")
//         // fill("#1e88e5") 
        
//         //fill("#2103a4ff")                
//         // fill("#09002fff")                
//         // fill("#FFA5AB")                
//         fill("#7161EF")      
//         // fill(100)
//         rect(x * w, y * h, w, h)
//         maskGraphics4.strokeWeight(0)
//         maskGraphics4.rect(x * w, y * h, w, h)
//       }
//     }
//   } //for
   
//   let imgCopy = img.get();           
//   imgCopy.mask(maskGraphics);         
//   maskedImg = imgCopy;              
  
//   let imgCopy2 = img2.get();            
//   imgCopy2.mask(maskGraphics2);        
//   maskedImg2 = imgCopy2;    
  
//   let imgCopy3 = img3.get();            
//   imgCopy3.mask(maskGraphics3);        
//   maskedImg3 = imgCopy3;    
  
//   let imgCopy4 = img4.get();            
//   imgCopy4.mask(maskGraphics4);        
//   maskedImg4 = imgCopy4; 

  
  

//   blendMode(SOFT_LIGHT)
//   //blendMode(OVERLAY)
//   image(maskedImg, 0, 0);
//   image(maskedImg2, 0, 0);
//   image(maskedImg3, 0, 0);
//   image(maskedImg4, 0, 0);
  

//   /*
//   blendMode(SOFT_LIGHT)
//   strokeWeight(0)
//   fill(255, 255, 255, 0)
//   rect(0,0,window.innerWidth, window.innerHeight)
//   */


//   // if(frameCount > 60 &&frameCount <= 120){
//   //   saveCanvas("Ani1.png")
//   // }

//   // if(frameCount == 10){
//   //   saveCanvas("Desktop.png")
//   // }

//   if(info == true){
//   strokeWeight(0)
//   blendMode(BLEND)
//   textSize(20)
//   fill("black")
//   text(frameRate().toFixed(0), 20,35)
//   text("W: " + window.innerWidth, 20,60)
//   text("H: " + window.innerHeight, 20,85)
//   text("X: " + xAmount.toFixed(1), 20,110)
//   text("Y: " + yAmount.toFixed(1), 20,135)
//   }
// }



const w = 10;
const h = w;

let xAmount = window.innerWidth/w
let yAmount = window.innerHeight/h


console.log(w)
console.log(h)

let w1 = document.getElementById("heroCanvasIndex").offsetWidth
let h1 = document.getElementById("heroCanvasIndex").offsetHeight

let element = document.getElementById("heroCanvasIndex")

let mapMouseX, mapMouseY, mouseDist

function setup() {
  
  let myCanvas = createCanvas(w1, h1);
  myCanvas.parent("heroCanvasIndex");
  
  textAlign(CENTER, CENTER)
  noStroke()
  frameRate(60)
  textSize(w+2)
}

function draw() {
    background("#FEEBE1")    
    fill("#e10d0d")
    // fill("#141414")

     window.addEventListener("resize", windowResize());
  function windowResize(){
  w1 = document.getElementById("heroCanvasIndex").offsetWidth
  h1 = document.getElementById("heroCanvasIndex").offsetHeight
  resizeCanvas(w1, h1);
  }

   mapMouseX = map(mouseX, 0, window.innerWidth, -xAmount/3, xAmount/3)    
  mapMouseY = map(mouseY, 0, window.innerHeight, -yAmount/3, yAmount/3)
  
    for(let x = 0; x < xAmount; x++){
    for(let y = 0; y < yAmount; y++){

        let distX2 = x - xAmount / 2;
        let distY2 = y - yAmount / 2;
        let distance2 = sqrt(distX2 * distX2 + distY2 * distY2)

        let distX = (x - xAmount / 2)
        let distY = (y - yAmount / 2)

        if(element.matches(':hover')){
      distX = (x - xAmount / 2) -mapMouseX;
      distY = (y - yAmount / 2) -mapMouseY;
      }
        
        let distance = sqrt(distX * distX + distY * distY)

        // fill(255,0,0,255- distance2 * 3)
        // fill(0,0,0,50)
        // fill(255,0,0,70)

        let wave = sin(radians(frameCount + distance2 * 70 + distY2 * 20))
        wave = sin(radians(frameCount * 4 + (distX * y) / 10))/2 +sin(radians(frameCount * 4 + (distance * x) / 5))/2     
        // wave = sin(radians(frameCount * 4 + (distX * y) / 10))/4     +    sin(radians(frameCount * 4 + (distance * x) / 5))/4    +  sin(radians(frameCount * 4 + (x**2 * y) / 10))/4    +    sin(radians(frameCount * 4 + (distY * x) / 5))/4     
        // wave = sin(radians(frameCount * 4 + (distX * y) / 10))/4     +    sin(radians(frameCount * 4 + (distance * x) / 5))/4    +  sin(radians(frameCount * 4 + (x * y**2) / 10))/4    +    sin(radians(frameCount * 4 + (distY * x) / 5))/4     
        // wave = sin(radians(frameCount * 4 + (distX * y) / 10))/4     +    sin(radians(frameCount * 4 + (distance * x) / 5))/4    +  sin(radians(frameCount * 4 + (distance**3) / 10))/4    +    sin(radians(frameCount * 4 + (distY * x) / 5))/4     
        wave = sin(radians(frameCount * 4 + (distX * y) / 10))/4     +    sin(radians(frameCount * 4 + (distance * x) / 5))/4    +  sin(radians(frameCount * 4 + (distance*x*y) / 10))/4    +    sin(radians(frameCount * 4 + (distY * x) / 5))/4     
        ////////wave = sin(radians(4 + (distX * y) / 10))/4     +    sin(radians( (distance * x) / 5))/4    +  sin(radians( (distance*x*y) / 10))/4    +    sin(radians(4 + (distY * x) / 5))/4     
        // wave = sin(radians(frameCount * 4 + (distX * y) / 10))/4     +    sin(radians(frameCount * 4 + (distance * x) / 5))/4    +  sin(radians(frameCount * 4 + (x**2 + y**5) / 10))/4    +    sin(radians(frameCount * 4 + (distY * x) / 5))/4     
        // wave = sin(radians(frameCount * 4 + (distX * y) / 10))/6     +    sin(radians(frameCount * 4 + (distance * x) / 5))/6    +  sin(radians(frameCount * 4 + (x**2 + y**5) / 10))/6    +    sin(radians(frameCount * 4 + (distY * x) / 5))/6       +sin(radians(frameCount * 4 + (distX * y * distY) / 60))/6     +    sin(radians(frameCount * 4 + (distance * x * distY) / 60))/6
        // wave = sin(radians(frameCount * 4 + (distX * y) / 10))/6     +    sin(radians(frameCount * 4 + (distance * x) / 5))/6    +  sin(radians(frameCount * 4 + (x**2 + y**5) / 10))/6    +    sin(radians(frameCount * 4 + (distY * x) / 2))/6       +sin(radians(frameCount * 4 + (distX * distY) / 10))/6     +    sin(radians(frameCount * 4 + (distance * distY * distX) / 10))/6
        // wave = (sin(radians(frameCount * 3 + (distX * y) / 12)) +sin(radians(frameCount * 5 + (distance * x) / 20)) +sin(radians(frameCount * 2 + (x**2 + y**4) / 15)) +sin(radians(frameCount * 6 + (distY * x) / 10)) +sin(radians(frameCount * 4 + (distX * distY) / 20)) +sin(radians(frameCount * 8 + (distance * distY * distX) / 11)) +cos(radians(frameCount * 3 + (x * y * distX) / 20)) +sin(radians(frameCount * 5 + (pow(distY, 2) * sin(x / 3)) / 20))) / 8
        // wave = (sin(radians(frameCount * 4 + (distX * y) / 10)) +sin(radians(frameCount * 6 + (distance * x) / 10)) +sin(radians(frameCount * 8 + (x**2 + y**5) / 10)) +sin(radians(frameCount * 5 + (distY * x) / 2)) +sin(radians(frameCount * 3 + (distX * distY) / 2)) +sin(radians(frameCount * 2 + (distance * distY * distX) / 50)) +cos(radians(frameCount * 7 + (distX**2 + distY**2) / 2)) +sin(radians(frameCount * 3 + (x * y * distX * distY) / 2))) / 8;

        

        if(wave > 0){
            // rect(x*w,y*h,w,h)
            text("#",x*w+w/2,y*h+h/2)
        }
        
        
    }}

    // if(frameCount == 10){
    //     saveCanvas("aa.png")
    // }
}

