
let x; //sets x value//
let y; //sets y value//
let diameter; //sets diameter//
let speed; //sets speed//
let dots = []; // array of Jitter objects

function setup() {
        createCanvas(600,800); //makes a canvas to code and 'draw' on//
        angleMode(DEGREES)
        // Create objects
  for (let i = 0; i < 30; i++) { //creating for loop - will control how many times the shapes will jitter//
        dots.push(new Jitter(random(width), random(height), random(10, 50))); //establishes the Array being created, also makes the shapes being made random in size and jitter amount//
      }
}

function mousePressed() { // create new object when mouse is pressed//
        let r = random(10, 60); //further random jitters//
        let b = new Jitter(mouseX, mouseY, r); //will change jitter depending on mouse clicks//
        dots.push(b); //links 'mousePressed' function code back to array//
      }
        
function draw() {
  c1 = color(255, 204, 230); //picks colour for gradient//
  c2 = color(255, 153, 204); //picks colour for gradient//
  for(let y=0; y<height; y++){ //for loop, declaring the height 'length' of the gradient//
    n = map(y,0,height,0,1); //'maps' out when the gradient will start and end//
    let newc = lerpColor(c1,c2,n); //let valuable to link and blend the two chosen colours together//
    stroke(newc); //calls the let variable//
    line(0,y,width, y); //stops the gradient from looking 'blocky'//
  } 
        noFill(); //will prevent fill within jittering circles//
        stroke(153, 153, 255); //will make circles blue//
        strokeWeight(5);
        for (let i = 0; i < dots.length; i++) { // for statement to move and display all the objects//
        dots[i].move();
        dots[i].display();
      }
      stroke (204, 0, 136); //adds stroke//
      fill(255, 77, 196); //changes colour of the shape created below//
      triangle(360, 300, 300, 150, 520, 240); //makes triangle in said position and size//
      triangle(85, 550, 320, 650, 250, 510); //makes second triangle in said position and size//
      stroke (255, 0, 191); //adds stroke//
      fill(255, 102, 217); //changes colour of the shape created below//
      ellipse(300,400,280,280); //makes a circle in a particular size and position//
      noStroke (); //defines no stroke//
      fill (255); //fills them white//
      ellipse(50, 200, 50,50); //creates circle shape in defined position and size//
      ellipse(90, 200, 65, 65); //creates circle shape in defined position and size//
      ellipse(130, 200, 50,50); //creates circle shape in defined position and size//
      ellipse(120, 400, 50,50);//creates circle shape in defined position and size//
      ellipse(160, 400, 65, 65);//creates circle shape in defined position and size//
      ellipse(190, 400, 50,50);//creates circle shape in defined position and size//
      ellipse(120, 700, 50,50);//creates circle shape in defined position and size//
      ellipse(155, 700, 65, 65);//creates circle shape in defined position and size//
      ellipse(190, 700, 50,50);//creates circle shape in defined position and size//
      ellipse(120, 700, 50,50);//creates circle shape in defined position and size//
      ellipse(155, 700, 65, 65);//creates circle shape in defined position and size//
      ellipse(190, 700, 50,50);//creates circle shape in defined position and size//
      ellipse(120, 100, 50,50);//creates circle shape in defined position and size//
      ellipse(155, 100, 65, 65);//creates circle shape in defined position and size//
      ellipse(190, 100, 50,50);//creates circle shape in defined position and size//
      ellipse(420, 540, 50,50);//creates circle shape in defined position and size//
      ellipse(455, 540, 65, 65);//creates circle shape in defined position and size//
      ellipse(490, 540, 50,50);//creates circle shape in defined position and size//

      fill(255, 230, 255);
      ellipse(400,410,15,25);
      ellipse(394,365,25,45);
      rotate(200);
      

      push();
      stroke(255);
      noFill();
      rotate(80);
      arc(-60, -100, 50, 40, 100, 360);
      pop();
      
      
 
}

//Jitter class//
class Jitter { //creation of a class to group the code together//

        constructor(x, y, r) {
          this.x = x; //establishing the use and need for previously valued 'x'//
          this.y = y; //establishing the use and need for previously valued 'y'//
          this.diameter = r; //linking to prior 'let r = random(10, 60);' and making the jitters of the circles be random'
          this.speed = 2; //stating the speed of the jitter//
      
        }
      
        move() { 
          this.x += random(-this.speed, this.speed); //makes the movement of the circles on both the 'x axis' and the 'y axis' random//
          this.y += random(-this.speed, this.speed);
        }
      
        display() {
          ellipse(this.x, this.y, this.diameter, this.diameter); //makes the display of the circles on both the 'x axis' and the 'y axis' random//
        }
      }
  


