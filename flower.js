let n = 2;  // Starting seed

let roseK = 6;  // Determines the number of petals. Adjust to get different shapes.
let roseScale = 20;  // Adjusts the size of the rose pattern

let c = 25;  // Adjust as necessary to space out the roses

let rMax;

let colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'];  // Four colors for the layers

function setup() {
  createCanvas(850, 1100, SVG);  // Add SVG rendering context
  background(255);
  noLoop();
  noFill();
  stroke(0);

  rMax = min(width, height) * 0.5 - c * sqrt(n);
}

function draw() {
  translate(width / 2, height / 2);
  
  let r = 0;
  
  while (r < rMax) {
    let phi = (Math.sqrt(5) + 1) / 2 - 1;  
    let angle = 2 * PI * phi * n;  
    r = c * sqrt(n);
    
    if (r > rMax) {
      break;
    }
    
    let x = r * cos(angle);
    let y = r * sin(angle);
    
    let colorIndex = floor(random(4));  // Randomly select a color for each rose
    stroke(colors[colorIndex]);
    
    drawRose(x, y, roseK, roseScale);
    n++;
  }

  save("rose_pattern.svg");  // Save the drawing as SVG
}

function drawRose(px, py, k, s) {
  push();
  translate(px, py);
  
  beginShape();
  for (let theta = 0; theta < TWO_PI; theta += 0.01) {
    let radius = s * cos(k * theta);
    let x = radius * cos(theta);
    let y = radius * sin(theta);
    vertex(x, y);
  }
  endShape(CLOSE);
  
  pop();
}
