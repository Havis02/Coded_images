// an array to add multiple particles
let particles = []; //declares both a let variable and the array//

function setup() {
  createCanvas(800,600); //creating canvas//
  for(let i = 0;i<width/10;i++){ //for loop, to add more than one particle//
    particles.push(new Particle()); //linking to class, creating new particles//
  }
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
  for(let i = 0;i<particles.length;i++) { //for loop: varys the distance between the particles and how they are joined//
    particles[i].createParticle(); 
    particles[i].joinParticles(particles.slice(i));
  }
  noStroke();
  fill(217, 179, 255); //sets colour of circle below//
  ellipse(420, 410, 90, 90); //draws circle in stated position and size//
  ellipse(360, 450, 70, 70); //draws circle in stated position and size//
  ellipse(320, 490, 50, 50); //draws circle in stated position and size//
  ellipse(700, 580, 90, 90);//draws circle in stated position and size//
  ellipse(680, 510, 70, 70);//draws circle in stated position and size//
  fill(242, 13, 105);//sets colour of circle below//
  ellipse(500, 600, 400, 400);//draws circle in stated position and size//
  fill(255, 83, 26);//sets colour of circle below//
  ellipse(500, 620, 345, 380);//draws circle in stated position and size//
  fill(255, 219, 77);//sets colour of circle below//
  ellipse(500, 650, 295, 380);//draws circle in stated position and size//
  fill(102, 255, 153);//sets colour of circle below//
  ellipse(500, 685, 255, 380);//draws circle in stated position and size//
  fill(102, 179, 255);//sets colour of circle below//
  ellipse(500, 700, 215, 350)//draws circle in stated position and size//
  fill(102, 255, 255);//sets colour of circle below//
  ellipse(500, 730, 160, 350)//draws circle in stated position and size//
  fill(255);//sets colour of circle below//
  ellipse(430, 410, 60, 60);//draws circle in stated position and size//
  ellipse(575, 410, 60, 60);//draws circle in stated position and size//
  fill(0);//sets colour of circle below//
  ellipse(430, 410, 30, 30);//draws circle in stated position and size//
  ellipse(575, 410, 30, 30);//draws circle in stated position and size//
  fill(255, 128, 213);//sets colour of circle below//
  ellipse(10, 350, 150, 150);//draws circle in stated position and size//
  fill(255);//sets colour of circle below//
  ellipse(35, 330, 40, 40);//draws circle in stated position and size//
  fill(0);//sets colour of circle below//
  ellipse(35, 330, 30, 30);//draws circle in stated position and size//
  fill(230, 0, 153);//sets colour of circle below//
  ellipse(50, 365, 40, 15);//draws circle in stated position and size//

  drawshape_bubbles(); //calls function to be drawn//
}

function drawshape_bubbles(){ //new draw function//
  fill(102, 194, 255); //sets colour of circle below//
  ellipse(230, 365, 45, 45);//draws circle in stated position and size//
  ellipse(380, 315, 35, 35);//draws circle in stated position and size//
  fill(10, 153, 255); //sets colour of circle below//
  ellipse(430, 300, 45, 45);//draws circle in stated position and size//
  ellipse(730, 420, 35, 35);//draws circle in stated position and size//
  fill(187, 153, 255); //sets colour of circle below//
  ellipse(200, 315, 25, 25);//draws circle in stated position and size//
  ellipse(700, 375, 25, 25);//draws circle in stated position and size//
  fill(255); //sets colour of circle below//
  ellipse(245, 360, 8, 15);//draws circle in stated position and size//
  ellipse(390, 310, 5, 10);//draws circle in stated position and size//
  ellipse(445, 295, 7, 16);//draws circle in stated position and size//
  ellipse(740, 420, 5, 12);//draws circle in stated position and size//
  ellipse(208, 315, 5, 7);//draws circle in stated position and size//
  ellipse(708, 375, 5, 7);//draws circle in stated position and size//

}

class Particle { // class to describe the properties of a single particle//
  // setting the co-ordinates, radius and the
    constructor(){
      this.x = random(2,width); // setting the co-ordinates, radius and the width//
      this.y = random(2,height); // setting the co-ordinates, radius and the height//
      this.r = random(3,10); // setting the co-ordinates, radius and makes it randomise//
    
    }
    // creation of a particle.
  createParticle() {
    noStroke(); //no stroke around particles//
    fill(255, 255, 179); //colour of the particles//
    circle(this.x,this.y,this.r); //calls the different previously stated variables of width, height and randomise//
  }
  
joinParticles(particles) { // this function creates the connections(lines) between the particles//
  particles.forEach(element =>{
    let dis = dist(this.x,this.y,element.x,element.y); // between particles which are less than a certain distance apart//
    if(dis<85) { //if statement stating that if the distance is less than 85 between the particles, the joining of them (which it always will be) then to apply this characteristics//
      stroke(255, 255, 230); //colour of the stroke//
      strokeWeight(1.5); //how thick the lines that join the paritcles together will be//
      line(this.x,this.y,element.x,element.y); //describes the line and its position//
    }
  });
}
}