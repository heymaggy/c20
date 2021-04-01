function setup() {
  createCanvas(400,400);
  a=createSprite(100, 200, 50, 50);
  a.shapeColor = "red";
  a.debug = true
  b=createSprite(340, 200, 50, 50);
  b.shapeColor = "red";
  b.debug = true
}

function draw() {
  background(0);  

  b.x = mouseX;
 b.y = mouseY;

  drawSprites();
}