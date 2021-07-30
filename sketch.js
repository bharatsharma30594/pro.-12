var RunnerImg, pathImg, path, Runner, left_boundary, right_boundary, subway, subwayImg, coin, coinImg, coinscore,song,slider;
function preload(){
  //pre-load images

  RunnerImg=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");
  powerImg=loadImage("power.png");
  coinImg=loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;

  Runner=createSprite(180,330,50,170);
  Runner.addAnimation("running", RunnerImg);


  power=createSprite(200,70,100,100);
  power.addImage(powerImg);
  power.scale=0.5
  coin=createSprite(200,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(100,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(300,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;
  left_boundary=createSprite(0,300,100,400);
  right_boundary=createSprite(390,300,80,400);
 left_boundary.visible=false;
right_boundary.visible=false;



}

function draw() {
  background(0);


  textSize(10);
  text('coin Score', 1,200);
  textSize(10);
  text('0', 20,230);
  path.velocityY=5;
  Runner.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ;
  if(Runner.isTouching(coin)) {
  coinscore = coinscore+1;
  }
}
Runner.collide(left_boundary);
Runner.collide(right_boundary);
edges=createEdgeSprites();
Runner.collide(edges[3]);
drawSprites();
}





