var bow,  arrow,  redballoon , pinkballoon ,blueballoon,greenballoon,background1;
var bowimage,arrowimage,redballoonimage,pinkballoonimage,blueballoonimage,greenballoonimage,background1ima

// loading the animation and images 
function preload(){
 background1image=loadImage("background0.png");
 bowimage=loadImage("bow0.png");
 arrowimage=loadImage("arrow0.png");
 redballoonimage=loadImage("red_balloon0.png");
 pinkballoonimage=loadImage("pink_balloon0.png");
 greenballoonimage=loadImage("green_balloon0.png");
 blueballoonimage=loadImage("blue_balloon0.png");
 
  
}

function setup() {
  // creating background sprite and giving the image
  createCanvas(600, 600);
  background1=createSprite(0,0,600,600);
  background1.addImage(background1image);
  background1.scale=2.5;
  bow=createSprite(500,300,1,1);
  bow.addImage(bowimage);
  bow.scale=1;
  //creating balloons by using for functiion and giving image
  for(var i=70;i<390;i+=60){
     redballoon=createSprite(50,i,1,1);
    redballoon.addImage(redballoonimage);
    redballoon.scale=0.1;
  }
  for(var a=100;a<390;a+=60){
    var pinkballoon=createSprite(100,a,1,1);
    pinkballoon.addImage(pinkballoonimage);
    pinkballoon.scale=1.3;
  }
  for(var b=150;b<300;b+=60){
    var greenballoon=createSprite(160,b,1,1);
    greenballoon.addImage(greenballoonimage);
    greenballoon.scale=0.1;
  }
  for(var c=175;c<250;c+=60){
    var blueballoon=createSprite(220,c,1,1);
    blueballoon.addImage(blueballoonimage);
    blueballoon.scale=0.1;
  }
  
}

function draw() {
 //making backgroundthe infinite scrolling for 
  background1.velocityX=-2;
  bow.y=World.mouseY;
  if(background1.x<0){
  background1.x=background1.width/2;
  }
  //creating sprite objects
  drawSprites();
}


