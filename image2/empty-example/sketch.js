let myArr = [];
xPos = 0;

function setup() {
  createCanvas(1024,400)
  for (let i = 0; i < 256; i++) {
          myArr.push(i)
          console.log(myArr)
  }
      


}

function draw() {
  background(255)
  noStroke();
  noLoop();
  for (let i=0; i < myArr.length; i++){
    fill(myArr[i],70,230);
    rect(xPos,0,width/256,height);
    xPos = xPos+(width/256);
 }
}