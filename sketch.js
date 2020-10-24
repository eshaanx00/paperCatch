
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   db1=new Db(600,600,200,15);
dB2 = new Db(500,560,15,100);
db3=new Db(700,560,15,100);
ball=new paper(100,700);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  db1.display();
  dB2.display();
  db3.display();
  ball.display();
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
  }
  drawSprites();
 
}




