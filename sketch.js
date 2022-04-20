let xpos = 0;
let diameter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, width, 100, 100)
  diameter=height;
}

function draw() {
  background(xpos, 100,100);
  fill(xpos-width/2, 100, 100);
  noStroke();
  circle(xpos-diameter/2, height/2, diameter);

  xpos += 2;

  if (xpos > width+diameter) {
    xpos = 0;
  }
}
