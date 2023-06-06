let img; 

function preload(){
  img = loadImage('pezD.png'); 
}

function setup() {
  createCanvas(512, 512);
}

function draw() {
  background("#ffe8a4");
  
let anchoImg = img.width;
let altoImg = img.height;
comsole.log(anchoImg,altoImg)
image(img,mouseX,mouseY,img.width,img.height);
}
