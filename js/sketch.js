var rood=255;
var vincent="hallo;"
var blauw=0;


function setup() {
  // put setup code here

  createCanvas(400,400);
  background(240); //dit is groen

}

function draw() {
background(0,400-mouseX,0);
blauw= random(255);
groen= random (255);
rood= random(255)
//background(rood,groen,blauw, random(255),)

  //console.log(vincent);
noStroke();

  fill("pink");
  ellipse(200,200,mouseX,mouseY);
  
  fill("red");
  rect(100,100,200,200);

  fill("blue");
  ellipse(200,200,50,50)
 
  stroke("blue");
  line(200,0,200,400);
  strokeWeight(30)
  stroke("yellow");
  line(0,200,400,200)
  strokeWeight(5);
  console.log(mouseX);
}