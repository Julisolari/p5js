let img; //variable ´img´

function setup() {
  createCanvas(512, 512);
  img = loadImage('artesmultimediales/pezD.png'); //imagen de un pez chino
}

function draw() {
  background("#000");
}

  image(img, 0, 0);
  // Muestra la imagen en la posición (0, height/2) a la mitad del tamaño
  image(img, 0, height / 2, img.width / 2, img.height / 2);
}
