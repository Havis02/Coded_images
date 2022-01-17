let x; //sets x value//
let y; //sets y value//
let diameter; //sets diameter//
let speed; //sets speed//
let dots = []; // array of Jitter objects

function setup() {
        createCanvas(600,800); //makes a canvas to code and 'draw' on//
        noFill(); //will prevent fill within jittering circles//
        stroke(255); //will make circles white//
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
        background(255, 204, 230); //changes the colour of the canvas//
        noStroke (); //removes stroke//
        for (let i = 0; i < dots.length; i++) { // move and display all the objects//
        dots[i].move();
        dots[i].display();
      }
        fill(255, 77, 196); //changes colour of the shape created below//
        ellipse(300,400,280,280); //makes a circle in a particular size and position//
        triangle(360, 300, 300, 150, 520, 240); //makes triangle in said position and size//
        triangle(85, 550, 320, 650, 250, 510); //makes second triangle in said position and size//
        
}
  


