
var trex ,trex_running;
var fundo ,imagemdefundo;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  imagemdefundo= loadImage("ground2.png")
  

}

function setup(){
  createCanvas(600,200)
  fundo=createSprite(50,158)
  trex = createSprite(100,150)
  trex.scale = 0.5;
  trex.addAnimation("correndo",trex_running);
  fundo.addAnimation("fundinho",imagemdefundo)
  fundo.velocityX = -5
  
}

function draw(){
  background("white")
  if(fundo.x < 0){
    fundo.x = fundo.width/2
  }
  drawSprites();
}
