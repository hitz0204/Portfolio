let paddingX = 0
let paddingY = 0

let w = 10
//w = 30
let h = w

const xAmount = ((window.innerWidth - paddingX * 2) / w).toFixed(0)
const yAmount = ((window.innerHeight - paddingY * 2) / h).toFixed(0)

console.log(w)
console.log(h)

let bg = "black"
bg = 20

let wave = 0;

let t = 0;

let theta = 1
let r = 100

let w1 = document.getElementById("gridCollectionHero").offsetWidth
let h1 = document.getElementById("gridCollectionHero").offsetHeight


function setup() {
    let myCanvas = createCanvas(w1, h1);
    myCanvas.parent("gridCollectionHero");
    //rectMode(CENTER)
    textAlign(CENTER, CENTER)
    noStroke()
    // frameRate(1)
    //   angleMode(DEGREES)

}

let element = document.getElementById("gridCollectionHero")

function draw() {
    clear()
    blendMode(SCREEN)
    //background(bg)   

    const bgOverlay = "red"

    background(bgOverlay)

    translate(width / 2 - ((xAmount * w) / 2), height / 2 - ((yAmount * h) / 2))


    mapMouseX = map(mouseX, 0, window.innerWidth, -xAmount/3, xAmount/3)    
    mapMouseY = map(mouseY, 0, window.innerHeight, -yAmount/3, yAmount/3)

    for (let x = 0; x < xAmount; x++) {
        for (let y = 0; y < yAmount; y++) {

            let distX = x - xAmount / 2;
            let distY = y - yAmount / 2;


              if(element.matches(':hover')){
            distX = (x - xAmount / 2) -mapMouseX;
            distY = (y - yAmount / 2) -mapMouseY;
            }

            let distance = sqrt(distX * distX + distY * distY);

            
            let waveRot = map(wave, -1, 1, 0, TWO_PI);

            let colorWave = sin(radians(frameCount * 3));
            colorWave = map(colorWave, -1, 1, 4, 8)

            let wave1 = (sin(radians(frameCount + ((distance * 20) / 1))) + sin(radians(frameCount + (((distX + y) * distY) / 5))) + tan(radians(frameCount + ((distX * distY) / 10))) / 3)
            let wave2 = (sin(radians(frameCount + distance * ((x ** 2 + 1) / 500))) + tan(radians(frameCount + ((distance * distY) / 20))) / 2)
            let wave3 = (sin(radians(frameCount + distance * 20)) + sin(radians(frameCount + 100 + distY * x)) / 2);
            let wave4 = (sin(radians(frameCount + distance * ((x ** 2 + 1) / 500))) + tan(radians(frameCount + ((distance * distY) / 20))) / 2);
            let wave5 = (sin(radians(frameCount + distance * ((y ** 2 + x ** 2) / 1000))) + tan(radians(frameCount + ((distance * -(x + 1) * (y + 1)) / 500))) / 2);
            let wave6 = (sin(radians(frameCount + ((distance * 20) / 1))) + tan(radians(frameCount + ((distX * distY) / 10))) / 2);
            let wave7 = (sin(radians(frameCount + ((distance * 20) / 1))) + sin(radians(frameCount + (((distX + y) * distY) / 5))) + tan(radians(frameCount + ((distX * distY) / 10))) / 3);

            const active1 = wave1
            const active2 = wave2

            

            let moduloWave = map(
                active1
                , -1, 1, 1, 10);
            moduloWave = moduloWave.toFixed(0)

            let moduloWave2 = map(
                active2
                , -1, 1, 1, 10);
            moduloWave2 = moduloWave2.toFixed(0)

            let color1 = map(active1, -1, 1, 0, 255)
            let color2 = map(active2, -1, 1, 0, 255)

            //bg = "#03071e"
            //bg = "#20331a"

            

            
            let rotWave = wave7
            //wave = 1
            

            

            if (distance.toFixed(0) % moduloWave) {
                if (distance.toFixed(0) ** 2 % moduloWave2) {

                    if(rotWave < 1){
                    triangle(
                        x*w+w/2,y*h+h/2,
                        x*w, y*h+h,
                        x*w+w, y*h+h
                    )

                    }else if(rotWave >= 1 && rotWave < 2){
                    triangle(
                        x*w+w/2,y*h+h/2,
                        x*w+w, y*h,
                        x*w+w, y*h+h
                    )

                    }else if(rotWave >= 2 && rotWave < 3){
                    triangle(
                        x*w+w/2,y*h+h/2,
                        x*w, y*h,
                        x*w+w, y*h
                    )

                    }else{
                    triangle(
                        x*w+w/2,y*h+h/2,
                        x*w, y*h+h,
                        x*w, y*h
                    )
                    
                    }

                    //fill(230,distance * colorWave,distance * colorWave)
                    //fill(230,color1,color2)
                    fill(color1, 230, color2)
                    //fill(230, 230, 230)

                    //ellipse(w * x + w / 2, y * h + h / 2, w * 0.8, h * 0.8)
                    //rect(w * x, y * h, w * 0.8, h * 0.8)
                
                }} // modulo

        }} // forLoop

    // if(frameCount == 10){
    //     saveCanvas("Grid.png")
    // }

//     if (frameCount <= 360) {
//     saveCanvas("1/Overlay_3_frame_" + nf(frameCount, 3), "png"); 
//     // nf(frameCount, 3) → z.B. 001, 002, ... 360
//   }

    //fill(bgOverlay)
    //rect(0, 0, w * xAmount, h * yAmount)

    // fill("red")
    // textSize(40)
    // text(frameRate().toFixed(0),-20,-20)

}