var bullet , wall, speed,weight, thickness  ;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
bullet= createSprite(50, 200, 50, 50);
 bullet.velocityX= speed;
 bullet.color="white;"

 wall = createSprite(1200,200,thickness,height/2)
 wall.shapeColor=color(80,80,80);





}

function draw() {
  createCanvas(1600,400);
  background(0,0,0);  
  drawSprites();
 
if (hascollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5* weight* speed* speed/(thickness*thickness*thickness);

if (damage>10)
{
wall.shapeColor=color(255,0,0);
}

if(damage<10){

  wall.shapeColor=color(0,255,0);
}



 }



}




function hascollided(lbullet,lwall){
 bulletrightedge=lbullet.x+lbullet.width;
 wallLeftEdge=lwall.x;

if (bulletrightedge>+wallLeftEdge){
  return true
}
   
return false;

}