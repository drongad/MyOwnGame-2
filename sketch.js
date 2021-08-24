var robot1
var robotImg, coin, coinImg, jungle
function preload(){
  robotImg = loadImage("robot.png")
  Bg_img = loadImage("background.jpg")
  coinImg = loadImage("coin.png")
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  robot1 = createSprite(height-400, width-200)
  robot1.addImage(robotImg)
  robot1.scale = 0.8


  
}

function draw() {
  
  background("gray");  
 image(Bg_img, 0, -height * 5, width, height * 6);
  
  if(keyDown("up")){
    robot1.y-=5
    camera.position.y = robot1.position.y
  }
  if(keyDown("right")){
    robot1.x+=5
  }
  if(keyDown("left")){
    robot1.x-=5
  }
  spawnCoins()
  drawSprites();



}
function spawnCoins(){
  if(frameCount%20 === 0){
    coin = createSprite(random(height-200,height-500),random(robot1.y -800,robot1.y-500))
    coin.addImage(coinImg)
    coin.scale = 0.3
  }
}