//let x = 0;
//let y = 0;
//let easing = 0.01;



//function setup(){
  //createCanvas(480,480);
  //strokeWeight(30);
  //background(204);
//}

///function draw() {
        //stroke(102);
        //line(40,0,70,height);

        //if (mouseIsPressed == true){
                //stroke(0);
        //} else {
               //stroke(255);
        //}
        //line(0,70,width,50);
        //}
        //let targetX = mouseX;
        //x += (targetX - x) * easing;
        //let targetY = mouseY;
        //y += (targetY - y) * easing;
        //ellipse(x, y, 12, 12);
        //console.log(targetX + " : " + x);
        //console.log(targetY + " : " + y);

//let x;

//function setup() {
        //createCanvas(480,480);
        //x = width/2;
//}
        
//function draw() {
        //background(204);

        //line(x,0,x,height);
//}
      
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
  


