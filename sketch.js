var xPos = 0;
var yPos = 0;

var size = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225, 225, 222)}
  
  
function draw() {
   if(mouseY < height) {
     fill(random(225), random(225), random(0));
     ellipse(mouseX, mouseY, size);
  }
}