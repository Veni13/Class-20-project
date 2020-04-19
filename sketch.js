
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,800);
  r = createSprite(400,100,40,30);
  r.debug = true;
  r.shapeColor = "red";
  g = createSprite(400,300,60,30);
  g.debug = true;
  g.shapeColor= "green";

  b = createSprite(400,600,80,40);
  b.debug = true;
   b.shapeColor = "blue";

   a = createSprite(400,200,20,50);
   a.debug = true;
   a.shapeColor = "black";
}


function draw(){
  background(0,0,0);
  r.x = World.mouseX;
  g.x = World.mouseX;
  g.y = World.mouseY;
 
  b.x = World.mouseX;
 a.x = World.mouseX;
  a.y = World.mouseY;
  

  // change the value of Red based on the mouse movement about the X axis
  if(r.x > 220){
    background(255,255,255);
  }
  if(g.x < 3){
    background(49,247,264);
  }
  if(b.y < 50){
    background(255,0,29);
  }
  if(a.y < 20){
    background(192,26,228);
  }

  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  drawSprites();
}