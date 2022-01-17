function setup() {
  createCanvas(600,800);
}

function draw() {
  background(71, 0, 179);
  fill(255);
  noStroke ();
  rect(80, 120, 5, 400);
  rect(80, 120, 400, 5);
  rect(480, 120, 5, 400);
  rect(80, 520, 405, 120);
  fill(132, 132, 225);
  ellipse(120, 170, 25, 25);
  ellipse(140, 170, 32, 32);
  ellipse(160, 170, 25, 25);
  ellipse(180, 190, 25, 25);
  ellipse(200, 190, 32, 32);
  ellipse(220, 190, 25, 25);
  ellipse(400, 170, 25, 25);
  ellipse(420, 170, 32, 32);
  ellipse(440, 170, 25, 25);

  noStroke();
  fill(255, 153, 255);
  triangle(80, 520, 158, 220, 280, 520);
}