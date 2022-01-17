
function setup() {
  createCanvas(600,800); //created canvas at fixed size//
}

function draw() {
  background(71, 0, 179); //set the background colour//
//mountains//
  noStroke(); //no stroke//
  fill(170, 0, 255);
  triangle(50, 520, 158, 220, 220, 520); //draws and postions triangle//
  fill(255, 153, 255); 
  triangle(80, 520, 158, 220, 280, 520);//draws and postions triangle to make 3d appearance//
//polaroid//
  fill(255); //sets white colour//
  noStroke (); //no stroke//
  rect(80, 120, 5, 400); //creates and postions rectangle on page//
  rect(80, 120, 400, 5); //creates and postions rectangle on page//
  rect(480, 120, 5, 400); //creates and postions rectangle on page//
  rect(80, 520, 405, 120); //creates and postions rectangle on page//
//clouds//
  fill(132, 132, 225); //sets colour to blue/grey//
  ellipse(120, 170, 25, 25); //creates and postions circle on page//
  ellipse(140, 170, 32, 32); //creates and postions circle on page//
  ellipse(160, 170, 25, 25); //creates and postions circle on page//
  ellipse(180, 190, 25, 25); //creates and postions circle on page//
  ellipse(200, 190, 32, 32); //creates and postions circle on page//
  ellipse(220, 190, 25, 25); //creates and postions circle on page//
  ellipse(400, 170, 25, 25); //creates and postions circle on page//
  ellipse(420, 170, 32, 32); //creates and postions circle on page//
  ellipse(440, 170, 25, 25); //creates and postions circle on page//

  
}

