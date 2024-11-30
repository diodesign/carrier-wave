var oldX, oldY;

function setup() {
  createCanvas(360 * 2, 600);
  stroke(200, 255, 200);
  angleMode(DEGREES);
  strokeWeight(2);
  colorMode(HSB);
}

function draw() {
  background(20);
  
  for (let x = 0; x < width; x++)
  {
    let c = sin(x * 20);
    let s = noise((x + frameCount * 3) * 0.02);
    
    let y = (c * (height * 0.3) * s) + (height / 2);
    
    stroke(360 * s, 50, 100);

    if (x > 0)
      line(oldX, oldY, x, y);
    
    oldX = x;
    oldY = y;
  }
}