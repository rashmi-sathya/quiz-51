var dogImg;

function preload(){
  dogImg = loadImage("dog.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(dogImg,80,100,200,200);
}