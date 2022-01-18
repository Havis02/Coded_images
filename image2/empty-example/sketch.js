
function setup() {
  createCanvas(600,800); //created canvas at fixed size//
  
}

function draw() {
  //background(71, 0, 179); //set the background colour//
  c1 = color(41, 0, 102); //picks colour for gradient//
  c2 = color(117, 26, 255); //picks colour for gradient//
  for(let y=0; y<height; y++){ //for loop, declaring the height 'length' of the gradient//
    n = map(y,0,height,0,1); //'maps' out when the gradient will start and end//
    let newc = lerpColor(c1,c2,n); //let valuable to link and blend the two chosen colours together//
    stroke(newc); //calls the let variable//
    line(0,y,width, y); //stops the gradient from looking 'blocky'//
  }

//mountains//
  noStroke(); //no stroke//
  fill(77, 0, 56);
  triangle(110, 520, 280, 140, 360, 520);
  fill(153, 0, 115);
  triangle(150, 520, 280, 140, 420, 520);
  fill(170, 0, 255);
  triangle(50, 520, 158, 220, 220, 520); //draws and postions triangle//
  fill(255, 153, 255); 
  triangle(80, 520, 158, 220, 280, 520);//draws and postions triangle to make 3d appearance//
  fill(230, 0, 92);
  triangle(280, 520, 460, 260, 580, 520);
  fill(255, 51, 119);
  triangle(300, 520, 460, 260, 620, 520);

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

  fill(89, 0, 179);
  triangle(485, 520, 485, 260, 620, 520);
  fill(78, 0, 170);
  triangle(485, 350, 485, 260, 550, 350);
  fill(102, 0, 204);
  triangle(50, 520, 80, 430, 80, 520);


  
  noStroke();
  fill(230, 0, 172);
  ellipse(600, 760, 550, 550);
  fill(255, 51, 204);
  ellipse(630, 790, 550, 550);
  fill(255, 102, 217);
  ellipse(660, 820, 550, 550);
  fill(255, 128, 255);
  ellipse(690, 850, 550, 550);
  fill(117, 26, 255);
  ellipse(720, 880, 550, 550);

}



