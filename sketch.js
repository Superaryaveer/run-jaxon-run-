var Jake,path,rightb,leftb;
var pathImage,boy_animation;
var rightB,leftB;
function preload(){
  pathImage = loadImage("path.png");
  boy_animation = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG",
"jake5.png");
}

function setup(){
  createCanvas(400,400);
  
  path = createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY=3;
  path.scale = 1;
  Jake = createSprite(200,200,10,20);
  Jake.addAnimation("jake_running",boy_animation);
  leftB = createSprite(10,200,60,400);
  rightB = createSprite(390,200,60,400);
  Jake.setCollider("rectangle",10,20);
  Jake.debug = true;
}

function draw() {
  background(0);
  Jake.x = mouseX;
  
  if(path.y > 400){
    path.y = height/2;
    leftB.visible = false;
    rightB.visible = false;
  
  }
  Jake.collide(rightB);
  Jake.collide(leftB);
drawSprites();
}
