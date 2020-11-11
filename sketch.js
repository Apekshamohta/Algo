var fixedrect,movingrect


function setup() {
  createCanvas(800,400);
fixedrect = createSprite(600,400,150,100)
movingrect = createSprite(500,400,100,50)
fixedrect.shapeColor = "red"
movingrect.shapeColor = "red"
}

function draw() {
  background(255,255,255);  
movingrect.x = World.mouseX
movingrect.y = World.mouseY
if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 && 
movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
 fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2) {
   fixedrect.shapeColor = "blue"
   movingrect.shapeColor = "blue"
 } 
 else {
   fixedrect.shapeColor = "orange"
   movingrect.shapecolor = "orange"
 }
  drawSprites();
}