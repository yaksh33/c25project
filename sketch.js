const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	ground=new Ground (width/2,670,width,25);
	paper=new Paper(200,450,40)

	log1=createSprite(720,600,10,80);
	log1.shapeColor=color("brown");

	log2=createSprite(600,600,10,80);
	log2.shapeColor=color("brown");

	log3=createSprite(660,640,120,10);
	log3.shapeColor=color("brown");

	
	//Create the Bodies Here.
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



