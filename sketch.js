var car,wall,speed,weight;


function setup() {
  createCanvas(1200,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(100,200,60,100);
  car.shapeColor=("green");
  wall=createSprite(1100, 200, 50, height/2);
  wall.shapeColor=("red");
}

function draw() {
  background(0); 
  car.velocityX=5; 
  if((wall.x-car.x)<(car.width+wall.width)){
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
   if(deformation<180){
    car.shapeColor=("purple");
   }
    if(deformation<180){
    car.shapeColor=("pink");
    } 
    if(deformaion<100){
    car.shapeColor=("orange");
    } 
  }
  drawSprites();
}