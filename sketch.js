var mRect1, fRect2;
var object1, object2, object3, object4;

function setup() {
  createCanvas(800,800);
  mRect1 = createSprite(700, 200, 50, 50);
  mRect1.shapeColor = 'green';
  mRect1.velocityX = -4;
  fRect2 = createSprite(100, 200, 80, 80);
  fRect2.shapeColor = 'red';
  object1 = createSprite(200, 200, 50, 50);
  object1.shapeColor = 'red';
  object2 = createSprite(300, 200, 50, 50);
  object2.shapeColor = 'red';
  object2.velocityX = 6;
}

function draw() {
  background('blue'); 
  bounceOff(mRect1, object2);
  drawSprites();
}

function bounceOff(object1, object2){
  if(object1.x - object2.x <= (object1.width/2 + object2.width/2) && 
     object2.x - object1.x <= (object1.width/2 + object2.width/2)){
     object1.velocityX = object1.velocityX*(-1);
     object2.velocityX = object2.velocityX*(-1);
  }
}