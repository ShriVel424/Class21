var a,b,c;

function setup() {
  createCanvas(800,400);
  a = createSprite(200, 200, 50, 50);
  b = createSprite(600, 200, 70, 70);
  c = createSprite(700, 200, 30, 30);
  a.velocityX = 2;
  c.velocityX = -2;
  a.shapeColor = "green";
  b.shapeColor = "green";
  c.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  drawSprites();
  //c.x = World.mouseX;
  //c.y = World.mouseY;
  console.log(b.x-a.x);
 if (isTouching(b,c)){
  b.shapeColor="red";
  c.shapeColor="red";
  //a.velocityX = a.velocityX*-1;
  //b.velocityX = b.velocityX*-1;
 }
 else {
  b.shapeColor="green";
  c.shapeColor="green";
 }
 bounceOff(a,c);
}


