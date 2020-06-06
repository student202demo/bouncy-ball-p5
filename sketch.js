var ball,img;
var paddle;

function preload() {
 ball = loadImage("ball.png");
  paddle = loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);
  
  ball = createSprite(200,200,20,20);
  ball.velocityX=-4;
  ball.velocityY=-4;
  paddle = createSprite(380,200,20,120);

}

function draw() {
  background(205,153,0);
  
  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(paddle);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);
  
  if(keyDown(UP_ARROW))
  {
     paddle.velocityY=-3;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=3;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

