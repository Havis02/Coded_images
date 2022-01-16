
let x;
let y = 0;
let easing = 0.01;

function setup() {
        createCanvas(480,480);
        x = width/2;
}
        
function draw() {
       if (mouseIsPressed == true){
        stroke(255);
        background(350,65,90);
        } else {
        stroke(400,245,20);
        background(760,22,280);
        }
let targetY = mouseY;
       y += (targetY - y) * easing;
       line(y,0,y,height);
       console.log(targetY + " : " + y);
}
  


