let v;
let mouse;
let maxSpeed;
let maxForce;


function setup() {
  createCanvas(600, 400);
  createP("Max Speed: ");
  maxSpeed = createSlider(0.5, 10, 5, 0.1);
  createP("Max Force: ");
  maxForce = createSlider(0.01, 1, 0.5, 0.01);
  v = new Vehicle(width / 2, height / 2);
  mouse = createVector(mouseX, mouseY);
}

function draw() {
  background(51);
  mouse.set(mouseX, mouseY);
  v.seek(mouse);
  v.update();
  v.show();
}