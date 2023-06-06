let img; 
let img2;

function preload(){
  img = loadImage('pezD.png');
  img2 = loadImage('pezI,png');
  
}

function setup() {
  let canva = createCanvas(512, 512);
  canva.parent('lienzo');
}
function draw() {
  background("#ffe8a4");
  image(img, mouseX, mouseY);
  image(img2, mouseX, mouseY);
  
  fill("#000");
  rect(55, 45, 100, 65); 
  stroke("#000");
  //otro rectangulo
  fill("#ffe8a4");
  rect(200, 5, 100, 130); 
  stroke("#000");
  //otro rectangulo
  rect(25, 300, 110, 65); 
  stroke("#000");
  //otro rectangulo
  rect(136, 300, 110, 65); 
  stroke("#000");
  //otro rectangulo
  rect(136, 365, 300, 110); 
  stroke("#000");
  //ahora rectangulos con un fondo negro
  rect(0, 5, 80, 50); 
  stroke("#000");
  //otro rectangulo
  fill(0)
  rect(400, 5, 95, 120); 
  stroke("#000");
  //otro rectangulo
  rect(345, 65, 150, 120);
  stroke("#000");
  //otro rectangulo
  rect(135, 170, 100, 130); 
  stroke("#000");
  //otro rectangulo
  rect(240, 230, 90, 200); 
  stroke("#000");
  //otro rectangulo
  rect(335, 300, 90, 100); 
  stroke("#000");
  //otro rectangulo
  rect(400, 340, 90, 100); 
  stroke("#000");
  }
