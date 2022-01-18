function setup() {
  createCanvas(800,600);
}

function draw() {
  c1 = color(179, 255, 217); //picks colour for gradient//
  c2 = color(102, 255, 255); //picks colour for gradient//
  for(let y=0; y<height; y++){ //for loop, declaring the height 'length' of the gradient//
    n = map(y,0,height,0,1); //'maps' out when the gradient will start and end//
    let newc = lerpColor(c1,c2,n); //let valuable to link and blend the two chosen colours together//
    stroke(newc); //calls the let variable//
    line(0,y,width, y); //stops the gradient from looking 'blocky'//
  }
  noStroke();
  fill(217, 179, 255);
  ellipse(420, 410, 90, 90);
  ellipse(360, 450, 70, 70);
  ellipse(320, 490, 50, 50);
  ellipse(700, 580, 90, 90);
  ellipse(680, 510, 70, 70);
  fill(242, 13, 105);
  ellipse(500, 600, 400, 400);
  fill(255, 83, 26);
  ellipse(500, 620, 345, 380);
  fill(255, 219, 77);
  ellipse(500, 650, 295, 380);
  fill(102, 255, 153);
  ellipse(500, 685, 255, 380);
  fill(102, 179, 255);
  ellipse(500, 700, 215, 350)
  fill(102, 255, 255);
  ellipse(500, 730, 160, 350)

}