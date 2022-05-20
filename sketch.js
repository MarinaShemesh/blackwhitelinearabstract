console.log('Abstract with lines');

let startX;
let startY;
let endX;
let endY;

let deltaStartX;
let deltaStartY;
let deltaEndX;
let deltaEndY;

function setup() {
  createCanvas(2000, 1750);
  background(255);

startX = random(width);
startY = random(height);
endX = random(width);
endY = random(height);

const range = 5;

deltaStartX = random(-range,range);
deltaStartY = random(-range,range);
deltaEndX = random(-range,range);
deltaEndY = random(-range,range);

  

}


function draw() {
  
  //make likes move
  startX += deltaStartX;
  startY += deltaStartY;
  endX += deltaEndX;
  endY += deltaEndY
  
  if(startX < 0 || startX > width){
    deltaStartX *= -1;
  }

  if(startY < 0 || startY > height){
    deltaStartY *= -1;
  }

  if(endX < 0 || endX > width){
    deltaEndX *= -1;
  }

  if(endY < 0 || endY > height){
    deltaEndY *= -1;
  }
  

  //stroke(0,50);

  line(startX, startY, endX, endY);


}

function mousePressed(){
  save('fade_out_line.png')
}