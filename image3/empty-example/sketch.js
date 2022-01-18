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
  for(let i = 0;i<particles.length;i++) { //for loop: varys the 
    particles[i].createParticle();
    particles[i].joinParticles(particles.slice(i));
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
  fill(255);
  ellipse(430, 410, 60, 60);
  ellipse(575, 410, 60, 60);
  fill(0);
  ellipse(430, 410, 30, 30);
  ellipse(575, 410, 30, 30);
  fill(255, 128, 213);
  ellipse(10, 350, 150, 150);
  fill(255);
  ellipse(35, 330, 40, 40);
  fill(0);
  ellipse(35, 330, 30, 30);
  fill(230, 0, 153);
  ellipse(50, 365, 40, 15);

  drawshape_bubbles();
}

function drawshape_bubbles(){
  fill(102, 194, 255);
  ellipse(230, 365, 45, 45);
  ellipse(380, 315, 35, 35);
  fill(10, 153, 255);
  ellipse(430, 300, 45, 45);
  ellipse(730, 420, 35, 35);
  fill(187, 153, 255);
  ellipse(200, 315, 25, 25);
  ellipse(700, 375, 25, 25);
  fill(255);
  ellipse(245, 360, 8, 15);
  ellipse(390, 310, 5, 10);
  ellipse(445, 295, 7, 16);
  ellipse(740, 420, 5, 12);
  ellipse(208, 315, 5, 7);
  ellipse(708, 375, 5, 7);

}
// this class describes the properties of a single particle.
class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
    constructor(){
      this.x = random(2,width);
      this.y = random(2,height);
      this.r = random(3,10);
    
    }
    // creation of a particle.
  createParticle() {
    noStroke();
    fill(255, 255, 179);
    circle(this.x,this.y,this.r);
  }
  // this function creates the connections(lines)
// between particles which are less than a certain distance apart
joinParticles(particles) {
  particles.forEach(element =>{
    let dis = dist(this.x,this.y,element.x,element.y);
    if(dis<85) {
      stroke(255, 255, 230);
      strokeWeight(1.5);
      line(this.x,this.y,element.x,element.y);
    }
  });
}
}