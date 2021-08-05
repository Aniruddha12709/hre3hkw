var iss,issImg 
function preload() {
  issImg = loadImage("Images/iss.png")
  sleep = loadAnimation("Images/sleep.png");
  brush = loadAnimation("Images/brush.png"); 
  eat = loadAnimation("Images/eat.png");
  drink = loadAnimation("Images/drink.png");
  move = loadAnimation("Images/move.png");
 
}




function setup() {
  createCanvas(1200,600);
  astronaut = createSprite(400, 200);
  astronaut.scale = 0.1;
  astronaut.addAnimation("sleeping",sleep);
  astronaut.addAnimation("brushing",brush);
  astronaut.addAnimation("gymming",gym);
  astronaut.addAnimation("eating",eat);
  astronaut.addAnimation("bathing",bath);
}

function draw() {
  background(issImg);  
  drawSprites();
  textSize(30);
   fill("white") 
   text("Instructions:", 20, 35); 
   textSize(22); 
   text("Up Arrow = Brushing", 20, 60); 
   text("Down Arrow = Gymming", 20, 80); 
   text("Left Arrow = Eating", 20, 95); 
   text("Right Arrow = Bathing", 20, 109); 
   text("m key = Moving", 20, 125);
   
   if(keyDown("UP_ARROW")) {
    astronaut.changeAnimation("brushing",brush);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
   }
   if(keyDown("DOWN_ARROW")) {
    astronaut.changeAnimation("gymming",gym);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
   }
   if(keyDown("LEFT_ARROW")) {
    astronaut.changeAnimation("eating",eat);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
   }
   if(keyDown("RIGHT_ARROW")) {
    astronaut.changeAnimation("bathing",bath);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
   }
   if(keyDown("m")) {
    astronaut.changeAnimation("moving",move);
    astronaut.velocityY = 2;
    astronaut.velocityX = 2;
   }

   edges = createEdgeSprites();
   astronaut.bounceOff(edges);
}