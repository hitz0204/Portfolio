/* =========================================================
   IMG
========================================================= */

const canvas = document.querySelector("#aboutImg > canvas");
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'assets/tests/PXL_20250815_092734431.MP.jpg';

const pixelSize = 20; 
const radius = 200;   
const scale = 0.3;   
const letters = "!#$%(+,?=-.%";

img.onload = () => {
    canvas.width = img.width * scale;
    canvas.height = img.height * scale;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

// Funktion für Hover-Pixel
function drawHover(mouseX, mouseY) {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    ctx.font = `${pixelSize}px monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let y = 0; y < canvas.height; y += pixelSize) {
        for (let x = 0; x < canvas.width; x += pixelSize) {
            const dx = x + pixelSize / 2 - mouseX;
            const dy = y + pixelSize / 2 - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist <= radius) {
                const imageData = ctx.getImageData(x, y, pixelSize, pixelSize);
                const data = imageData.data;
                let r = 0, g = 0, b = 0, a = 0;
                for (let i = 0; i < data.length; i += 4) {
                    r += data[i];
                    g += data[i + 1];
                    b += data[i + 2];
                    a += data[i + 3];
                }
                const pixels = data.length / 4;
                r /= pixels; g /= pixels; b /= pixels; a /= pixels;

                const opacity = 1 - dist / radius;

                ctx.fillStyle = `rgba(${r},${g},${b},${opacity})`;
                ctx.fillRect(x, y, pixelSize, pixelSize);

                const letter = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillStyle = `rgba(255,255,255,${opacity})`;
                ctx.fillText(letter, x + pixelSize / 2, y + pixelSize / 2);
            }
        }
    }
}

// Mousemove für Hover
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    drawHover(mouseX, mouseY);
});

// Mouseleave: alles zurücksetzen
canvas.addEventListener('mouseleave', () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
});
